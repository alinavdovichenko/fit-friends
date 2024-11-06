-- CreateEnum
CREATE TYPE "UserLevel" AS ENUM ('Beginner', 'Amateur', 'Pro');

-- CreateEnum
CREATE TYPE "TrainingType" AS ENUM ('Yoga', 'Running', 'Box', 'Stretching', 'Crossfit', 'Aerobic', 'Pilates', 'Strength');

-- CreateEnum
CREATE TYPE "TrainingDuration" AS ENUM ('Short', 'Medium', 'Long', 'Extra');

-- CreateEnum
CREATE TYPE "TrainingSexFor" AS ENUM ('Male', 'Female', 'All');

-- CreateTable
CREATE TABLE "trainings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "backgraund_image" TEXT NOT NULL DEFAULT '',
    "level" "UserLevel" NOT NULL,
    "type" "TrainingType" NOT NULL,
    "duration" "TrainingDuration" NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "calories" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userSex" "TrainingSexFor" NOT NULL,
    "video" TEXT NOT NULL DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coach_id" TEXT NOT NULL,
    "is_special" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);
