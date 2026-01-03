"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const plans = [
  {
    type: "Monthly",
    price: 39,
    period: "/mo",
    features: ["Access to all workouts", "Meal tracking", "Progress analytics"],
    highlight: false,
  },
  {
    type: "Yearly",
    price: 179,
    period: "/yr",
    features: [
      "Access to all workouts",
      "Meal tracking",
      "Progress analytics",
      "Priority support",
    ],
    highlight: true,
  },
  {
    type: "Lifetime",
    price: 499,
    period: "one-time",
    features: ["Unlimited access forever", "All premium features", "Personal coach support"],
    highlight: false,
  },
];

export default function MembershipPage() {
  // Load Razorpay SDK
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.id = "razorpay-script";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleSubscribe = async (plan: any) => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) return alert("Razorpay SDK failed to load");

    try {
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.price * 100 }),
      });
      const order = await res.json();

      if (!order.id) return alert("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Fitness App Premium",
        description: plan.type + " Plan",
        order_id: order.id,
        handler: function (response: any) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        theme: { color: "#00ffff" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="text-center py-24 px-6 md:px-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
          Premium Membership
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Choose a plan that fits your fitness goals and start tracking your progress today.
        </p>
      </header>

      {/* Plans */}
      <main className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.2)" }}
            className={`relative rounded-3xl p-8 border border-white/20 bg-white/5 backdrop-blur-xl flex flex-col items-center text-center transition ${
              plan.highlight ? "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-400/10 border-cyan-400" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-cyan-400/80 px-3 py-1 text-xs rounded-full text-black font-semibold shadow-lg">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold mb-2">{plan.type}</h2>
            <p className="text-gray-400 mb-4 text-sm">{plan.features.join(" • ")}</p>

            <div className="text-4xl font-extrabold mb-6">
              ₹{plan.price} <span className="text-lg font-normal">{plan.period}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
              className="mt-auto px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold hover:brightness-110 transition"
              onClick={() => handleSubscribe(plan)}
            >
              Subscribe
            </motion.button>
          </motion.div>
        ))}
      </main>

      {/* Why Premium Section */}
      <section className="text-center py-24 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-cyan-400 mb-6">Why Choose Premium?</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Gain full access to our advanced fitness tracking tools, personalized meal plans, progress analytics, and community support. 
          Premium membership ensures you reach your fitness goals faster and smarter.
        </p>
      </section>

      <Footer />
    </div>
  );
}
