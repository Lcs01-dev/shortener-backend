import { PrismaService } from '../../prisma-client/prisma-client.service';
import { ConflictException, Injectable } from '@nestjs/common';
import * as nanoid from 'nanoid';
import { shortenLinkDto } from './dto/short-link.dto';
@Injectable()
export class LinkHandlerService {
  private tries = 0;
  constructor(private prisma: PrismaService) {}

  async shortenLink(data: shortenLinkDto, linkSize: number = 5) {
    const random = (await eval(`import('nanoid')`)) as typeof nanoid;
    const randomId = random.nanoid(linkSize);
    const fullUrlExists = await this.prisma.urls.findFirst({
      where: {
        fullLink: { contains: data.fullLink },
      },
    });

    if (fullUrlExists) {
      return fullUrlExists;
    }

    //Avoid Id Collapse
    const idExists = await this.prisma.urls.findFirst({
      where: {
        shortLink: { contains: randomId },
      },
    });

    if (idExists) {
      return idExists;
    }

    if (!idExists) {
      this.tries = 0;
      const url = await this.prisma.urls.create({
        data: {
          fullLink: data.fullLink,
          shortLink: randomId,
        },
      });
      return url;
    }

    if (this.tries !== 5) {
      this.tries = this.tries + 1;
      this.shortenLink(data, linkSize);
      return;
    }
    this.tries = 0;
    this.shortenLink(data, linkSize + 1);
  }

  async patchShortLink(id: string, newShortLink: string) {
    const shortLinkExists = await this.prisma.urls.findUnique({
      where: {
        shortLink: newShortLink
      }
    })

    if(shortLinkExists) {
      throw new ConflictException("This Link has already been taken!")
    }

    const updated = await this.prisma.urls.update({
      where: {
        id: id,
      },
      data: {
        shortLink: newShortLink,
      }
    });

    return updated
  }
}