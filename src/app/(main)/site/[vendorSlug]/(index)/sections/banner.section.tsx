"use client";

// Framework
import Image from "next/image";

// External
import { motion } from "framer-motion";

// Internal
import { useParamsCtx } from "@/components/providers/param.provider";
import { MyStat } from "@/components/primary/stat.primary";

export function BannerSection() {
  const paramsContext = useParamsCtx();
  const vendor = paramsContext.params.vendor as IVendorModel | undefined;

  if (!vendor) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative pt-32 pb-16 px-5% overflow-hidden"
    >
      {/* Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-0">
        <Image
          fill
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=60&w=1200"
          className="object-cover opacity-20 dark:opacity-10"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-40 h-40 rounded-[2.5rem] glass-effect p-2 shadow-2xl"
          >
            <Image
              fill
              src={
                vendor.avatar ??
                "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
              }
              alt={vendor.name}
              className="object-cover rounded-4xl p-2"
            />
          </motion.div>

          {/* Info */}
          <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <h1 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
                  {vendor.name}
                </h1>
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  VERIFIED
                </span>
              </div>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
                {vendor.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <MyStat label="Products" value="48" />
              <MyStat label="Followers" value="1.2k" />
              <MyStat label="Rating" value={`${vendor.rating} ★`} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="px-8 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg active:scale-95">
              Follow Store
            </button>
            <button className="w-12 h-12 rounded-2xl glass-effect flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-all">
              <i className="fa-solid fa-share-nodes" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
