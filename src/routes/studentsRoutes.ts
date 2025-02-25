import express from "express";
import studentsController from "../controllers/studentsController";
const router = express.Router();

router.get("/", studentsController.get);

router.post("/", studentsController.insert);

router
  .route("/:id")
  .get(studentsController.getDetails)
  .put(studentsController.update)
  .delete(studentsController.delete);

export default router;
