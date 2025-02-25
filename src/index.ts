import express from "express";
import cors from "cors";
import morgan from "morgan";
import studentsRoutes from "./routes/studentsRoutes";
import teachersRoutes from "./routes/teachersRoutes";
import coursesRoutes from "./routes/coursesRoutes";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hola Mundo");
  res.send("Hola Mundo");
});

app.use("/students", studentsRoutes);
app.use("/teachers", teachersRoutes);
app.use("/courses", coursesRoutes);

app.listen(6505, () => {
  console.log("Active server.");
});

// https://www.youtube.com/watch?v=yd_QpXWrbtQ&t=5383s
// 1:48:57
