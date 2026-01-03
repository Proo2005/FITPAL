"use client";

import { useEffect, useState } from "react";

type Workout = {
  _id: string;
  day: string;
  type: string;
  exercises: string[];
};

export default function WeeklySplit() {
  const [days, setDays] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/workouts/weekly"); // <- backend URL
        if (!res.ok) throw new Error("Failed to fetch workouts");
        const data: Workout[] = await res.json();
        setDays(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p className="text-zinc-500">Loading workouts...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (days.length === 0) return <p className="text-zinc-500">No workouts available</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {days.map((d) => (
        <div
          key={d._id}
          className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl
          backdrop-blur-xl hover:border-red-500/50 transition"
        >
          <p className="text-sm text-zinc-400 mb-2">{d.day}</p>

          <span className="inline-block mb-3 bg-red-900/30 text-red-400 
            text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
            {d.type}
          </span>

          <ul className="text-sm space-y-1">
            {d.exercises.map((ex) => (
              <li key={ex} className="text-zinc-300">
                • {ex}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
