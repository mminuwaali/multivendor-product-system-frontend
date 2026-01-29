"use client";

// Framework

// External
import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-12 px-5% flex flex-col items-center justify-center text-center bg-emerald-500/5"
    >
      <h1 className="text-4xl lg:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
        Explore Our{" "}
        <span className="text-emerald-500 text-gradient-green">Vendors</span>
      </h1>
      <p className="text-slate-500 mt-4 max-w-lg">
        Connect with the best stores in the marketplace. Verified quality and
        premium service.
      </p>
    </motion.section>
  );
}
