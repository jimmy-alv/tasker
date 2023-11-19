import { Module } from '@nestjs/common';


import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot(config),

    UsersModule
  ],
})
export class AppModule {}
