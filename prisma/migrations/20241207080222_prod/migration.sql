-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "imageURL" SET DEFAULT '/temp.png',
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "slug" SET DEFAULT '/';
