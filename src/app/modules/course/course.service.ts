import { Course } from "./course.model";
import { ICourse } from "./course.interface";

const createCourse = async (payload: ICourse) => {
  //   console.log("In Services", payload);
  const result = await Course.create(payload);
  return result;
};
const getAllCourses = async () => {
  const result = await Course.find();
  return result;
};
const getACourses = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

const deleteACourse = async (id: string) => {
  const result = await Course.findByIdAndDelete(id);
  return "";
};

export const CourseService = {
  createCourse,
  getAllCourses,
  getACourses,
  deleteACourse,
};
