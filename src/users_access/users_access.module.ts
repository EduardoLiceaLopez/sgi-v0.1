import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { UsersAccessController } from './users_access.controller';
import { UsersAccessService } from './users_access.service';

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [UsersAccessController],
    providers: [UsersAccessService],
    exports: [TypeOrmModule]
})

export class UsersAccessModule {}
