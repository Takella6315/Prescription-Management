DO $$ BEGIN
 CREATE TYPE "public"."referenceLetterStatus" AS ENUM('loading', 'created', 'failed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."referenceRequestStatus" AS ENUM('unsubmitted', 'submitted', 'rejected');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."writerPreferenceLetterLength" AS ENUM('short', 'medium', 'long', 'extra long');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."writerPreferenceLetterStyle" AS ENUM('professional', 'academic', 'friendly', 'persuasive', 'descriptive', 'expressive', 'personal', 'understated', 'sincere', 'enthusiastic', 'reserved', 'measured');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."writerPreferenceLetterTone" AS ENUM('informal', 'semi-formal', 'formal');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."writerSubscriptionStatus" AS ENUM('trial', 'active', 'inactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"password" text,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "document" (
	"documentId" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"public" boolean DEFAULT false NOT NULL,
	"size" integer NOT NULL,
	"type" text DEFAULT 'image/png' NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "referenceLetter" (
	"referenceLetterId" text PRIMARY KEY NOT NULL,
	"referenceRequestId" text NOT NULL,
	"letter" text,
	"status" "referenceLetterStatus" NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "referenceRequest" (
	"referenceRequestId" text PRIMARY KEY NOT NULL,
	"writerId" text,
	"dueDate" timestamp NOT NULL,
	"responses" text[],
	"documents" json[],
	"status" "referenceRequestStatus" NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"notificationsEnabled" boolean DEFAULT false,
	"lastLoginAt" timestamp,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "writerSubscription" (
	"subscriptionId" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"status" "writerSubscriptionStatus",
	"expiresAt" timestamp,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "writer" (
	"userId" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"field" text,
	"organization" text,
	"role" text,
	"preferenceLetterLength" "writerPreferenceLetterLength" DEFAULT 'medium' NOT NULL,
	"preferenceLetterTone" "writerPreferenceLetterTone" DEFAULT 'formal' NOT NULL,
	"preferenceLetterStyle" "writerPreferenceLetterStyle" DEFAULT 'professional' NOT NULL,
	"preferenceLetterSample" text,
	"preferenceLetterInstructions" text,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	CONSTRAINT "writer_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "document" ADD CONSTRAINT "document_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "referenceLetter" ADD CONSTRAINT "referenceLetter_referenceRequestId_referenceRequest_referenceRequestId_fk" FOREIGN KEY ("referenceRequestId") REFERENCES "public"."referenceRequest"("referenceRequestId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "referenceRequest" ADD CONSTRAINT "referenceRequest_writerId_writer_userId_fk" FOREIGN KEY ("writerId") REFERENCES "public"."writer"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "writerSubscription" ADD CONSTRAINT "writerSubscription_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "writer" ADD CONSTRAINT "writer_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
