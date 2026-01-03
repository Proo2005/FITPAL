"use client";

import { useState, useEffect } from "react";

const habits = [
  { id: 1, title: "Workout", goal: "6x Weekly", color: "bg-red-500" },
  { id: 2, title: "3000 Kcal Diet", goal: "Daily", color: "bg-yellow-500" },
  { id: 3, title: "Drink 4lt Water", goal: "Daily", color: "bg-blue-500" },
];

export default function HabitTracker() {
  const [habitState, setHabitState] = useState({});

  // Initialize 28-day state per habit
  useEffect(() => {
    const initialState = {};
    habits.forEach((h) => {
      initialState[h.id] = Array(28).fill(false);
    });
    setHabitState(initialState);
  }, []);

  // Toggle completion of a box (click again to undo)
  const toggleBox = (habitId, index) => {
    setHabitState((prev) => {
      const updated = { ...prev };
      updated[habitId][index] = !updated[habitId][index];
      return updated;
    });
  };

  // Mark completed boxes and save to backend
  const markAsCompleted = async (habitId) => {
    try {
      const completedBoxes = habitState[habitId];
      // Replace this URL with your backend endpoint
      await fetch(`http://localhost:5000/api/habits/${habitId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completedBoxes }),
      });
      alert("Habit updated in database!");
    } catch (err) {
      console.error(err);
    }
  };

  // Calculate date for each box (optional: adjust startDate as needed)
  const startDate = new Date(); // Today
  const getDateForBox = (index) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() - (27 - index));
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {habits.map((h) => (
        <div
          key={h.id}
          className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl"
        >
          {/* Habit Header */}
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-2 h-2 rounded-full ${h.color}`}></div>
            <h4 className="text-sm font-semibold">{h.title}</h4>
          </div>
          <p className="text-[10px] text-zinc-500 mb-4">Goal: {h.goal}</p>

          {/* 28-Day Boxes */}
          <div className="grid grid-cols-7 gap-1">
            {habitState[h.id]?.map((completed, i) => (
              <div
                key={i}
                onClick={() => toggleBox(h.id, i)}
                className={`w-full aspect-square rounded-sm cursor-pointer transition relative ${
                  completed ? h.color : "bg-zinc-700/30"
                }`}
              >
                {/* Tooltip */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] text-white bg-zinc-800 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {getDateForBox(i)}
                </span>
              </div>
            ))}
          </div>

          {/* Mark Completed Button */}
          <button
            className="mt-4 w-full text-[10px] bg-zinc-800 py-1 rounded hover:bg-zinc-700"
            onClick={() => markAsCompleted(h.id)}
          >
            Mark as completed
          </button>
        </div>
      ))}
    </div>
  );
}
