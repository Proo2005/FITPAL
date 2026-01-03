import connectDB from "./lib/mongodb.js";
import Workout from "./models/Workout.js";

const sampleWorkouts = [
  { day: "Monday", type: "Chest Triceps", exercises: ["Flat Bench Press", "Incline Bench Press", "Fly" , "Triceps Pushdown" , "Tricpes Overhead"] },
  { day: "Tuesday", type: "Legs", exercises: ["Squat","RDLs","Leg Extension","Leg Curl","Calf Raises", "Forearms"] },
  { day: "Wednesday", type: "Shoulder", exercises: ["Rear Delt Flty","Overhead Press","Lateral Raise" ,"FacePull", "Shrugs", "Triceps Pushdown" , "Tricpes Overhead"] },
  { day: "Thursday", type: "Back Biceps", exercises: ["Rack Pull", "Row", "Pull Down","Straight Arm Pull","Incline Curl" ,"Standing Curl" ,"Hammer Curl"] },
  { day: "Friday", type: "Chest Triceps", exercises: ["Flat Bench Press", "Incline Bench Press", "Fly" , "Triceps Pushdown" , "Tricpes Overhead"] },
  { day: "Saturday",  type: "Legs", exercises: ["Squat","RDLs","Leg Extension","Leg Curl","Calf Raises", "Forearms"] },
  
];

async function populate() {
  await connectDB();
  await Workout.deleteMany(); // Optional: clear old data
  await Workout.insertMany(sampleWorkouts);
  console.log("Sample workouts inserted!");
  process.exit();
}

populate().catch(console.error);
