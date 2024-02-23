/*
  Warnings:

  - A unique constraint covering the columns `[shortLink]` on the table `Urls` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fullLink]` on the table `Urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Urls_shortLink_key" ON "Urls"("shortLink");

-- CreateIndex
CREATE UNIQUE INDEX "Urls_fullLink_key" ON "Urls"("fullLink");
