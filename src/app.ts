import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import studentsRoutes from "./routes/studentsRoutes";
import teachersRoutes from "./routes/teachersRoutes";
import coursesRoutes from "./routes/coursesRoutes";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("Hola Mundo");
  res.send("Hola Mundo");
});

app.use("/students", studentsRoutes);
app.use("/teachers", teachersRoutes);
app.use("/courses", coursesRoutes);

export default app;
