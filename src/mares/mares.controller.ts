import { Controller, Get, Param, Query } from '@nestjs/common';
import { MaresService } from './mares.service';

@Controller('mares')
export class MaresController {
  constructor(private maresService: MaresService) {}

  @Get('/')
  getMares(@Query('take') take: string) {
    return this.maresService.listMares(take);
  }

  @Get('/today')
  getMareByDate() {
    const date = new Date();
    return this.maresService.listMaresToday(date);
  }

  @Get('/maresByLocation/:id')
  getMaresByLocation(@Param('id') idLocation: string) {
    return this.maresService.listMaresByLocation(idLocation);
  }

  @Get('/locations')
  getLocations() {
    return this.maresService.listLocationsMares();
  }
}
