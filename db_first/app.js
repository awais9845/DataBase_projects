import express from "express";

import { config } from "dotenv";
import { auth } from "./connection/connect.js";
import { user } from "./models/auth.js";
const app = express();
config();

auth();

app.use(express.json());

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await user.create({
    name,
    email,
    password,
  });
  res.send("successfully sent data");
  console.log(newUser);
});
app.listen(3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
