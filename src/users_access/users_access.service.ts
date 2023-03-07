import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersAccessDto } from './dto/create-users_access.dto';
import { UpdateUsersAccessDto } from './dto/update-users_access.dto';
import { UsersAccess } from './entities/users_access.entity';

@Injectable()
export class UsersAccessService {

  //inyección del repositorio

  constructor(
    @InjectRepository(UsersAccess)
    private userAccesRepository: Repository <UsersAccess>,
  ){};


  create(createUsersAccessDto: CreateUsersAccessDto) {
    return this.userAccesRepository.save(createUsersAccessDto);
  }

  async findAll(): Promise<UsersAccess[]> {
    return this.userAccesRepository.find();
  }

  async findOne(id: number): Promise <UsersAccess> {
    return this.userAccesRepository.findOne({
      where: {id},
    });
  };
  
  async update(id: number, updateUsersAccessDto: UpdateUsersAccessDto) {
    return this.userAccesRepository.update(id, updateUsersAccessDto);
  };

  async remove(id: number) {
    return this.userAccesRepository.delete({id});
  }
};
