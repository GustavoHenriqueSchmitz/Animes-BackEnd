/*
  Warnings:

  - Made the column `evaluation` on table `evaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `evaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `summed` on table `evaluation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `evaluation` MODIFY `evaluation` DECIMAL(4, 2) NOT NULL DEFAULT 0.00,
    MODIFY `quantity` INTEGER NOT NULL DEFAULT 0,
    MODIFY `summed` DECIMAL(65, 2) NOT NULL DEFAULT 0.00;
