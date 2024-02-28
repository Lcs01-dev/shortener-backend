import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma-client/prisma-client.service';
import { IGetIdUrl } from './app.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getFullUrl(param: IGetIdUrl) {

    const url = await this.prisma.urls.findUnique({
      where: {
        shortLink: param.urlId,
      },
    });

    if (!url) {
      throw new NotFoundException()
    }

    await this.prisma.urls.update({
      where: {
        shortLink: param.urlId,
      },
      data: { totalClicks: { increment: 1 } },
    });

    return { fullUrl: url.fullLink };
  }
}
