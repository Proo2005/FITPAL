"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 flex justify-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md glass-card p-10 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)]"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form className="space-y-6">
            {!isLogin && <InputField label="Name" type="text" placeholder="Your Name" />}
            <InputField label="Email" type="email" placeholder="you@example.com" />
            <InputField label="Password" type="password" placeholder="Enter password" />

            {!isLogin && (
              <InputField label="Confirm Password" type="password" placeholder="Confirm password" />
            )}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
              className="w-full py-3 bg-cyan-400 text-black font-bold rounded-xl hover:brightness-110 transition"
              type="submit"
            >
              {isLogin ? "Login" : "Sign Up"}
            </motion.button>
          </form>

          <p className="mt-6 text-gray-400 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-cyan-400 font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const InputField = ({ label, type, placeholder }: any) => (
  <div className="flex flex-col">
    <label className="mb-2 text-gray-400 font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
    />
  </div>
);
