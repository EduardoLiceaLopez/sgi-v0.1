import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/interfaces/user/user.interface';
import { Repository } from 'typeorm';
import { CreateUsersTypeDto } from './dto/create-users_type.dto';
import { UpdateUsersTypeDto } from './dto/update-users_type.dto';
import { UsersType } from './entities/users_type.entity';




@Injectable()
export class UsersTypesService {


  constructor(
    @InjectRepository(UsersType)
    private userTypeRepository: Repository<UsersType>
  ){};


  create(createUsersTypeDto: CreateUsersTypeDto): Promise<UsersType> {
    return this.userTypeRepository.save(createUsersTypeDto);
  }

  async findAll(): Promise<UsersType[]>{
    return this.userTypeRepository.find();
  };

  async findOne(id: number): Promise<UsersType> {
    return this.userTypeRepository.findOne({
      where: {id},
    });
  }

  async update(id: number, updateUsersTypeDto: UpdateUsersTypeDto) {
    return this.userTypeRepository.update(id, updateUsersTypeDto);
  };

  async remove(id: number) {
    return this.userTypeRepository.delete({id});
  };

}
