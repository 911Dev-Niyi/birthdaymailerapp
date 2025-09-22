import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import birthdayCron from "./cron/birthdayCron.js";

import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    // Start the birthday cron job after DB connection is established
    birthdayCron();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

