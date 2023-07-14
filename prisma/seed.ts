import { PrismaClient } from '@prisma/client';
import { games } from './seeds/games';
import { assets } from './seeds/assets';
import { skills } from './seeds/skills';
import { gameAssets } from './seeds/game-assets';
import { gameSkills } from './seeds/game-skills';

const prisma = new PrismaClient();

async function main() {
  // Create Games
  for (let game of games) {
    await prisma.game.create({
      data: game,
    });
  }

  // Create Assets
  for (let asset of assets) {
    await prisma.asset.create({
      data: asset,
    });
  }

  // Create Skills
  for (let skill of skills) {
    await prisma.skill.create({
      data: skill,
    });
  }

  // Create gameAssets
  for (let gameAsset of gameAssets) {
    await prisma.gameAsset.create({
      data: gameAsset,
    });
  }

  // Create gameSkills
  for (let gameSkill of gameSkills) {
    await prisma.gameSkill.create({
      data: gameSkill,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
