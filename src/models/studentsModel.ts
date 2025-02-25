import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("students")
export class Student {
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
