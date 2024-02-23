-- CreateTable
CREATE TABLE "Urls" (
    "id" SERIAL NOT NULL,
    "shortLink" TEXT NOT NULL,
    "fullLink" TEXT NOT NULL,
    "totalClicks" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);
