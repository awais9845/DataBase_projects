import mongoose from "mongoose";

export const connectiondb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("db is working ");
  } catch (error) {
    console.log("db not working", error.message);
  }
};
