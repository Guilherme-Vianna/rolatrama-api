-- DropForeignKey
ALTER TABLE "npcs" DROP CONSTRAINT "npcs_townId_fkey";

-- AlterTable
ALTER TABLE "npcs" ALTER COLUMN "townId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "npcs" ADD CONSTRAINT "npcs_townId_fkey" FOREIGN KEY ("townId") REFERENCES "towns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
