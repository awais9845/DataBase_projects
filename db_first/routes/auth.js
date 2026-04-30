import { Router } from "express";
import { getUser, sendUser, updateUser } from "../controller/auth.js";
const routes = Router();

routes.get("/getUser/:id", getUser);
routes.post("/sendUser", sendUser);
routes.put("/updatedUser/:id", updateUser);

export default routes;
