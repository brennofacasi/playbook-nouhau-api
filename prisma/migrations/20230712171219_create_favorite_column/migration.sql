-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "maxPlayers" INTEGER NOT NULL,
    "maxGroups" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "image" TEXT,
    "steps" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Game" ("id", "image", "maxGroups", "maxPlayers", "steps", "time", "title") SELECT "id", "image", "maxGroups", "maxPlayers", "steps", "time", "title" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
