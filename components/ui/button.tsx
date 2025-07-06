"use client";

import React from "react";
import { motion } from "framer-motion";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
      style={{
        boxShadow: "0 4px 20px rgba(147, 51, 234, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)"
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
