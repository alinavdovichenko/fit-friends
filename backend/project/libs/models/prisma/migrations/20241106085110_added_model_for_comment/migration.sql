/*
  Warnings:

  - You are about to drop the column `caloriesPerDay` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `caloriesToLose` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `timeForTraining` on the `users` table. All the data in the column will be lost.
  - Added the required column `time_trining` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "caloriesPerDay",
DROP COLUMN "caloriesToLose",
DROP COLUMN "timeForTraining",
ADD COLUMN     "calories_day" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "calories_lose" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "time_trining" "TrainingDuration" NOT NULL;

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "training_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "comments_training_id_idx" ON "comments"("training_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
