import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CourseService } from "./course.service";

const createCourse = catchAsync(async (req, res, next) => {
  const files = req?.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = {
    ...JSON.parse(req.body.data),
    imageUrl: files?.image?.[0]?.path || "",
    videoUrl: files?.video?.[0]?.path || "",
  };
  console.log("In controller", payload);
  const result = await CourseService.createCourse(payload);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Course Created Done",
    data: result,
  });
});
const getAllCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.getAllCourses();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course Data Retrived",
    data: result,
  });
});
const getACourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseService.getACourses(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course Data Retrived",
    data: result,
  });
});
const deleteACourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseService.deleteACourse(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course Data Deleted",
    data: "",
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getACourse,
  deleteACourse,
};
