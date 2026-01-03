"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tracker", href: "/tracker" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Signup", href: "/login" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      {/* Glass Container */}
      <div className="relative flex items-center gap-10 px-10 py-4 rounded-3xl
        bg-white/10 backdrop-blur-2xl border border-white/20
        shadow-[0_10px_40px_rgba(0,255,255,0.18)]
      ">
        {/* iOS glass highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group relative text-sm font-medium text-white/90 transition"
          >
            {/* Text */}
            <span className="relative z-10 group-hover:text-cyan-400 transition">
              {item.name}
            </span>

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0
              bg-gradient-to-r from-pink-500 to-cyan-400
              transition-all duration-300 group-hover:w-full"
            />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}