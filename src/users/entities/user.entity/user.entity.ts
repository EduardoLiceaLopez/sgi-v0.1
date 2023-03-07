import { UsersAccess } from "src/users_access/entities/users_access.entity";
import { UsersType } from "src/users_types/entities/users_type.entity";

import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    curp: string;

    @Column()
    rfc: string;

    @Column('int', { width: 10 })
    phone_number: number;

    @Column()
    email: string;

    @ManyToOne(
    () => UsersType,
    (usersType: UsersType) => usersType.user,
    )   
    user_type_id : UsersType;
    
    @OneToMany(
        () => UsersAccess,
        (userAccess: UsersAccess) => userAccess.user_id,
    )
    userAcces: UsersAccess[];

}
