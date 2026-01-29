"use client";

// Framework
import React from "react";
import Link from "next/link";

// External
import { motion, Variants } from "framer-motion";

// Internal
import { NAV_LINKS } from "@/constants/data";
import { MyNavLink } from "@/components/primary/nav.primary";
import { MyThemeSwitcher } from "@/components/primary/theme-switcher.primary";

export function HeaderLayoutSection() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5% py-4 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-store text-xl" />
          </div>
          <span className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">
            Glass<span className="text-primary">Market</span>
          </span>
        </Link>

        {/* Navigation & Auth */}
        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <MyNavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MyThemeSwitcher />

            <Link
              href="/cart-items"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              <i className="fa-solid fa-shopping-cart text-xl" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-black">
                3
              </span>
            </Link>

            <Link href="/signin">
              <button className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg shadow-primary/20 active:scale-95">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
