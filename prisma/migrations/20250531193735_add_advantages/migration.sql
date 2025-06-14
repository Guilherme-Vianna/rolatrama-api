-- CreateTable
CREATE TABLE "advantages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "advantages_pkey" PRIMARY KEY ("id")
);
