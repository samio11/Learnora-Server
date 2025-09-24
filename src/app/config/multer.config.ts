import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: (req, file) => {
    // pick resource type based on mime type
    let resource_type: "image" | "video" = "image";
    if (
      file.mimetype.startsWith("video/") ||
      file.mimetype.startsWith("audio/")
    ) {
      resource_type = "video";
    }

    const fileName = file.originalname
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\./g, "-")
      .replace(/[^a-z0-9\-\.]/g, "");

    const uniqueFile =
      Math.random().toString(36).substring(2) +
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

export const multerUpload = multer({ storage: storage });
