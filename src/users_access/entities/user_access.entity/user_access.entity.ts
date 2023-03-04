import { UserEntity } from "src/users/entities/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_access')
export class UserAccessEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name:string;

    @Column()
    password:string;

    @Column()
    user_role:string;

    @ManyToOne(() => UserEntity, user_id => user_id.id)
    user_id: UserEntity;
}
