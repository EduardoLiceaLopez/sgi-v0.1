import { IsInt, IsString } from "class-validator";

export class UserDto {

    @IsString()
    name: string;

    @IsString()
    middle_name: string;

    @IsString()
    last_name: string;

    @IsString()
    curp: string;

    @IsString()
    rfc: string;

    @IsInt({ message: 'El teléfono celular debe de ser un número entero' })
    phone_number: number;

    @IsString()
    email: string;
}
