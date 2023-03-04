import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersAccessDot } from './dto/users_access.dot/users_access.dot';
import { UserAccessEntity } from './entities/user_access.entity/user_access.entity';

@Injectable()
export class UsersAccessService {

    constructor(
        @InjectRepository(UserAccessEntity)

        private usersAccessRepository: Repository<UserAccessEntity>,
    ){};
    
    getAll(){
        return this.usersAccessRepository.find();
      };

      getId(id: number): Promise<UserAccessEntity> {
        return this.usersAccessRepository.findOneBy({id: id});
    };

    
    async insert(body: UsersAccessDot) {
        const userAccess = this.usersAccessRepository.create(body);
        await this.usersAccessRepository.save(userAccess);
        return userAccess;
      };
    
    

      async  update(id: number, body: any) {
        const userAccesTem = {

          id,
          ...body,
        }
        const userAccess = await this.usersAccessRepository.preload(userAccesTem);
        if (userAccess){
          return this.usersAccessRepository.save(userAccess);
        }

        throw new NotFoundException(`No se encuentra el usuario de acceso con el id ${id}`);
      };

      //
      async delete(id: number) {

        const userAccess = await this.usersAccessRepository.findOneBy({id: id});
        if (userAccess){
          return this.usersAccessRepository.remove(userAccess);

        }
        throw new NotFoundException(`No se encuentra el usuario de acceso con el id ${id}`);
      };
}
