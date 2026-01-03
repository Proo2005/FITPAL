import Workout from "../models/Workout.js";

// Get all workouts (weekly)
export const getWeeklyWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ _id: 1 });
    res.status(200).json(workouts);
  } catch (err) {
    console.error("Error fetching workouts:", err);
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
};

// Add a new workout
export const addWorkout = async (req, res) => {
  try {
    const { day, type, exercises } = req.body;
    const workout = new Workout({ day, type, exercises });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    console.error("Error adding workout:", err);
    res.status(500).json({ error: "Failed to add workout" });
  }
};
