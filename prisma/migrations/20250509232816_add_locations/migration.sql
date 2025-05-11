-- AlterTable
ALTER TABLE "towns" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'NO_NAME';

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "townId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_townId_fkey" FOREIGN KEY ("townId") REFERENCES "towns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
