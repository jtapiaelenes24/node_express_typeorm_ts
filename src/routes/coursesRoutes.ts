import express from "express";
import coursesController from "../controllers/coursesController";
const router = express.Router();

router.get("/", coursesController.get);

router.post("/", coursesController.insert);
router.post("/registerStudent", coursesController.registerStudent);

router
  .route("/:id")
  .get(coursesController.getDetails)
  .put(coursesController.update)
  .delete(coursesController.delete);

export default router;
