import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from '../dto/create-room.dto.js'

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}