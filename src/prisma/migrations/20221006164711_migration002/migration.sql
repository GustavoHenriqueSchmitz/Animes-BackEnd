/*
  Warnings:

  - You are about to drop the column `nome` on the `evaluation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[anime]` on the table `evaluation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summed` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Made the column `evaluation` on table `evaluation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `nome` ON `evaluation`;

-- AlterTable
ALTER TABLE `evaluation` DROP COLUMN `nome`,
    ADD COLUMN `anime` VARCHAR(60) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `summed` DECIMAL(65, 2) NOT NULL,
    MODIFY `evaluation` DECIMAL(4, 2) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `anime` ON `evaluation`(`anime`);
