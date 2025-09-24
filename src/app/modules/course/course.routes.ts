import { Router } from "express";
import { CourseController } from "./course.controller";
import { multerUpload } from "../../config/multer.config";

const router = Router();

router.post(
  "/create",
  multerUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  CourseController.createCourse
);

router.get("/", CourseController.getAllCourse);
router.get("/:id", CourseController.getACourse),
  router.delete("/:id", CourseController.deleteACourse);

export const courseRouter = router;
