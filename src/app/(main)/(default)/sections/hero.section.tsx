"use client";

// Framework
import Link from "next/link";
import Image from "next/image";

// External
import { motion } from "framer-motion";

// Components
import { MyStat } from "@/components/primary/stat.primary";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light dark:bg-primary/20 text-primary-dark dark:text-primary text-sm font-bold w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-hover opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Marketplace for Premium Goods
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-800 dark:text-white leading-[1.1] tracking-tight">
            Discover <span className="text-primary">Handcrafted</span> Quality.
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Experience a curated selection of premium vendors offering the
            finest organic produce, artisan goods, and modern technology.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/vendors">
              <button className="px-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-xl shadow-primary/20 active:scale-95">
                Explore Vendors
              </button>
            </Link>
            <Link href="/products">
              <button className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-lg transition-all shadow-xl hover:shadow-2xl border border-slate-200 dark:border-slate-700 active:scale-95">
                Browse Products
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-8 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <MyStat label="Active Vendors" value="120+" className="flex-col!" />
            <MyStat
              label="Premium Products"
              value="2.5k+"
              className="flex-col!"
            />
            <MyStat
              label="Happy Customers"
              value="10k+"
              className="flex-col!"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square glass-effect rounded-[4rem] p-8 overflow-hidden">
            <Image
              fill
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1074"
              alt="Marketplace"
              className="object-cover rounded-[3rem] shadow-2xl p-8"
            />
          </div>

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 z-20 glass-effect p-4 rounded-3xl flex items-center gap-4 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-white">
              <i className="fa-solid fa-star text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">
                Average Rating
              </p>
              <p className="text-xl font-black text-slate-800 dark:text-white">
                4.9/5.0
              </p>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-10 -right-10 z-20 glass-effect p-4 rounded-3xl flex items-center gap-4 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
              <i className="fa-solid fa-check-double text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">
                Verified Quality
              </p>
              <p className="text-xl font-black text-slate-800 dark:text-white">
                100% Organic
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
