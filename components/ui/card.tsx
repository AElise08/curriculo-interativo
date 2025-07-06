"use client";

import React from "react";
import { motion } from "framer-motion";

export function Card({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)"
      }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg rounded-xl border border-purple-500/20 shadow-2xl hover:border-purple-400/40 transition-all duration-300 ${className || ""}`}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      }}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="p-4 md:p-6" {...props}>
      {children}
    </div>
  );
}
