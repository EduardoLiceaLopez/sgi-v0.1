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
import { UsersAccessModule } from './users_access/users_access.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'liceedu12',
    database: 'sgi_v0_1',
    entities: [UserEntity],
    autoLoadEntities: true,
    synchronize: true
  }), UsersAccessModule],

  controllers: [AppController, UsersController, UsersAccessController],
  providers: [AppService, UsersService, UsersAccessService, UsersAccessService],
})

export class AppModule {}