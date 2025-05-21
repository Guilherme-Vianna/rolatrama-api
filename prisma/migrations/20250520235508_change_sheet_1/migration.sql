/*
  Warnings:

  - You are about to drop the column `userId` on the `sheets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sheets" DROP CONSTRAINT "sheets_userId_fkey";

-- AlterTable
ALTER TABLE "sheets" DROP COLUMN "userId";
