-- AlterTable
ALTER TABLE "password_reset_tokens" ADD COLUMN     "sheetsId" INTEGER;

-- CreateTable
CREATE TABLE "sheets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "sheets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
