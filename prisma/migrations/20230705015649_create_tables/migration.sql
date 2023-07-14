-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "maxPlayers" INTEGER NOT NULL,
    "maxGroups" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "image" TEXT,
    "steps" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GameSkill" (
    "gameId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    CONSTRAINT "GameSkill_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GameSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GameAsset" (
    "gameId" INTEGER NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "GameAsset_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GameAsset_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "GameSkill_gameId_skillId_key" ON "GameSkill"("gameId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "GameAsset_gameId_assetId_key" ON "GameAsset"("gameId", "assetId");
