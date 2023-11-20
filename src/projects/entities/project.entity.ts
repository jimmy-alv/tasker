import { BaseEntity } from "../../config/base.entity";
import { Project } from "../../interfaces/project.interface";
import { UserEntity } from "../../users/entities/user.entity";
import { UserProjectEntity } from "../../users/entities/userProject.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity implements Project {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany( () => UserProjectEntity, (usersProjects) => usersProjects.project)
  users: UserProjectEntity[]
}
