import { Module } from '@nestjs/common';


import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    UsersModule,
    ProjectsModule
  ],
})
export class AppModule {}
