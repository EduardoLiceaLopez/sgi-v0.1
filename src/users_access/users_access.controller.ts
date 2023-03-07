import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersAccessService } from './users_access.service';
import { CreateUsersAccessDto } from './dto/create-users_access.dto';
import { UpdateUsersAccessDto } from './dto/update-users_access.dto';

@Controller('users-access')
export class UsersAccessController {
  constructor(private readonly usersAccessService: UsersAccessService) {}

  @Post()
  create(@Body() createUsersAccessDto: CreateUsersAccessDto) {
    return this.usersAccessService.create(createUsersAccessDto);
  }

  @Get()
  findAll() {
    return this.usersAccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersAccessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersAccessDto: UpdateUsersAccessDto) {
    return this.usersAccessService.update(+id, updateUsersAccessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersAccessService.remove(+id);
  }
}
