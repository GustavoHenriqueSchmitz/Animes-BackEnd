-- AlterTable
ALTER TABLE `evaluation` MODIFY `evaluation` DECIMAL(4, 2) NULL DEFAULT 0.00,
    MODIFY `quantity` INTEGER NULL DEFAULT 0,
    MODIFY `summed` DECIMAL(65, 2) NULL DEFAULT 0.00;
