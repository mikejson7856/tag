import express from "express";
import { createTag, getTags, imageUploadForTag, getTagWithImages } from "../controllers/TagController.js";



const TagRouter = express.Router();

TagRouter.route("/").get(
    getTags
);

TagRouter.route("/images/:tag").get(
    getTagWithImages
);

TagRouter.route("/").post(
    createTag
);

TagRouter.route("/upload-image").post(
    imageUploadForTag
);


export default TagRouter;