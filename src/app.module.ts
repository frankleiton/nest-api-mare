import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MaresModule } from './mares/mares.module';

@Module({
  imports: [PrismaModule, MaresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
