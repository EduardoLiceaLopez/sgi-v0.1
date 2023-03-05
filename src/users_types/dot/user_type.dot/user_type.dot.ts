import { IsString } from "class-validator";


export class UserTypeDot {
    @IsString()
    name: string;
}
