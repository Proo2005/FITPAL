"use client";

import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";

const plans = [
  {
    type: "Monthly",
    price: 39,
    period: "/mo",
    features: ["Access to all workouts", "Meal tracking", "Progress analytics"],
    highlight: false,
    description: "Best for short-term subscribers."
  },
  {
    type: "Yearly",
    price: 179,
    period: "/yr",
    features: ["Access to all workouts", "Meal tracking", "Progress analytics", "Priority support"],
    highlight: true,
    description: "Most popular plan. Save over 60% compared to monthly."
  },
  {
    type: "Lifetime",
    price: 499,
    period: "one-time",
    features: ["Unlimited access forever", "All premium features", "Personal coach support"],
    highlight: false,
    description: "One-time payment, lifetime access."
  }
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <header className="text-center py-24 px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Premium Membership
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          Choose a plan that fits your fitness goals and start tracking your progress today.
        </p>
      </header>

      <main className="px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.3)" }}
            className={`relative rounded-3xl p-8 border border-white/20 bg-white/5 backdrop-blur-2xl flex flex-col items-center text-center ${
              plan.highlight ? "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-400/20 border-cyan-400" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-cyan-400/80 px-3 py-1 text-xs rounded-full text-black font-semibold shadow-lg">
                Most popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.type}</h2>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <div className="text-4xl font-extrabold mb-6">
              ${plan.price} <span className="text-lg font-normal">{plan.period}</span>
            </div>
            <ul className="mb-6 space-y-2 text-left w-full">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span> {feat}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
              className="mt-auto px-8 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:brightness-110 transition"
            >
              Subscribe
            </motion.button>
          </motion.div>
        ))}
      </main>

      <section className="text-center py-24 px-8">
        <h3 className="text-3xl font-bold text-cyan-400 mb-6">Why Choose Premium?</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Gain full access to our advanced fitness tracking tools, personalized meal plans, progress analytics, and community support. 
          Premium membership ensures you reach your fitness goals faster and smarter.
        </p>
      </section>

      <footer className="py-12 text-center text-gray-400 border-t border-white/10">
        &copy; 2026 FitPlatform. All rights reserved.
        
      </footer>
    </div>
  );
}
