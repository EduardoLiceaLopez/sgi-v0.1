import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
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


}
