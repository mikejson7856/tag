import express from "express";
import { createTag, getTags, imageUploadForTag } from "../controllers/TagController.js";


const TagRouter = express.Router();

TagRouter.route("/").get(
    getTags
);
TagRouter.route("/").post(
    createTag
);




export default TagRouter;