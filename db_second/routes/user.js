import { Router } from "express";
import { sendUser } from "../controller/user.js";
import { createblog, getBlogByUserId } from "../controller/blog.js";

const routes = Router();

routes.post("/sendUser", sendUser);
routes.post("/createBlog/:id", createblog);
routes.get("/getUserBlog/:userId", getBlogByUserId);

export default routes;
