import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    frontUrl: { type: String, required: true },
    backUrl: { type: String, required: true },
    tag: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Image = mongoose.model("Image", imageSchema);
