import { auth } from '@/auth';
import { z } from 'zod';
import { createServerActionProcedure } from 'zsa';
import * as Sentry from '@sentry/nextjs';
import { PublicError } from '../utils';

function shapeErrors({
  err,
}: {
  err: any; // eslint-disable-line
}) {
  const isAllowedError = err instanceof PublicError;
  const isDev = process.env.ENV === 'development';
  if (isAllowedError || isDev) {
    return {
      code: 'ERROR',
      message: `${!isAllowedError && isDev ? 'DEV ONLY ENABLED - ' : ''}${
        err.message // eslint-disable-line
      }`,
    };
  }

  Sentry.captureException(err);
  return {
    code: 'ERROR',
    message: 'Uh oh, something went wrong!',
  };
}

export const useAuthenticatedActionProcedure = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .input(z.object({ breadcrumb: z.string() }))
  .handler(async ({ input }) => {
    const session = await auth();
    if (!session || session.user === undefined) {
      throw new PublicError(`You must be logged in: ${input.breadcrumb}`);
    }
    return { session };
  });

export const useUnauthenticatedActionProcedure = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .input(z.object({ breadcrumb: z.string() }))
  .handler(async () => {
    const session = await auth();
    return { session };
  });
