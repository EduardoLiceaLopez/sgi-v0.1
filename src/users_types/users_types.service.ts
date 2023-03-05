import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity/user.entity';
import { Repository } from 'typeorm';
import { UserTypeDot } from './dot/user_type.dot/user_type.dot';
import { UserTypeEntity } from './entities/user_type.entity/user_type.entity';

@Injectable()
export class UsersTypesService {
    constructor(

        @InjectRepository(UserEntity)
        private usersRepository : Repository<UserEntity>,
    
        @InjectRepository(UserTypeEntity)
        private userTypeRepository : Repository<UserTypeEntity>
    
        ){};



}
