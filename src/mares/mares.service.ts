import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MaresService {
  constructor(private prisma: PrismaService) {}

  async listMares(take: string) {
    const mares = await this.prisma.mares.findMany({
      include: { location: true },
      take: Number(take) || 8,
    });

    return { mares };
  }

  async listMaresToday() {
    const dateStart = dayjs().startOf('day');
    const dateEnd = dayjs().endOf('day');
    const mare = await this.prisma.mares.findFirst({
      where: {
        date: {
          gte: dateStart.toISOString(),
          lte: dateEnd.toISOString(),
        },
      },
    });

    return { mare };
  }

  async listLocationsMares() {
    const locations = await this.prisma.location.findMany();
    return { locations };
  }

  async listMaresByLocation(idLocation: string) {
    const mares = await this.prisma.mares.findMany({
      where: {
        locationId: idLocation,
        date: {
          gte: dayjs(new Date().getTime() - 84600000).toISOString(),
        },
      },
      take: 8,
    });

    return { mares };
  }
}
