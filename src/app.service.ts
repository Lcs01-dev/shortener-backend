import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma-client/prisma-client.service';
import { IGetIdUrl } from './app.dto';
import { Response } from 'express';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getFullUrl(param: IGetIdUrl, res: Response) {
    const url = await this.prisma.urls.findUnique({where: {
      shortLink: param.urlId
    }})

    if(!url) {
      return res.status(404).json("not found")
    }

    await this.prisma.urls.update({
      where: {
        shortLink: param.urlId
      },
      data: {totalClicks: {increment: 1}}
    })
  
    return res.redirect(url.fullLink);
  }
}
