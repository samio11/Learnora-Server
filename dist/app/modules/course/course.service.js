"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const course_model_1 = require("./course.model");
const createCourse = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("In Services", payload);
    const result = yield course_model_1.Course.create(payload);
    return result;
});
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.Course.find();
    return result;
});
const getACourses = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.Course.findById(id);
    return result;
});
const deleteACourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.Course.findByIdAndDelete(id);
    return "";
});
exports.CourseService = {
    createCourse,
    getAllCourses,
    getACourses,
    deleteACourse,
};
