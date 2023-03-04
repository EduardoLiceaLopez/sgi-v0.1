import { IsString } from "class-validator";

export class UsersAccessDot {

    @IsString()
    user_id: number;

    @IsString()
    user_name: string;

    @IsString()
    password: string;

    @IsString()
    user_role: string;

}
