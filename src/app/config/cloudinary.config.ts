import { v2 as cloudinary } from "cloudinary";
import config from ".";

cloudinary.config({
  cloud_name: config.CLUDINARY_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

export const deleteImageFromCloudinary = async (url: string) => {
  try {
    const regex = /\/v\d+\/(.*?)\.(jpg|jpeg|png|gif|webp|mp4|mp3)$/i;
    const match = url.match(regex);
    if (match && match[1]) {
      const public_id = match[1];
      await cloudinary.uploader.destroy(public_id);
      console.log(`Image Upload Done ${public_id}`);
    }
  } catch (err) {
    console.log(`Image Delete failed:- ${url}`);
    throw err;
  }
};

export const cloudinaryUpload = cloudinary;
