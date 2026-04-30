import { user } from "../models/auth.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const existUser = await user.findOne({ _id: id });
    if (!existUser) {
      return res.status(404).json({
        message: "user does not exist",
        success: false,
      });
    }
    res.status(200).json({
      message: "successfully sent data",
      success: true,
      data: existUser,
    });
  } catch (error) {
    console.error("getUser error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

export const sendUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

// update user

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const updatedUser = await user.findByIdAndUpdate(
    {
      _id: id,
    },
    updatedData,
    { new: true },
  );
  if (!updatedUser) {
    res.status(404).json({
      message: "user not found",
      success: false,
    });

    res.status(200).json({
      message: "user successfully updated",
      success: true,
      data: updatedUser,
    });
  }
};
