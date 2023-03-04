import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users-access')
export class UsersAccessController {

    constructor(private readonly usersAccessService: UsersService){};

    @Get('ver')
    getAllProducts() {
      return this.usersAccessService.getAll();
    }
  
    @Get(':id')
    async find(@Param('id', ParseIntPipe) id: number) {
      return this.usersAccessService.getId(id);
    }
  /*
    @Post()
    createProduct( @Body() productDto: ProductDto ) {
      this.usersAccessService.insert(productDto);
    }
  */
 
    @Put(':id')
    async update(
      @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
      @Body() body,
    ) {
      return this.usersAccessService.update(id, body);
    };
    
    
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
      this.usersAccessService.delete(id);
    }
}
