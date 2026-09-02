import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { BuildingsModule } from './buildings/buildings.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './buildings/entities/building.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      entities: [Building],
      synchronize: true,
    }),

    HealthModule,
    BuildingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
