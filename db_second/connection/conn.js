import mongoose from "mongoose";

export const connectiondb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://waqarkhattak844_db_user:qXAqoj4HcNL8McEn@ac-bxtljjc-shard-00-00.gyrr6ni.mongodb.net:27017,ac-bxtljjc-shard-00-01.gyrr6ni.mongodb.net:27017,ac-bxtljjc-shard-00-02.gyrr6ni.mongodb.net:27017/?ssl=true&replicaSet=atlas-21ewq2-shard-0&authSource=admin&appName=Cluster0",
    );
    console.log("db is working ");
  } catch (error) {
    console.log("db not working", error.message);
  }
};
