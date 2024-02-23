import { Body, Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { IGetIdUrl } from './app.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':urlId')
  getFullUrl(@Param() param: IGetIdUrl, @Res() res: Response) {
    return this.appService.getFullUrl(param, res);
  }
}
