import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./lib/mongodb.js";
import * as workoutController from "./controller/workoutController.js";
import { getPRs, createPR, updatePR, deletePR } from "./controller/prController.js";
import {
  getHabits,
  updateHabit,
  createHabit,
  deleteHabit,
} from "./controller/habitController.js";


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB()
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(console.error);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
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

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
