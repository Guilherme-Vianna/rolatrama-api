/*
  Warnings:

  - Added the required column `user_id` to the `sheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sheets" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
