import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user/user.interface';

@Injectable()
export class UsersService {


    private users: User[] = [


    ]

getAll(){


    return this;
}

}

