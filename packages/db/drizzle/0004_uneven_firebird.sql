CREATE TABLE IF NOT EXISTS "permission" (
	"userId" text PRIMARY KEY NOT NULL,
	"admin" boolean DEFAULT false
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "permission" ADD CONSTRAINT "permission_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
