/*
  Warnings:

  - You are about to drop the column `createdAt` on the `trainings` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Coach', 'Default');

-- CreateEnum
CREATE TYPE "UserSex" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "MetroStation" AS ENUM ('Petrogadskaya', 'Pionerskaya', 'Sportivnaya', 'Udelnaya', 'Zvyozdnaya');

-- AlterTable
ALTER TABLE "trainings" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL DEFAULT '',
    "user_avatar" TEXT DEFAULT '',
    "user_role" "UserRole" NOT NULL,
    "user_mail" TEXT NOT NULL DEFAULT '',
    "backgraund_image" TEXT NOT NULL DEFAULT '',
    "user_sex" "UserSex" NOT NULL,
    "birth_day" TIMESTAMP(3),
    "description" TEXT DEFAULT '',
    "location" "MetroStation" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_level" TEXT NOT NULL DEFAULT '',
    "types_of_traning" "TrainingType"[],
    "password_hash" TEXT NOT NULL DEFAULT '',
    "is_ready" BOOLEAN NOT NULL DEFAULT false,
    "certificates" TEXT[],
    "achievements" TEXT DEFAULT '',
    "caloriesToLose" INTEGER NOT NULL DEFAULT 0,
    "caloriesPerDay" INTEGER NOT NULL DEFAULT 0,
    "timeForTraining" "TrainingDuration" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_mail_key" ON "users"("user_mail");
