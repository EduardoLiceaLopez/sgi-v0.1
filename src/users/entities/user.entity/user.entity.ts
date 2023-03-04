import { UserAccessEntity } from "src/users_access/entities/user_access.entity/user_access.entity";
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

    @OneToMany(()=> UserAccessEntity, userAcces => userAcces.user_id)
    userAcces: UserAccessEntity[];


}
