-- CreateTable
CREATE TABLE "npcs" (
    "id" SERIAL NOT NULL,
    "townId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "importance" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "interesse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "npcs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "npcs" ADD CONSTRAINT "npcs_townId_fkey" FOREIGN KEY ("townId") REFERENCES "towns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
