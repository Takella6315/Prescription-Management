import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { CredentialsSignin } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { encode } from 'next-auth/jwt';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';
import { sessions, users } from '../packages/db/src/schema';
import { eq } from 'drizzle-orm';
import { db } from '../packages/db/src/drizzle';

class InvalidLoginError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.code = code;
    this.message = code;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const adapter = DrizzleAdapter(db);
  return {
    adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      CredentialsProvider({
        credentials: {
          email: { label: 'email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },

        authorize: async credentials => {
          try {
            if (!credentials.email || !credentials.password) {
              throw new InvalidLoginError('Email and password required');
            }

            const user = await db.query.users.findFirst({
              where: (users, { eq }) =>
                eq(users.email, String(credentials.email)),
              with: {
                accounts: true,
              },
            });

            if (user) {
              if (user.accounts[0].provider !== 'credentials') {
                throw new InvalidLoginError(
                  `Please sign in with ${user.accounts[0].provider}`,
                );
              }

              const passwordsMatch = await bcrypt.compare(
                String(credentials.password),
                user.accounts[0].password!,
              );

              if (!passwordsMatch) {
                throw new InvalidLoginError('Incorrect email or password');
              }

              return user;
            }

            throw new InvalidLoginError('Incorrect email or password');
          } catch (error) {
            throw error;
          }
        },
      }),
    ],

    secret: process.env.NEXTAUTH_SECRET!,

    callbacks: {
      async jwt({ token, user, account }) {
        if (account?.provider === 'credentials') {
          const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);
          const sessionToken = randomUUID();

          console.assert(user.id !== undefined);
          const session = (
            await db
              .insert(sessions)
              .values({
                sessionToken: sessionToken,
                userId: user.id!,
                expires: expires,
              })
              .returning({ sessionToken: sessions.sessionToken })
          ).at(0)!;
          token.sessionId = session.sessionToken;
        }

        return token;
      },
    },

    jwt: {
      maxAge: 60 * 60 * 24 * 30,
      async encode(arg) {
        return (arg.token?.sessionId as string) ?? (await encode(arg));
      },
    },

    pages: {
      signIn: '/login',
      signOut: '/',
    },

    debug: process.env.ENV === 'development',
    trustHost: true,

    events: {
      async signIn({ user }) {
        await db
          .update(users)
          .set({ lastLoginAt: new Date() })
          .where(eq(users.id, user.id!));
      },
      async signOut(message) {
        if ('session' in message && message.session?.sessionToken) {
          await db
            .delete(sessions)
            .where(eq(sessions.sessionToken, message.session?.sessionToken));
        }
      },
    },
  };
});
