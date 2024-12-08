/*
  Warnings:

  - Added the required column `quantity` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "imageURL" SET DEFAULT '/temp.png',
ALTER COLUMN "createdAt" SET DEFAULT now();
