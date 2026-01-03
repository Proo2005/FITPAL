// controllers/prController.js
import ExercisePR from "../models/ExercisePR.js";
// controller/prController.js
import connectToDB from "../lib/mongodb.js"; // default import now



// GET all PRs
export const getPRs = async (req, res) => {
  try {
    await connectToDB();
    const prs = await ExercisePR.find();
    res.json(prs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new PR
export const createPR = async (req, res) => {
  try {
    await connectToDB();
    const { name, weight, day, type } = req.body;
    const pr = new ExercisePR({ name, weight, day, type });
    await pr.save();
    res.status(201).json(pr);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PR weight
export const updatePR = async (req, res) => {
  try {
    await connectToDB();
    const { id } = req.params;
    const { weight } = req.body;
    const pr = await ExercisePR.findById(id);
    if (!pr) return res.status(404).json({ message: "Exercise not found" });

    pr.previousWeight = pr.weight;
    pr.weight = weight;
    await pr.save();
    res.json(pr);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE PR
export const deletePR = async (req, res) => {
  try {
    await connectToDB();
    const { id } = req.params;
    await ExercisePR.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
