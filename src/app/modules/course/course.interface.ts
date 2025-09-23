import { Types } from "mongoose";

export interface ICourse {
  title: string;
  description: string;
  price: number;
  instructor: Types.ObjectId;
  lessons: Types.ObjectId[];
  students: Types.ObjectId[];
  reviews: Types.ObjectId[];
}
