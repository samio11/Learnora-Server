import { Router } from "express";
import { courseRouter } from "../modules/course/course.routes";

export const rootRoute = Router();

const moduleRoutes = [
  {
    path: "/course",
    element: courseRouter,
  },
];

moduleRoutes.forEach((x) => rootRoute.use(x.path, x.element));
