import { Module } from '@nestjs/common';
import { LinkHandlerService } from './link-handler.service';
import { LinkHandlerController } from './link-handler.controller';

@Module({
  providers: [LinkHandlerService],
  controllers: [LinkHandlerController]
})
export class LinkHandlerModule {}
