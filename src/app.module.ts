import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity/user.entity';

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
  })],

  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
