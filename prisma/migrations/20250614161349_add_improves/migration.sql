-- CreateTable
CREATE TABLE "improves" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "improves_pkey" PRIMARY KEY ("id")
);
