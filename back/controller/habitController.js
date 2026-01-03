// controllers/habitController.js
import connectToDB from "../lib/mongodb.js";
import Habit from "../models/Habit.js";

// Get all habits
export const getHabits = async (req, res) => {
  try {
    await connectToDB();
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update completedBoxes
export const updateHabit = async (req, res) => {
  try {
    await connectToDB();
    const { completedBoxes } = req.body;
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { completedBoxes },
      { new: true }
    );
    if (!habit) return res.status(404).json({ message: "Habit not found" });
    res.json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new habit
export const createHabit = async (req, res) => {
  try {
    await connectToDB();
    const { title, goal, color } = req.body;
    const habit = new Habit({ title, goal, color });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete habit
export const deleteHabit = async (req, res) => {
  try {
    await connectToDB();
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
