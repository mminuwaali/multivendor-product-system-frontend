"use client";

// Framework

// External
import { motion } from "framer-motion";

export interface MySocialIconProps {
  icon: string;
  href?: string;
  className?: string;
}

export function MySocialIcon(props: MySocialIconProps) {
  return (
    <motion.a
      whileHover={{ y: -4 }}
      href={props.href ?? "#"}
      className={`w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all ${props.className ?? ""}`}
    >
      <i className={`fa-brands ${props.icon}`} />
    </motion.a>
  );
}
