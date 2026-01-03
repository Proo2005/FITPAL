import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    type: { type: String, required: true },
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true }
);

const Workout = mongoose.models.Workout || mongoose.model("Workout", WorkoutSchema);

export default Workout;
