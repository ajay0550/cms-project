import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";


import authRoutes from "./routes/auth.route.js";

const app = express();

/* DB */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/* Routes */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ success: true, message: "CMS Backend is running" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
