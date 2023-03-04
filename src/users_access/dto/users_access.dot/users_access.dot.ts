import { IsIn, IsInt, IsString } from "class-validator";
import { UserEntity } from "src/users/entities/user.entity/user.entity";

export class UsersAccessDot {



    @IsString()
    user_name: string;

    @IsString()
    password: string;

    @IsString()
    user_role: string;

    @IsInt()
    user_id: UserEntity;
    

}
