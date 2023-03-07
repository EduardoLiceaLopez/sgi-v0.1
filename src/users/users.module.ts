import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UsersAccess } from 'src/users_access/entities/users_access.entity';
import { UsersAccessController } from 'src/users_access/users_access.controller';
import { UsersAccessService } from 'src/users_access/users_access.service';
import { UsersType } from 'src/users_types/entities/users_type.entity';
import { UserEntity } from './entities/user.entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, UsersAccess, UsersType])],
    controllers: [UsersController, UsersAccessController],
    providers: [UsersService, UsersAccessService],
    exports: [TypeOrmModule]
})
export class UsersModule {}

