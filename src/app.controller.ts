import { Body, Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { IGetIdUrl } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':urlId')
  getFullUrl(@Param() param: IGetIdUrl) {
    return this.appService.getFullUrl(param);
  }
}
