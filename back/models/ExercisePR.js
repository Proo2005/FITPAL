// models/ExercisePR.js
import mongoose from 'mongoose';

const ExercisePRSchema = new mongoose.Schema({
  name: { type: String, required: true },       // Exercise name
  weight: { type: Number, required: true },     // Current PR weight
  previousWeight: { type: Number, default: 0 }, // To track previous weight for progress bar
  day: { type: String },                        // Optional: day of workout
  type: { type: String },                       // Muscle group / type
});

const ExercisePR = mongoose.model('ExercisePR', ExercisePRSchema);
export default ExercisePR;
