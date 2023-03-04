import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_access')
export class UserAccessEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id:number;

    @Column()
    user_name:string;

    @Column()
    password:string;

    @Column()
    user_role:string;

}
