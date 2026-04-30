import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { connectiondb } from "./connection/conn.js";
import routes from "./routes/user.js";
config();
const app = express();
app.use(express.json());
connectiondb();

// app.get("/", (req, res) => {
//   res.send("working correctly");
// });

// app.post("/user", async (req, res) => {
//   const { name, email, password } = req.body;

//   const newUser = {
//     name,
//     email,
//     password,
//   };
//   res.status(200).json({
//     message: "created successfully",
//     data: newUser,
//   });
// });

app.use("/api", routes);

app.listen(1000, () => {
  console.log("http://localhost:1000");
});
