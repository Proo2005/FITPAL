"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Navbar from "@/app/components/Navbar";
import emailjs from "@emailjs/browser";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Success / Error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Send email to your Gmail via EmailJS
      await emailjs.send(
        "service_bpqc6za", // e.g. "service_xxx"
        "template_wfbhafc", // e.g. "template_xxx"
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "mDL0KnNg8AV0aHzvl" // e.g. "user_xxx"
      );

      // Optionally, send a thank-you email to the user
      await emailjs.send(
        "service_bpqc6za",
        "template_d2g58vg", // create a separate template in EmailJS
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        "mDL0KnNg8AV0aHzvl"
      );

      setStatus("Message sent successfully! Thank you for reaching out.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Please try again.");
    }
  };

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              label="Name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <InputField
              label="Message"
              type="textarea"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
              className="w-full py-3 bg-cyan-400 text-black font-bold rounded-xl hover:brightness-110 transition"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>

          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </motion.div>
      </div>
       <Footer />
    </div>
  );
}

// Input component
const InputField = ({ label, type, placeholder, value, onChange, name }: any) => (
  <div className="flex flex-col">
    <label className="mb-2 text-gray-400 font-medium">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        rows={5}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
    )}
    
  </div>
  
);
