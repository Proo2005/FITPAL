// scripts/seedExercisePRs.js
import connectDB from "./lib/mongodb.js";
import ExercisePR from './models/ExercisePR.js';

const exercises = [
  { day: "Monday", type: "Chest Triceps", name: "Flat Bench Press", weight: 100 },
  { day: "Monday", type: "Chest Triceps", name: "Incline Bench Press", weight: 80 },
  { day: "Monday", type: "Chest Triceps", name: "Fly", weight: 40 },
  { day: "Monday", type: "Chest Triceps", name: "Triceps Pushdown", weight: 30 },
  { day: "Monday", type: "Chest Triceps", name: "Triceps Overhead", weight: 35 },
  // Add more exercises for other days
];


async function populate() {
  await connectDB();
  await ExercisePR.deleteMany(); // Optional: clear old data
  await ExercisePR.insertMany(exercises);
  console.log("Sample prs inserted!");
  process.exit();
}

populate().catch(console.error);