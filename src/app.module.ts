import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClientModule } from './prisma-client/prisma-client.module';
import { ConfigModule } from '@nestjs/config';
import { LinkHandlerModule } from './modules/link-handler/link-handler.module';

@Module({
  imports: [PrismaClientModule, LinkHandlerModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
