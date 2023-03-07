import { UserEntity } from "src/users/entities/user.entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersAccess {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => UserEntity,
        (user: UserEntity) => user.userAcces,
    )

    user_id: UserEntity;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    user_role: string;

}
