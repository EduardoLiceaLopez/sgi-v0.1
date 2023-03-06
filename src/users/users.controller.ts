import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

   constructor(private readonly userService: UsersService){}
  
   /**
    * Muestra a todos los usuarios registrados
    * @returns 
    */


   @Get('mostrar')
   findAll() {
     return this.userService.findAll();
   }

   /**
    * Muestra a un usuario en particular (según su id enviado)
    * @param id 
    * @returns 
    */

   @Get('buscar/:id')
   async find(@Param('id', ParseIntPipe) id: number) {
     return this.userService.getId(id);
   };

   /**
    * Añade/registra un nuevo usuario
    * @param productDto 
    */

   @Post('aniadir')
   createProduct( @Body() productDto: UserDto ) {
     this.userService.insert(productDto);
   };

   /**
    * Actualiza un usuario según su id
    * 
    * @param id 
    * @param body 
    * @returns 
    */
   @Put('actualizar/:id')
   async update(
     @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
     @Body() body,
   ) {
     return this.userService.update(id, body);
     
   };

   /**
    * Borra o elimina a un usuario según el id indicado
    * @param id 
    */
   @Delete('borrar/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id') id: number) {
     this.userService.delete(id);
   }



}
