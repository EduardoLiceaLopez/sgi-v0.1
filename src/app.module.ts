import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity/user.entity';
import { UsersAccessController } from './users_access/users_access.controller';
import { UsersAccessService } from './users_access/users_access.service';
import { UsersTypesService } from './users_types/users_types.service';
import { UsersTypesModule } from './users_types/users_types.module';
import { UsersTypesController } from './users_types/users_types.controller';
import { UsersAccessModule } from './users_access/users_access.module';



@Module({
  imports: [UsersModule, UsersAccessModule, TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'liceedu12',
    database: 'sgi_v0_1',
    entities: [UserEntity],
    autoLoadEntities: true,
    synchronize: true
  }), UsersAccessModule, UsersTypesModule],

  controllers: [AppController, UsersController, UsersAccessController, UsersTypesController],
  providers: [AppService, UsersService, UsersAccessService, UsersAccessService, UsersTypesService],
})

export class AppModule {}