import { Schema, model } from "mongoose";
import { ICourse } from "./course.interface";

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Course = model<ICourse>("Course", CourseSchema);
