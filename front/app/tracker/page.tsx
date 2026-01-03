"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";

import Sidebar from '@/app/components/Sidebar';
import DashboardGrid from '@/app/components/DashboardGrid';

export default function Home() {
return (
  <div className="min-h-screen bg-[#0F0F0F] text-gray-300 font-sans">
    {/* Navbar (top floating) */}
    <Navbar />

    {/* Page Layout */}
    <div className="flex pt-24">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-4 fixed h-full overflow-y-auto hidden md:block">
        
        <h1 className="text-xl font-bold text-white mb-8 tracking-tight">
          Fitness-Hub
        </h1>

        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6">
        <DashboardGrid />
      </main>
    </div>
  </div>
);

}