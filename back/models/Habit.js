// models/Habit.js
import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  goal: { type: String, required: true },
  color: { type: String, default: "bg-red-500" },
  completedBoxes: {
    type: [Boolean],   // Array of 28 booleans (one per day)
    default: Array(28).fill(false),
  },
});

const Habit = mongoose.models.Habit || mongoose.model("Habit", HabitSchema);
export default Habit;
