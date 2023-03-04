import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { UserAccessEntity } from './entities/user_access.entity/user_access.entity';
import { UsersAccessController } from './users_access.controller';
import { UsersAccessService } from './users_access.service';

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([UserAccessEntity])],
    controllers: [UsersAccessController],
    providers: [UsersAccessService],
    exports: [TypeOrmModule]
})

export class UsersAccessModule {}
