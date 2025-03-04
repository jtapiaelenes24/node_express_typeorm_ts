import { Request, Response } from "express";
import { Course } from "../models/coursesModel";
import { Teacher } from "../models/teachersModel";
import { Student } from "../models/studentsModel";

class CoursesController {
  constructor() {}

  async get(req: Request, res: Response) {
    try {
      const data = await Course.find({
        relations: { teacher: true, students: true },
      });
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async getDetails(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Course does not found");
      }
      res.status(200).json(register);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async insert(req: Request, res: Response) {
    try {
      const { teacher } = req.body;

      const teacherRegister = await Teacher.findOneBy({
        id: Number(teacher),
      });
      if (!teacherRegister) {
        throw new Error("Teacher does not found");
      }
      const register = await Course.save(req.body);
      res.status(201).json(register);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { teacher } = req.body;
      const teacherRegister = await Teacher.findOneBy({ id: Number(teacher) });
      if (!teacherRegister) {
        throw new Error("Teacher does not found");
      }

      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Course does not found");
      }
      await Course.update({ id: Number(id) }, req.body);
      const registerUpdated = await Course.findOne({
        where: { id: Number(id) },
        relations: { teacher: true, students: true },
      });
      res.status(200).json(registerUpdated);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Course does not found");
      }
      await Course.delete({ id: Number(id) });
      res.status(204);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async registerStudent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { student_id, course_id } = req.body;
      const student = await Student.findOneBy({ id: Number(student_id) });
      const course = await Course.findOneBy({ id: Number(course_id) });

      if (!student) {
        throw new Error("Student does not found");
      }
      if (!course) {
        throw new Error("Course does not found");
      }

      course.students = course.students || [];
      course.students.push(student);

      const registro = await Course.save(Course);
      res.status(200).json(registro);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new CoursesController();
