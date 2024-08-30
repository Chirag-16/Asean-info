-- CreateTable
CREATE TABLE "Data" (
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

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Data_carrier_key" ON "Data"("carrier");
