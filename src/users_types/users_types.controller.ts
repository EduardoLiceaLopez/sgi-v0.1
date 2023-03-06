import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersTypesService } from './users_types.service';
import { CreateUsersTypeDto } from './dto/create-users_type.dto';
import { UpdateUsersTypeDto } from './dto/update-users_type.dto';

@Controller('users-types')
export class UsersTypesController {
  constructor(private readonly usersTypesService: UsersTypesService) {}

  @Post('crear')
  create(@Body() createUsersTypeDto: CreateUsersTypeDto) {
    return this.usersTypesService.create(createUsersTypeDto);
  }

  @Get('mostrar')
  findAll() {
    return this.usersTypesService.findAll();
  }

  @Get('encontrar/:id')
  findOne(@Param('id') id: string) {
    return this.usersTypesService.findOne(+id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateUsersTypeDto: UpdateUsersTypeDto) {
    return this.usersTypesService.update(+id, updateUsersTypeDto);
  }

  @Delete('borrar/:id')
  remove(@Param('id') id: string) {
    return this.usersTypesService.remove(+id);
  }
}
