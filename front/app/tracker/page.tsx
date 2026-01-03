"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";

const workoutParts = [
  { name: "Chest", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e" },
  { name: "Back", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438" },
  { name: "Arms", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
  { name: "Legs", img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74" },
  { name: "Shoulder", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
];

const meals = [
  { name: "Protein", value: 120, total: 180 },
  { name: "Carbs", value: 220, total: 300 },
  { name: "Fats", value: 60, total: 90 },
  { name: "Fibres", value: 30, total: 50 },
  { name: "Roughage", value: 18, total: 30 },
];

const trackerStats = [
  { label: "Weight", value: "72 kg" },
  { label: "Height", value: "175 cm" },
  { label: "Sleep", value: "7.5 hrs" },
  { label: "SpO₂", value: "98%" },
  { label: "Heart Rate", value: "72 bpm" },
];

const months = [
  { name: "Jan", days: 31 }, { name: "Feb", days: 28 }, { name: "Mar", days: 31 },
  { name: "Apr", days: 30 }, { name: "May", days: 31 }, { name: "Jun", days: 30 },
  { name: "Jul", days: 31 }, { name: "Aug", days: 31 }, { name: "Sep", days: 30 },
  { name: "Oct", days: 31 }, { name: "Nov", days: 30 }, { name: "Dec", days: 31 },
];

export default function TrackerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 flex">
        {/* Glass Sidebar */}
        <aside className="w-1/5 min-h-screen px-6 py-10
          bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl
          shadow-[0_0_40px_rgba(0,255,255,0.1)]"
        >
          <h2 className="text-2xl font-bold mb-10 text-cyan-300">Tracker</h2>

          <div className="space-y-8 text-sm">
            <Section title="Workout">
              {workoutParts.map(p => <MenuItem key={p.name} label={p.name} />)}
            </Section>

            <Section title="Meal">
              {meals.map(m => (
                <div key={m.name} className="flex justify-between">
                  <span>{m.name}</span>
                  <span className="text-gray-400">{m.value}</span>
                </div>
              ))}
            </Section>

            <Section title="Track">
              {trackerStats.map(t => <MenuItem key={t.label} label={t.label} />)}
            </Section>

            <Section title="Settings">
              <MenuItem label="Home" />
              <MenuItem label="About Us" />
              <MenuItem label="Contact" />
              <MenuItem label="User" />
            </Section>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-4/5 px-12 py-10 space-y-20">
          {/* Workouts */}
          <section>
            <h3 className="section-title text-3xl md:text-4xl">Workouts</h3>
            <div className="grid grid-cols-5 gap-6">
              {workoutParts.map(item => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(0,255,255,0.4)" }}
                  className="relative h-44 rounded-2xl overflow-hidden border border-white/20"
                >
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Calendar */}
          <section>
            <h3 className="section-title text-3xl md:text-4xl">12 Month Activity</h3>
            <div className="grid grid-cols-4 gap-6">
              {months.map(month => (
                <div key={month.name} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                  <p className="text-center text-gray-400 mb-3 text-sm">{month.name}</p>
                  <div className="grid grid-cols-7 gap-2 justify-items-center">
                    {[...Array(35)].map((_, d) => {
                      const active = d < month.days && d % 3 === 0;
                      return (
                        <span
                          key={d}
                          className={`w-3.5 h-3.5 rounded-full ${
                            d >= month.days
                              ? "opacity-0"
                              : active
                                ? "bg-red-500"
                                : "bg-white/20"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Meals with Animated Progress */}
          <section>
            <h3 className="section-title text-3xl md:text-4xl mb-6">Meals</h3>
            <div className="grid grid-cols-5 gap-6">
              {meals.map(meal => {
                const percent = (meal.value / meal.total) * 100;
                const radius = 38;
                const circumference = 2 * Math.PI * radius;

                return (
                  <motion.div
                    key={meal.name}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255,0,255,0.3)" }}
                    className="glass-card p-6 rounded-2xl border border-white/20 text-center bg-white/5 backdrop-blur-2xl"
                  >
                    <motion.svg
                      width="100"
                      height="100"
                      className="mx-auto -rotate-90 mb-4"
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: circumference - (percent / 100) * circumference }}
                      transition={{ duration: 1 }}
                    >
                      <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="cyan"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                      />
                    </motion.svg>
                    <p className="font-bold text-lg md:text-xl">{meal.name}</p>
                    <p className="text-gray-400 text-sm">{meal.value}/{meal.total}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Health Tracker */}
          <section>
            <h3 className="section-title text-3xl md:text-4xl mb-6">Health Tracker</h3>
            <div className="grid grid-cols-5 gap-6">
              {trackerStats.map(stat => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,255,255,0.3)" }}
                  className="glass-card p-6 rounded-2xl border border-white/20 text-center bg-white/5 backdrop-blur-2xl"
                >
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-bold mt-2">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* Helper components */
const Section = ({ title, children }: any) => (
  <div>
    <p className="text-gray-400 mb-2">{title}</p>
    <div className="space-y-1">{children}</div>
  </div>
);

const MenuItem = ({ label }: any) => (
  <div className="cursor-pointer hover:text-cyan-400 transition text-lg md:text-xl">{label}</div>
);
