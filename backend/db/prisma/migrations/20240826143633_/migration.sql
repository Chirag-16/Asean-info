/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "carrier" TEXT NOT NULL,
    "active" INTEGER NOT NULL,
    "lastRun" TEXT NOT NULL,
    "success" TEXT NOT NULL,
    "rnf" TEXT NOT NULL,
    "fail" TEXT NOT NULL,
    "crawlFrequny" TEXT NOT NULL,
    "durationTolaunch" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource_carrier_key" ON "Resource"("carrier");
