DO $$ BEGIN
 CREATE TYPE "public"."enterpriseMembershipType" AS ENUM('admin', 'writer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enterprise" (
	"enterpriseId" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text,
	"numberOfSeats" integer NOT NULL,
	"numberOfFilledSeats" integer DEFAULT 0 NOT NULL,
	"expiresAt" timestamp,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enterpriseMembership" (
	"userId" text,
	"enterpriseId" text,
	"type" "enterpriseMembershipType" NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	CONSTRAINT "enterpriseMembership_userId_enterpriseId_pk" PRIMARY KEY("userId","enterpriseId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "enterpriseMembership" ADD CONSTRAINT "enterpriseMembership_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "enterpriseMembership" ADD CONSTRAINT "enterpriseMembership_enterpriseId_enterprise_enterpriseId_fk" FOREIGN KEY ("enterpriseId") REFERENCES "public"."enterprise"("enterpriseId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
