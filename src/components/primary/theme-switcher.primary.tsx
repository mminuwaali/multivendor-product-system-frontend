"use client";

import { motion } from "framer-motion";
import { useTheme } from "../providers/theme.provider";

export function MyThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shadow-inner"
    >
      <i
        className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"} text-lg`}
      />
    </motion.button>
  );
}
