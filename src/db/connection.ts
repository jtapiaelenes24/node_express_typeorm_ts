import { DataSource } from "typeorm";
import { Student } from "../models/studentsModel";
import { Teacher } from "../models/teachersModel";
import { Course } from "../models/coursesModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "1234",
  database: "courses",
  logging: true,
  entities: [Student, Teacher, Course],
  synchronize: true,
});
