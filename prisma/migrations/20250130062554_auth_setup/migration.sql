-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "content" TEXT,
ALTER COLUMN "message" DROP NOT NULL;
