import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersType } from 'src/users_types/entities/users_type.entity';
import { UserAccessEntity } from './entities/user_access.entity/user_access.entity';
import { UsersAccessController } from './users_access.controller';
import { UsersAccessService } from './users_access.service';

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([UserAccessEntity, UserEntity, UsersType])],
    controllers: [UsersAccessController],
    providers: [UsersAccessService],
    exports: [TypeOrmModule]
})

export class UsersAccessModule {}
