import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async getSkills() {
    try {
      const result = await this.prisma.skill.findMany({
        include: {
          games: {
            select: {
              games: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
