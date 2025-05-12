/*
  Warnings:

  - You are about to drop the column `importance` on the `npcs` table. All the data in the column will be lost.
  - You are about to drop the column `interesse` on the `npcs` table. All the data in the column will be lost.
  - Added the required column `interest` to the `npcs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ocupation` to the `npcs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "npcs" DROP COLUMN "importance",
DROP COLUMN "interesse",
ADD COLUMN     "interest" TEXT NOT NULL,
ADD COLUMN     "ocupation" TEXT NOT NULL;
