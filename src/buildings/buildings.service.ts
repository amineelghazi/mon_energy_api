import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building } from './entities/building.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBuildingDto } from './dto/create-building.dot.js';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  async findAllBuildings(): Promise<Building[]> {
    return await this.buildingRepository.find();
  }

  async findOneBuildingByID(id: number): Promise<Building> {
    const result = await this.buildingRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async createBuilding(dto: CreateBuildingDto): Promise<Building> {
    const newBuilding = this.buildingRepository.create({
      name: dto.name,
      address: dto.address,
      yearBuilt: dto.yearBuilt,
    });
    return await this.buildingRepository.save(newBuilding);
  }
}
