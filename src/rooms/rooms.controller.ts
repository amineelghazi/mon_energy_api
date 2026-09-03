import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { RoomsService } from '../rooms/rooms.service.js';
import { CreateRoomDto } from '../rooms/dto/create-room.dto.js';
import { UpdateRoomDto } from '../rooms/dto/update-room.dto.js';

@Controller('rooms')
export class RoomsController {
     constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {

    return this.roomsService.remove(id);
  }
}
