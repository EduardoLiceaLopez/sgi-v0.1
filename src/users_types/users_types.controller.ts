import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserTypeDot } from './dot/user_type.dot/user_type.dot';
import { UsersTypesService } from './users_types.service';

@Controller('users-types')
export class UsersTypesController {

    constructor(private readonly user_typeService: UsersTypesService){}

    @Post(':id/userType')
    async createUserType(

        @Param('id', ParseIntPipe) id: number,
        @Body() body: UserTypeDot, 
    ){
        return this //.user_typeService(id, body);
    };
}
