"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 flex justify-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl glass-card p-10 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)]"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">Contact Us</h2>
          <p className="text-gray-400 mb-8 text-center">
            Have questions or want to collaborate? Fill out the form below.
          </p>

          <form className="space-y-6">
            <InputField label="Name" type="text" placeholder="Your Name" />
            <InputField label="Email" type="email" placeholder="you@example.com" />
            <InputField label="Subject" type="text" placeholder="Subject" />
            <InputField label="Message" type="textarea" placeholder="Your message..." />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
              className="w-full py-3 bg-cyan-400 text-black font-bold rounded-xl hover:brightness-110 transition"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// Input component
const InputField = ({ label, type, placeholder }: any) => (
  <div className="flex flex-col">
    <label className="mb-2 text-gray-400 font-medium">{label}</label>
    {type === "textarea" ? (
      <textarea
        placeholder={placeholder}
        className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        rows={5}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
    )}
  </div>
);
