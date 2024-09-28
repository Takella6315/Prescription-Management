import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  json,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

import { enumToPgEnum } from './util';

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  notificationsEnabled: boolean('notificationsEnabled').default(false),
  lastLoginAt: timestamp('lastLoginAt').$default(() => new Date()),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  writer: one(writers, {
    fields: [users.id],
    references: [writers.userId],
  }),
  sessions: many(sessions),
  documents: many(documents),
  permissions: one(permissions, {
    fields: [users.id],
    references: [permissions.userId],
  }),
  writerSubscriptions: one(writerSubscriptions, {
    fields: [users.id],
    references: [writerSubscriptions.userId],
  }),
  enterpriseMembership: one(enterpriseMembership, {
    fields: [users.id],
    references: [enterpriseMembership.userId],
  }),
}));

// ---------------------------------------------
// Writers
// ---------------------------------------------

export enum EWriterPreference_LetterLength {
  SHORT = 'short',
  MEDIUM = 'medium',
  LONG = 'long',
  EXTRA_LONG = 'extra long',
}
export const writerPreferenceLetterLength = pgEnum(
  'writerPreferenceLetterLength',
  enumToPgEnum(EWriterPreference_LetterLength),
);

export enum EWriterPreference_LetterTone {
  INFORMAL = 'informal',
  SEMI_FORMAL = 'semi-formal',
  FORMAL = 'formal',
}

export const writerPreferenceLetterTone = pgEnum(
  'writerPreferenceLetterTone',
  enumToPgEnum(EWriterPreference_LetterTone),
);

export enum EWriterPreference_LetterStyle {
  PROFESSIONAL = 'professional',
  ACADEMIC = 'academic',
  FRIENDLY = 'friendly',
  PERSUASIVE = 'persuasive',
  DESCRIPTIVE = 'descriptive',
  EXPRESSIVE = 'expressive',
  PERSONAL = 'personal',
  UNDERSTATED = 'understated',
  SINCERE = 'sincere',
  ENTHUSIASTIC = 'enthusiastic',
  RESERVED = 'reserved',
  MEASURED = 'measured',
}

export const writerPreferenceLetterStyle = pgEnum(
  'writerPreferenceLetterStyle',
  enumToPgEnum(EWriterPreference_LetterStyle),
);

