import { Request, Response } from "express";
import { Teacher } from "../models/teachersModel";

class TeachersController {
  constructor() {}

  async get(req: Request, res: Response) {
    try {
      const data = await Teacher.find();
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
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Teacher not found");
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
      const register = await Teacher.save(req.body);
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
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Teacher not found");
      }
      await Teacher.update({ id: Number(id) }, req.body);
      const registerUpdated = await Teacher.findOneBy({ id: Number(id) });
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
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error("Teacher not found");
      }
      await Teacher.delete({ id: Number(id) });
      res.status(204);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new TeachersController();
