"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
}, { timestamps: true });
exports.Course = (0, mongoose_1.model)("Course", CourseSchema);