export const writers = pgTable('writer', {
  userId: text('userId')
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' }),
  username: text('username').unique().notNull(),
  field: text('field'),
  organization: text('organization'),
  role: text('role'),
  preferenceLetterLength: writerPreferenceLetterLength('preferenceLetterLength')
    .notNull()
    .default(EWriterPreference_LetterLength.MEDIUM),
  preferenceLetterTone: writerPreferenceLetterTone('preferenceLetterTone')
    .notNull()
    .default(EWriterPreference_LetterTone.FORMAL),
  preferenceLetterStyle: writerPreferenceLetterStyle('preferenceLetterStyle')
    .notNull()
    .default(EWriterPreference_LetterStyle.PROFESSIONAL),
  preferenceLetterSample: text('preferenceLetterSample'),
  preferenceLetterInstructions: text('preferenceLetterInstructions'),
  customQuestions: text('customQuestions').array(),
  customDocuments: text('customDocuments').array(),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const writerRelations = relations(writers, ({ many }) => ({
  referenceRequests: many(referenceRequests),
}));

// ---------------------------------------------
// Reference Request
// ---------------------------------------------
export enum EReferenceRequestStatus {
  UNSUBMITTED = 'unsubmitted',
  SUBMITTED = 'submitted',
  REJECTED = 'rejected',
}
export const referenceRequestStatus = pgEnum(
  'referenceRequestStatus',
  enumToPgEnum(EReferenceRequestStatus),
);
export const referenceRequests = pgTable('referenceRequest', {
  referenceRequestId: text('referenceRequestId')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  writerId: text('writerId').references(() => writers.userId, {
    onDelete: 'cascade',
  }),
  isWriteNow: boolean('isWriteNow').default(false),
  dueDate: timestamp('dueDate').notNull(),
  responses: text('responses').array(),
  documents: json('documents').array(),
  status: referenceRequestStatus('status').notNull(),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const referenceRequestsReleations = relations(
  referenceRequests,
  ({ one, many }) => ({
    writer: one(writers, {
      fields: [referenceRequests.writerId],
      references: [writers.userId],
    }),
    referenceLetters: many(referenceLetters),
  }),
);

// ---------------------------------------------
// Reference Letters
// ---------------------------------------------
export enum EReferenceLetterStatus {
  LOADING = 'loading',
  CREATED = 'created',
  FAILED = 'failed',
}
export const referenceLetterStatus = pgEnum(
  'referenceLetterStatus',
  enumToPgEnum(EReferenceLetterStatus),
);
export const referenceLetters = pgTable('referenceLetter', {
  referenceLetterId: text('referenceLetterId')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  referenceRequestId: text('referenceRequestId')
    .notNull()
    .references(() => referenceRequests.referenceRequestId, {
      onDelete: 'cascade',
    }),
  letter: text('letter'),
  status: referenceLetterStatus('status')
    .$default(() => EReferenceLetterStatus.LOADING)
    .notNull(),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const referenceLettersRelations = relations(
  referenceLetters,
  ({ one }) => ({
    referenceRequests: one(referenceRequests, {
      fields: [referenceLetters.referenceRequestId],
      references: [referenceRequests.referenceRequestId],
    }),
  }),
);

// ---------------------------------------------
// Documents
// ---------------------------------------------

export const documents = pgTable('document', {
  documentId: text('documentId').primaryKey(),
  userId: text('userId')
    .references(() => users.id)
    .notNull(),
  name: text('name').notNull(),
  public: boolean('public').notNull().default(false),
  size: integer('size').notNull(),
  type: text('type').notNull().default('image/png'),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const documentsRelations = relations(documents, ({ one }) => ({
  user: one(users, {
    fields: [documents.userId],
    references: [users.id],
  }),
}));

// ---------------------------------------------
// Writer Subscriptions
// ---------------------------------------------
export enum EWriterSubscription_Status {
  TRIAL = 'trial',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export const writerSubscriptionStatusEnum = pgEnum(
  'writerSubscriptionStatus',
  enumToPgEnum(EWriterSubscription_Status),
);

export const writerSubscriptions = pgTable('writerSubscription', {
  subscriptionId: text('subscriptionId').primaryKey(),
  userId: text('userId')
    .references(() => users.id)
    .notNull(),
  customerId: text('customerId'),
  status: writerSubscriptionStatusEnum('status'),
  expiresAt: timestamp('expiresAt'),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

// ---------------------------------------------
// Enterprise
// ---------------------------------------------
export enum EEnterpriseMembership_Type {
  ADMIN = 'admin',
  WRITER = 'writer',
}

export const enterpriseMembershipType = pgEnum(
  'enterpriseMembershipType',
  enumToPgEnum(EEnterpriseMembership_Type),
);

export const enterpriseMembership = pgTable(
  'enterpriseMembership',
  {
    userId: text('userId').references(() => users.id),
    enterpriseId: text('enterpriseId').references(
      () => enterprise.enterpriseId,
    ),
    type: enterpriseMembershipType('type').notNull(),
    createdAt: timestamp('createdAt').$default(() => new Date()),
    updatedAt: timestamp('updatedAt')
      .$default(() => new Date())
      .$onUpdate(() => new Date()),
  },
  enterpriseMembership => ({
    compositePk: primaryKey({
      columns: [enterpriseMembership.userId, enterpriseMembership.enterpriseId],
    }),
  }),
);

export const enterpriseMembershipRelation = relations(
  enterpriseMembership,
  ({ one }) => ({
    users: one(users, {
      fields: [enterpriseMembership.userId],
      references: [users.id],
    }),
    enterprise: one(enterprise, {
      fields: [enterpriseMembership.enterpriseId],
      references: [enterprise.enterpriseId],
    }),
  }),
);

export const enterprise = pgTable('enterprise', {
  enterpriseId: text('enterpriseId')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  image: text('image'),
  numberOfSeats: integer('numberOfSeats').notNull(),
  numberOfFilledSeats: integer('numberOfFilledSeats').default(0).notNull(),
  expiresAt: timestamp('expiresAt'),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const enterpriseRelation = relations(enterprise, ({ many }) => ({
  enterpriseMemberships: many(enterpriseMembership),
}));

// ---------------------------------------------
// Permissions
// ---------------------------------------------

export const permissions = pgTable('permission', {
  userId: text('userId')
    .primaryKey()
    .references(() => users.id),
  admin: boolean('admin').default(false),
});

export const permissionRelations = relations(permissions, ({ one }) => ({
  users: one(users, {
    fields: [permissions.userId],
    references: [users.id],
  }),
}));

// ---------------------------------------------
// Next Auth Tables
// ---------------------------------------------

// ---------------------------------------------
// Accounts
// ---------------------------------------------



// ---------------------------------------------
// Sessions
// ---------------------------------------------
export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
  createdAt: timestamp('createdAt').$default(() => new Date()),
  updatedAt: timestamp('updatedAt')
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  users: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

// ---------------------------------------------
// Verificiation Tokens
// ---------------------------------------------
export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
    createdAt: timestamp('createdAt').$default(() => new Date()),
    updatedAt: timestamp('updatedAt')
      .$default(() => new Date())
      .$onUpdate(() => new Date()),
  },
  verficationToken => ({
    compositePk: primaryKey({
      columns: [verficationToken.identifier, verficationToken.token],
    }),
  }),
);
