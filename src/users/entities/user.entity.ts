import { BaseEntity } from "../../config/base.entity";
import { ROLES } from "../../constants/roles";
import { User } from "../../interfaces/user.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { UserProjectEntity } from "./userProject.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements User{
  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true})
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'enum', enum: ROLES})
  role: ROLES;

  @OneToMany(() => UserProjectEntity, (usersProjects) => usersProjects.user)
  projects: UserProjectEntity[]
}