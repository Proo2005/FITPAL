"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-32 px-6 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-cyan-400">Fitness Tracker</h3>
            <p className="text-xs text-gray-400 mt-1">
              Track workouts. Build habits. Stay consistent.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <SocialIcon
              href="https://instagram.com/yourprofile"
              icon={<Instagram size={20} />}
            />
            <SocialIcon
              href="https://facebook.com/yourprofile"
              icon={<Facebook size={20} />}
            />
            <SocialIcon
              href="https://twitter.com/yourprofile"
              icon={<Twitter size={20} />}
            />
          </div>

          {/* Right */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Fitness Tracker<br />
            Built with 💙 by You
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md
               text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40
               hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
               transition-all duration-300"
  >
    {icon}
  </a>
);
