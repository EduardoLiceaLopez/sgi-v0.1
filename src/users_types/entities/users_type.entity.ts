import { UserEntity } from "src/users/entities/user.entity/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        () => UserEntity,
        (user: UserEntity) => user.user_type_id,
    )
    user: UserEntity[];
}
