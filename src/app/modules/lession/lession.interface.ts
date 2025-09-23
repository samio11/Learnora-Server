import { Types } from "mongoose";

export interface ILesson {
  title: string;
  videoUrl: string;
  course: Types.ObjectId;
  resources?: string[];
}
