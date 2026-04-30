import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { connectiondb } from "./connection/conn.js";
import routes from "./routes/user.js";
import { user } from "./models/user.js";
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

app.get("/user", async (req, res) => {
  try {
    // const findUser = await user.find({ age: { $gt: 18 } });
    // const findUser = await user.find({ age: { $eq: 18 } });
    // const findUser = await user.find({ age: { $ne: 18 } });
    // const findUser = await user.find({ age: { $lt: 18 } });
    const findUser = await user.find({
      $and: [{ age: { $lt: 30 } }, { email: "askj,nfjalkd23@gmail.com" }],
    });
    console.log(findUser);
    if (!findUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }
    // res.send("working");

    res.status(200).json({
      message: "required user:",
      success: true,
      findUser,
    });
  } catch (error) {
    console.log("showing errror", error.message);
  }
});

app.listen(1000, () => {
  console.log("http://localhost:1000");
});
