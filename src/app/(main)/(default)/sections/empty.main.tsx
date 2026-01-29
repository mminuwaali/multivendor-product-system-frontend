"use client";

// Framework
import Link from "next/link";

// External
import { motion } from "framer-motion";

// Components
import { MyGlassCard } from "@/components/shared/glass.card";

interface EmptyMainProps {
  title: string;
  description: string;
  icon: string;
}

export function EmptyMain(props: EmptyMainProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center py-12"
    >
      <MyGlassCard className="max-w-md w-full p-12 text-center flex flex-col gap-6 items-center">
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-4xl shadow-inner">
          <i className={`fa-solid ${props.icon}`} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
            {props.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {props.description}
          </p>
        </div>

        <Link href="/">
          <button className="px-8 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg active:scale-95">
            Back to Home
          </button>
        </Link>
      </MyGlassCard>
    </motion.section>
  );
}
