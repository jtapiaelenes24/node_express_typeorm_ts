import { Request, Response } from "express";

class TeachersController {
  constructor() {}

  get(req: Request, res: Response) {
    try {
      res.send("GET");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  getDetails(req: Request, res: Response) {
    try {
      res.send("GET DETAILS");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  insert(req: Request, res: Response) {
    try {
      res.send("INSERT");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  update(req: Request, res: Response) {
    try {
      res.send("UPDATE");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  delete(req: Request, res: Response) {
    try {
      res.send("DELETE");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new TeachersController();
