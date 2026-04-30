import { Router } from "express";
import { sendUser } from "../controller/user.js";
import { createblog } from "../controller/blog.js";

const routes = Router();

routes.post("/sendUser", sendUser);
routes.post("/createBlog", createblog);

export default routes;
