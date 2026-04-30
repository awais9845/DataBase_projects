import { user } from "../models/user.js";

export const sendUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "name, email, and password are required",
        success: false,
      });
    }

    const newUser = await user.create({
      name,
      email,
      password,
      age,
    });
    res.status(201).json({
      message: "successfully sent data",
      success: true,
      data: newUser,
    });
    console.log("created user:", newUser);
  } catch (error) {
    console.error("sendUser error:", error);
    res.status(500).json({
      message: "Unable to create user",
      success: false,
      error: error.message,
    });
  }
};
