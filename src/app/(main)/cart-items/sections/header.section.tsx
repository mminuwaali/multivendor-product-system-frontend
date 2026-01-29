"use client";

// Framework

// External
import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2 text-center"
    >
      <h1 className="text-4xl font-black text-slate-800 dark:text-white">
        Shopping Cart
      </h1>
      <p className="text-slate-500 font-medium">
        Review your items before checkout
      </p>
    </motion.div>
  );
}
