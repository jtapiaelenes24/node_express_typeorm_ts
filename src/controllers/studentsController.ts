import { Request, Response } from "express";
import { Student } from "../models/studentsModel";

class StudentsController {
  constructor() {}

  async get(req: Request, res: Response) {
    try {
      const data = await Student.find();
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Student not found");
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
      const register = await Student.save(req.body);
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Student not found");
      }
      await Student.update({ id: Number(id) }, req.body);
      const registerUpdated = await Student.findOneBy({ id: Number(id) });
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Student not found");
      }
      await Student.delete({ id: Number(id) });
      res.status(204);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new StudentsController();
