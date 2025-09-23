import { Types } from "mongoose";

export interface IReview {
  course: Types.ObjectId;
  user: Types.ObjectId;
  rating: number;
  comment: string;
}
