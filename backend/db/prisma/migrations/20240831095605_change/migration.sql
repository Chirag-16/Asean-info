/*
  Warnings:

  - Added the required column `avgage` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `queue` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "avgage" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "queue" TEXT NOT NULL;
