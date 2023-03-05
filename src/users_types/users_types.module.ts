import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity/user.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { UserAccessEntity } from 'src/users_access/entities/user_access.entity/user_access.entity';
import { UsersAccessController } from 'src/users_access/users_access.controller';
import { UsersAccessService } from 'src/users_access/users_access.service';
import { UserTypeEntity } from './entities/user_type.entity/user_type.entity';

@Module({    
    imports: [TypeOrmModule.forFeature([UserEntity, UserAccessEntity, UserTypeEntity])],
    controllers: [UsersController, UsersAccessController],
    providers: [UsersService, UsersAccessService],
    exports: [TypeOrmModule]})
    
export class UsersTypesModule {}
