"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = void 0;
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_config_1 = require("./cloudinary.config");
const multer_1 = __importDefault(require("multer"));
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_config_1.cloudinaryUpload,
    params: (req, file) => {
        // pick resource type based on mime type
        let resource_type = "image";
        if (file.mimetype.startsWith("video/") ||
            file.mimetype.startsWith("audio/")) {
            resource_type = "video";
        }
        const fileName = file.originalname
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/\./g, "-")
            .replace(/[^a-z0-9\-\.]/g, "");
        const uniqueFile = Math.random().toString(36).substring(2) +
            "-" +
            Date.now() +
            "-" +
            fileName;
        return {
            public_id: uniqueFile,
            resource_type, // ✅ key for video/mp3 support
        };
    },
});
exports.multerUpload = (0, multer_1.default)({ storage: storage });
