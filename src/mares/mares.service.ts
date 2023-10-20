import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
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

  async listMaresToday(date: Date) {
    return await this.prisma.mares.findFirst({
      where: {
        date: dayjs(date).format('DD/MM/YYYY'),
      },
    });
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
