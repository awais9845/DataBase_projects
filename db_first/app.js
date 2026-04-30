import express from "express";

import { config } from "dotenv";
import { auth } from "./connection/connect.js";
import routes from "./routes/auth.js";
// import { user } from "./models/auth.js";

config();
const app = express();

auth();

app.use(express.json());

app.use("/api", routes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at http://localhost:${pocess.env.PORT}`);
// });
app.listen(process.env.PORT, () => {
  console.log(`server listening at http://localhost:${process.env.PORT}`);
});
