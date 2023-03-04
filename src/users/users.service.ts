import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user/user.interface';
import { UserEntity } from './entities/user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto/user.dto';

@Injectable()
export class UsersService {

    constructor(


      @InjectRepository(UserEntity)
      private usersRepository: Repository<UserEntity>
    ){};

    private users: User[] = [
    ]

    getAll(){
        return this.usersRepository.find();
      };

    getId(id: number): Promise<UserEntity> {
        return this.usersRepository.findOneBy({id: id});
    };

    
    async insert(body: UserDto) {
        const user = this.usersRepository.create(body);
        await this.usersRepository.save(user);
        return user;
      };
      
    /**
     *método update
     * 
     * @param id 
     * @param body 
     * @returns el almacenamiento de los
     *          cambios del usuario (user) 
     */
      async  update(id: number, body: any) {
        const userTem = {
          id,
          ...body,
        }
        const user = await this.usersRepository.preload(userTem);
        if (user){
          return this.usersRepository.save(user);
        }

        throw new NotFoundException(`No se encuentra la persona con el ${id}`);
      };

      /**
       * método delete 
       * Borra un registro o en este caso, a un usuario
       * según el id enviado
       * @param id 
       * @returns eliminación de registros de un usuario
       */
      
      async delete(id: number) {

        const user = await this.usersRepository.findOneBy({id: id});
        if (user){
          return this.usersRepository.remove(user);

        }
        throw new NotFoundException(`No se encuentra el usuario de ${id}`);
      };
      
  /**


    async saveUserAccess(id: number, body: UsersAccessDot){

        const user = await this.userRepository.findOneBy({id: id});
        console.log(user, id);
        
        if (user){
            const userAccess = this.usersAccessRepository.create(body);
            userAccess.user_id = user;
            await this.usersAccessRepository.save(userAccess);
            return userAccess;
    
        }

        throw new NotFoundException(`No encontramos a la persona con ID ${id}`)
    };
   */

      

  

}

