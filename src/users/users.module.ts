import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserAccessEntity } from 'src/users_access/entities/user_access.entity/user_access.entity';
import { UsersAccessController } from 'src/users_access/users_access.controller';
import { UsersAccessService } from 'src/users_access/users_access.service';
import { TypeORMError } from 'typeorm';
import { UserEntity } from './entities/user.entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, UserAccessEntity])],
    controllers: [UsersController, UsersAccessController],
    providers: [UsersService, UsersAccessService],
    exports: [TypeOrmModule]
})
export class UsersModule {}

