-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "GiftCardRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipientName" TEXT NOT NULL,
    "giftType" TEXT NOT NULL,
    "deliveryMethod" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "message" TEXT NOT NULL,
    "gifterName" TEXT NOT NULL,
    "gifterEmail" TEXT NOT NULL,
    "note" TEXT NOT NULL DEFAULT 'Payment is via online banking and I''ll email you to discuss',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
