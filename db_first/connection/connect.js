import mongoose from "mongoose";

export const auth = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongo db ");
  } catch (error) {
    console.log("showing error ", error.message);
  }
};
