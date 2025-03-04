import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

import { Course } from "./coursesModel";

@Entity("teachers")
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dni: String;

  @Column()
  name: String;

  @Column()
  lastname: String;

  @Column()
  email: String;

  @Column()
  profession: String;

  @Column()
  phone_number: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];
}
