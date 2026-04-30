import mongoose from "mongoose";
import { user } from "../models/user.js";

const createblog = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const blog = mongoose.model("Blog", createblog);
export default blog;
