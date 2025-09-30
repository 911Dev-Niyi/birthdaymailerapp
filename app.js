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
app.set('trust proxy', 1);
app.use("/api/user", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    birthdayCron();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Export the Express app as a Vercel handler
export default app;
