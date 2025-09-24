"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = require("express");
const course_controller_1 = require("./course.controller");
const multer_config_1 = require("../../config/multer.config");
const router = (0, express_1.Router)();
router.post("/create", multer_config_1.multerUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
]), course_controller_1.CourseController.createCourse);
router.get("/", course_controller_1.CourseController.getAllCourse);
router.get("/:id", course_controller_1.CourseController.getACourse),
    router.delete("/:id", course_controller_1.CourseController.deleteACourse);
exports.courseRouter = router;
