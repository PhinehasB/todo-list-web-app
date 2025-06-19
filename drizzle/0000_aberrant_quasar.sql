CREATE TYPE "public"."priority" AS ENUM('Extreme', 'Moderate', 'Low');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('Completed', 'In progress', 'Not started');--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"priority" "priority" DEFAULT 'Low',
	"status" "status" DEFAULT 'Not started',
	"description" text,
	"vital" boolean DEFAULT false,
	"thumbnail" varchar,
	"createdAt" timestamp DEFAULT now()
);
