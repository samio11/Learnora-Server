import { Types } from "mongoose";

export interface IPayment {
  course: Types.ObjectId;
  student: Types.ObjectId;
  amount: number;
  status: "pending" | "completed" | "failed";
}
