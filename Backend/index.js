import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import instructorRoutes from "./routes/instructorRoutes.js";
import { PORT, MONGO_URI } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => {
      console.log(`Server is connected on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/instructors", instructorRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

