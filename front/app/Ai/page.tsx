"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      // Call backend API to get Gemini AI response
      const res = await fetch("/api/chat/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, I could not process your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 md:px-16 py-8 flex flex-col">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-8">
          Fitness AI Chatbot
        </h1>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-4 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl mb-4 flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] p-3 rounded-2xl ${
                msg.sender === "user"
                  ? "self-end bg-gradient-to-r from-pink-500 to-cyan-400 text-black"
                  : "self-start bg-zinc-800 text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="self-start bg-zinc-800 text-white p-3 rounded-2xl w-max animate-pulse">
              Typing...
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Field */}
        <div className="flex gap-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me about workouts, diet, or fitness tips..."
            className="flex-1 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
            rows={1}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={sendMessage}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold hover:brightness-110 transition"
          >
            Send
          </motion.button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
