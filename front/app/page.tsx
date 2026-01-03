"use client";

import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/components/Footer";
const images = [
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
];

const features = [
  { title: "Track Workouts", icon: "🏋️‍♂️", desc: "Monitor your daily workouts with detailed stats." },
  { title: "Meal Plans", icon: "🥗", desc: "Personalized meal recommendations to fuel your body." },
  { title: "Progress Analytics", icon: "📊", desc: "Visualize your growth with graphs and charts." },
  { title: "Community Support", icon: "💬", desc: "Connect and motivate with a fitness community." },
];

const testimonials = [
  { name: "Alice", quote: "This app transformed my workout routine! The interface is beautiful." },
  { name: "Bob", quote: "I love the meal tracking feature. It keeps me on point every day." },
  { name: "Charlie", quote: "Progress analytics are amazing. I can see my growth clearly." },
];

const stats = [
  { label: "Workouts Tracked", value: 320 },
  { label: "Calories Burned", value: 12500 },
  { label: "Active Users", value: 480 },
  { label: "Total Hours", value: 890 },
];

const handlePayment = async (plan: any) => {
  const res = await fetch("http://localhost:5000/api/payment/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: plan.price,
      plan: plan.type,
    }),
  });

  const order = await res.json();

  const options = {
    key: "rzp_test_xxxxx", // PUBLIC KEY ONLY
    amount: order.amount,
    currency: "INR",
    name: "Fitness Tracker",
    description: `${plan.type} Membership`,
    order_id: order.id,
    theme: { color: "#22d3ee" },
    handler: function (response: any) {
      alert("Payment successful!");
      console.log(response);
      // save membership in DB here
    },
  };

  const razor = new (window as any).Razorpay(options);
  razor.open();
};

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 blur-3xl"
            initial={{ x: Math.random() * 1200, y: Math.random() * 800 }}
            animate={{ x: [0, 200, 0], y: [0, -200, 0] }}
            transition={{ duration: 20 + i * 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-32 gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            FITNESS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              REDEFINED
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Track workouts, monitor progress, and push your limits with a modern fitness experience designed to keep you motivated every day.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
            className="mt-8 px-8 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:brightness-110 transition bg-gradient-to-r from-pink-500 to-cyan-400"
          >
            <a href="/membership">Join us Now</a>

          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
            onClick={() => handlePayment(plan)}
            className="mt-8 ml-4 px-4 py-3 rounded-full  bg-cyan-400 text-black font-bold hover:brightness-110 transition bg-gradient-to-r from-pink-500 to-cyan-400"
          >
            <a href="/Ai">Ai</a>

          </motion.button>
        </div>

        {/* Carousel */}
        <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden">
          <AnimatePresence initial={false}>
            {images.map((img, i) => {
              const position = (i - index + images.length) % images.length;

              let style = {};
              let zIndex = 10;

              if (position === 0) style = { opacity: 1, scale: 1, x: 0, zIndex: 20 };
              else if (position === 1) style = { opacity: 0.5, scale: 0.8, x: 100, zIndex: 10 };
              else if (position === images.length - 1) style = { opacity: 0.5, scale: 0.8, x: -100, zIndex: 10 };
              else style = { opacity: 0, scale: 0.7, x: 0, zIndex: 0 };

              return (
                <motion.img
                  key={i}
                  src={img}
                  alt={`fitness-${i}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{ zIndex: style.zIndex }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={style}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.3)" }}
            className="glass-card p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl text-center"
          >
            <p className="text-5xl">{f.icon}</p>
            <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Statistics Section */}
      <section className="mt-32 px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl"
          >
            <p className="text-3xl font-bold text-cyan-400">{s.value}</p>
            <p className="mt-2 text-gray-400">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="mt-32 px-8 md:px-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.3)" }}
              className="glass-card p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl"
            >
              <p className="text-gray-300 italic">"{t.quote}"</p>
              <p className="mt-4 font-bold text-white">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
