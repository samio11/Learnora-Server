"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const express_1 = require("express");
const course_routes_1 = require("../modules/course/course.routes");
exports.rootRoute = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/course",
        element: course_routes_1.courseRouter,
    },
];
moduleRoutes.forEach((x) => exports.rootRoute.use(x.path, x.element));
