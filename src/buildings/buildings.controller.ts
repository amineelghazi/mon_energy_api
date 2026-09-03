import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service.js';
import { Building } from './entities/building.entity.js';
import { CreateBuildingDto } from './dto/create-building.dto.js';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingService: BuildingsService) {}

  @Get()
  async getBuildings(): Promise<Building[]> {
    return await this.buildingService.findAllBuildings();
  }

  @Get('/:id')
  async getBuildingById(@Param('id') id: number) {
    return await this.buildingService.findOneBuildingByID(id);
  }

  @Post()
  async createBuilding(@Body() body: CreateBuildingDto) {
    return this.buildingService.createBuilding(body);
  }
}
