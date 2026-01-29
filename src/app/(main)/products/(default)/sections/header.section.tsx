"use client";

// Framework

// External
import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-12 px-5% flex flex-col items-center justify-center text-center bg-blue-500/5"
    >
      <h1 className="text-4xl lg:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
        Browse <span className="text-blue-500">Products</span>
      </h1>
      <p className="text-slate-500 mt-4 max-w-lg">
        Find exactly what you're looking for. High-quality products from trusted
        vendors.
      </p>
    </motion.section>
  );
}
