-- CreateTable
CREATE TABLE `evaluation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(60) NOT NULL,
    `evaluation` DECIMAL(3, 2) NULL DEFAULT 0.00,

    UNIQUE INDEX `nome`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
