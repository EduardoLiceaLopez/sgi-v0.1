import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UsersAccessDot } from './dto/users_access.dot/users_access.dot';
import { UsersAccessService } from './users_access.service';

@Controller('users-access')
export class UsersAccessController {

    constructor(private readonly usersAccessService: UsersAccessService){};

    @Post('userAcces/:id')
    async createUserAcces(

        @Param('id', ParseIntPipe) id: number,
        @Body() body: UsersAccessDot,
        ) {
        return this.usersAccessService.saveUserAccess(id, body);
    };

   
}
