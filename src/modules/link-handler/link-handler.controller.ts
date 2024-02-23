import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { shortenLinkDto } from './dto/short-link.dto';
import { LinkHandlerService } from './link-handler.service';

@Controller('link-handler')
export class LinkHandlerController {
  constructor(private linkHandler: LinkHandlerService) {}
  @Post()
  async shortLinkController(@Body() data: shortenLinkDto) {
    const result = await this.linkHandler.shortenLink(data, 5);
    return result;
  }

  @Patch('/edit/:id')
  async patchShortLink(
    @Param('id') id: string,
    @Body('newShortLink') newShortLink: string,
  ) {
    return await this.linkHandler.patchShortLink(id, newShortLink);
  }
}
