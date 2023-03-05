import { UserEntity } from "src/users/entities/user.entity/user.entity";
import { Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class UserTypeEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(()=> UserEntity, userE => userE.user_type_id)
    userE: UserEntity[];
}
