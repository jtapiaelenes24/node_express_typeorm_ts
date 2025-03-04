import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  BaseEntity,
} from "typeorm";

import { Teacher } from "./teachersModel";
import { Student } from "./studentsModel";

@Entity("courses")
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column("text")
  description: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;

  @ManyToMany(() => Student)
  @JoinTable({
    name: "courses_students",
    joinColumn: { name: "course_id" },
    inverseJoinColumn: { name: "student_id" },
  })
  students: Student[];
}
