"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow Bubbles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-56 h-56 rounded-full
            bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30
            blur-3xl"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, 200, 0],
            }}
            transition={{
              duration: 25 + i * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Our Journey
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            We build fitness experiences that are simple, powerful, and
            motivating — helping people stay consistent and healthy.
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision Cards */}
      <section className="mt-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Our Mission",
            text: "To empower individuals with smart fitness tracking tools that make progress visible, measurable, and sustainable.",
          },
          {
            title: "Our Vision",
            text: "A world where fitness is accessible, enjoyable, and guided by data-driven insights for everyone.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-8
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_40px_rgba(0,255,255,0.12)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-30 pointer-events-none" />
            <h3 className="text-2xl font-semibold text-cyan-300">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Values Section */}
      <section className="mt-28 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          What
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Drives Us
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Consistency",
              desc: "Small daily actions create massive long-term results.",
            },
            {
              title: "Clarity",
              desc: "Simple data, clear insights, zero confusion.",
            },
            {
              title: "Motivation",
              desc: "Progress tracking that keeps you moving forward.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6
              bg-white/10 backdrop-blur-xl border border-white/20
              transition shadow-[0_0_30px_rgba(255,0,255,0.12)]"
            >
              <h4 className="text-xl font-semibold text-white">
                {v.title}
              </h4>
              <p className="mt-3 text-gray-400 text-sm">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 pb-24 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-12 py-8 rounded-3xl
          bg-gradient-to-r from-pink-500/20 to-cyan-400/20
          backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-3xl font-bold">
            Start Your Fitness Journey Today
          </h3>
          <p className="mt-4 text-gray-300">
            Track smarter. Train better. Stay consistent.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
