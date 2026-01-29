"use client";

// Framework

// External
import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2 mb-8 text-center"
    >
      <h1 className="text-3xl font-black text-slate-800 dark:text-white">
        Welcome Back
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
        Sign in to your account to continue
      </p>
    </motion.div>
  );
}
