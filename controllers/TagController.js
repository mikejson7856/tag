import { Image } from "../models/ImageModel.js";
import { Tag } from "../models/TagModel.js";
import { uploadMedia } from "../utils/cloudinary.js";
import fs from "fs";
export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();

    res.status(201).json({
      success: true,
      tags,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTag = async (req, res) => {
  try {

    const { name } = req.body;
    
    if (!name) {
      res.status(404).json({
        success: false,
        message: "Name field are required!",
      });
    }

    await Tag.create({ name });

    res.status(201).json({
      success: true,
      message: "Tag Create Successfully",
    });

    console.log(name);
  } catch (error) {
    console.log(error);
  }
};

export const imageUploadForTag = async (req, res) => {
  try {
    const { tag, frontUrl, backUrl } = req.body;

    await Image.create({
      tag,
      frontUrl,
      backUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Image upload successfully!",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error",
    });
  }
};
