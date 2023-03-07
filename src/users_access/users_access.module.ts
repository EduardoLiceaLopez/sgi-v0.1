import { Module } from '@nestjs/common';
import { UsersAccessService } from './users_access.service';
import { UsersAccessController } from './users_access.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAccess } from './entities/users_access.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersAccess])],
  controllers: [UsersAccessController],
  providers: [UsersAccessService]
})
export class UsersAccessModule {}


