import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./lib/mongodb.js";
import Razorpay from "./lib/razorpay.js";
import * as workoutController from "./controller/workoutController.js";
import { getPRs, createPR, updatePR, deletePR } from "./controller/prController.js";
import {
  getHabits,
  updateHabit,
  createHabit,
  deleteHabit,
} from "./controller/habitController.js";
import chatRoutes from "./routes/chatRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ENV sanity check (remove later)
console.log("ENV CHECK:", {
  mongo: !!process.env.MONGO_URI,
  razorpayKey: !!process.env.RAZORPAY_KEY_ID,
  razorpaySecret: !!process.env.RAZORPAY_KEY_SECRET,
  geminiapi: !!process.env.GEMINI_API_KEY,
});

// DB
connectDB()
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);


// Routes
app.use("/api/payment", paymentRoutes);
app.post("/api/payment/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).json({ error: "Amount is required" });

  try {
    const order = await Razorpay.orders.create({
      amount,          // in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);  // this will return { id, amount, currency, ... }
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});



app.get("/api/workouts/weekly", workoutController.getWeeklyWorkouts);
app.post("/api/workouts/weekly", workoutController.addWorkout);

app.get("/api/prs", getPRs);
app.post("/api/prs", createPR);
app.put("/api/prs/:id", updatePR);
app.delete("/api/prs/:id", deletePR);

app.get("/api/habits", getHabits);
app.post("/api/habits", createHabit);
app.put("/api/habits/:id", updateHabit);
app.delete("/api/habits/:id", deleteHabit);

// Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
