/*
  Warnings:

  - The primary key for the `Urls` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Urls_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Urls_id_seq";
