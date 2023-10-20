import { Module } from '@nestjs/common';
import { MaresService } from './mares.service';
import { MaresController } from './mares.controller';

@Module({
  providers: [MaresService],
  controllers: [MaresController]
})
export class MaresModule {}
