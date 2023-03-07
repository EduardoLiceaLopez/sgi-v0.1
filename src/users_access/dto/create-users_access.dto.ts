import { UserEntity } from "src/users/entities/user.entity/user.entity";

export class CreateUsersAccessDto {

    //Id generado automaticamente

    //Lave foranea
    readonly user_id: UserEntity;
    readonly user_name: string;
    readonly password: string;
    readonly user_role: string;
}

