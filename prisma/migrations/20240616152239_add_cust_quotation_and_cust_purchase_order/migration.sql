-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `officePhone` VARCHAR(191) NOT NULL,
    `contactPerson` VARCHAR(191) NOT NULL,
    `mobilePhone` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `latestOrderDate` DATETIME(3) NULL,
    `latestOrderID` INTEGER NULL,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedBy` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `customers_uid_key`(`uid`),
    UNIQUE INDEX `customers_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cust_purchase_orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `custPoNumber` VARCHAR(191) NOT NULL,
    `customerId` INTEGER NOT NULL,
    `totalAmount` INTEGER NOT NULL,
    `totalItem` INTEGER NOT NULL,
    `discountPercent` INTEGER NOT NULL DEFAULT 0,
    `discount` INTEGER NOT NULL DEFAULT 0,
    `nettAmount` INTEGER NOT NULL DEFAULT 0,
    `dealAmount` INTEGER NOT NULL DEFAULT 0,
    `top` INTEGER NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `deliveryDate` DATETIME(3) NULL,
    `invoiceDate` DATETIME(3) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `remarks` VARCHAR(191) NULL,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedBy` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `cust_purchase_orders_uid_key`(`uid`),
    UNIQUE INDEX `cust_purchase_orders_custPoNumber_key`(`custPoNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cust_purchase_order_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `custPurchaseOrderId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` DECIMAL(10, 2) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedBy` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `cust_purchase_order_details_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cust_quotations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `poNumber` VARCHAR(191) NOT NULL,
    `customerId` INTEGER NOT NULL,
    `totalAmount` INTEGER NOT NULL,
    `totalItem` INTEGER NOT NULL,
    `top` INTEGER NOT NULL,
    `orderDate` DATETIME(3) NULL,
    `deliveryDate` DATETIME(3) NULL,
    `invoiceDate` DATETIME(3) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `remarks` VARCHAR(191) NULL,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedBy` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `cust_quotations_uid_key`(`uid`),
    UNIQUE INDEX `cust_quotations_poNumber_key`(`poNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cust_quotation_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `quotationOrderId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` DECIMAL(10, 2) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedBy` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `cust_quotation_details_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_deletedBy_fkey` FOREIGN KEY (`deletedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_orders` ADD CONSTRAINT `cust_purchase_orders_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_orders` ADD CONSTRAINT `cust_purchase_orders_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_orders` ADD CONSTRAINT `cust_purchase_orders_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_orders` ADD CONSTRAINT `cust_purchase_orders_deletedBy_fkey` FOREIGN KEY (`deletedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_order_details` ADD CONSTRAINT `cust_purchase_order_details_custPurchaseOrderId_fkey` FOREIGN KEY (`custPurchaseOrderId`) REFERENCES `cust_purchase_orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_order_details` ADD CONSTRAINT `cust_purchase_order_details_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_order_details` ADD CONSTRAINT `cust_purchase_order_details_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_order_details` ADD CONSTRAINT `cust_purchase_order_details_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_purchase_order_details` ADD CONSTRAINT `cust_purchase_order_details_deletedBy_fkey` FOREIGN KEY (`deletedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotations` ADD CONSTRAINT `cust_quotations_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotations` ADD CONSTRAINT `cust_quotations_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotations` ADD CONSTRAINT `cust_quotations_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotations` ADD CONSTRAINT `cust_quotations_deletedBy_fkey` FOREIGN KEY (`deletedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotation_details` ADD CONSTRAINT `cust_quotation_details_quotationOrderId_fkey` FOREIGN KEY (`quotationOrderId`) REFERENCES `cust_quotations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotation_details` ADD CONSTRAINT `cust_quotation_details_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotation_details` ADD CONSTRAINT `cust_quotation_details_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotation_details` ADD CONSTRAINT `cust_quotation_details_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cust_quotation_details` ADD CONSTRAINT `cust_quotation_details_deletedBy_fkey` FOREIGN KEY (`deletedBy`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
