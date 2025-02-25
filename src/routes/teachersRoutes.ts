import express from "express";
import teachersController from "../controllers/teachersController";
const router = express.Router();

router.get("/", teachersController.get);

router.post("/", teachersController.insert);

router
  .route("/:id")
  .get(teachersController.getDetails)
  .put(teachersController.update)
  .delete(teachersController.delete);

export default router;
