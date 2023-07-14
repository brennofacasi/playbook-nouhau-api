import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Request } from 'express';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getGames(query: any, req: Request) {
    try {
      const favorite = query.favorite ? query.favorite === 'true' : undefined;
      const apiURL = req.protocol + '://' + req.get('Host');

      const data = await this.prisma.game.findMany({
        where: {
          favorite,
        },
        select: {
          id: true,
          title: true,
          time: true,
          maxPlayers: true,
          maxGroups: true,
          image: true,
          favorite: true,
          skills: {
            select: {
              skills: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      const result = data.map((item) => {
        const { skills: valuesSkills, image, ...rest } = item;
        const skills = valuesSkills.map((skill) => skill.skills.name);
        return {
          ...rest,
          image: apiURL + '/images/' + image,
          skills,
        };
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getGame(gameId: number, req: Request) {
    try {
      const id = Number(gameId);
      const apiURL = req.protocol + '://' + req.get('Host');
      const data = await this.prisma.game.findUnique({
        where: {
          id,
        },
        include: {
          skills: {
            select: {
              skills: {
                select: {
                  name: true,
                },
              },
            },
          },
          assets: {
            select: {
              assets: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      const {
        skills: valuesSkills,
        assets: valuesAssets,
        image,
        ...rest
      } = data;

      const skills = valuesSkills.map((skill) => skill.skills.name);
      const assets = valuesAssets.map((asset) => asset.assets.name);

      return {
        ...rest,
        image: apiURL + '/images/' + image,
        skills,
        assets,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async updateGame(gameId: number, body: any) {
    const id = Number(gameId);
    try {
      await this.prisma.game.update({
        where: {
          id,
        },
        data: body,
      });
      return {
        message: 'Game updated.',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
