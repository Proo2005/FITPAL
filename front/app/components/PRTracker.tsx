"use client";

import { useEffect, useState } from "react";

export default function PRTracker() {
  const [prs, setPrs] = useState([]);
  const [editedWeights, setEditedWeights] = useState({}); // Temporary weights

  // Fetch PRs from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/prs")
      .then((res) => res.json())
      .then((data) => {
        setPrs(data);
        const tempWeights = {};
        data.forEach((p) => (tempWeights[p._id] = p.weight));
        setEditedWeights(tempWeights);
      })
      .catch(console.error);
  }, []);

  // Handle input change
  const handleInputChange = (id, value) => {
    setEditedWeights((prev) => ({ ...prev, [id]: value }));
  };

  // Update backend
  const updateWeight = async (id) => {
    try {
      const newWeight = Number(editedWeights[id]);
      const res = await fetch(`http://localhost:5000/api/prs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weight: newWeight }),
      });
      const updated = await res.json();
      setPrs((prev) => prev.map((p) => (p._id === id ? updated : p)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {prs.map((item) => {
        const diff = item.weight - item.previousWeight;
        const diffPercent = item.previousWeight
          ? ((diff / item.previousWeight) * 100).toFixed(1)
          : 0;

        return (
          <div
            key={item._id}
            className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl transition"
          >
            {/* Exercise Name */}
            <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>

            {/* Type & Day */}
            <span className="text-[11px] bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full mb-3">
              {item.type} - {item.day}
            </span>

            {/* Editable Weight */}
            <div className="flex gap-2 items-center mb-3">
              <input
                type="number"
                value={editedWeights[item._id]}
                onChange={(e) => handleInputChange(item._id, e.target.value)}
                className="text-sm text-white bg-zinc-800 p-2 rounded w-24 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => updateWeight(item._id)}
                className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded hover:bg-blue-500 transition"
              >
                Update
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-zinc-700 h-3 rounded-full overflow-hidden">
              <div
                className={`h-3 ${
                  diff >= 0 ? "bg-green-500" : "bg-red-500"
                } rounded-full transition-all`}
                style={{ width: `${Math.min(Math.abs(diffPercent), 100)}%` }}
              ></div>
            </div>

            {/* Percentage Text */}
            <p
              className={`text-[10px] mt-1 ${
                diff >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {diff >= 0 ? "+" : ""}
              {diffPercent}% from previous
            </p>
          </div>
        );
      })}
    </div>
  );
}
