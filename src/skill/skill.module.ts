import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [SkillService, PrismaService],
  controllers: [SkillController],
})
export class SkillModule {}
