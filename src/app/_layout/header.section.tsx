"use client";

// Framework
import React from "react";
import Link from "next/link";
import Image from "next/image";

// External
import { motion, Variants } from "framer-motion";

// Internal
import { NAV_LINKS } from "@/constants/data";
import { MyNavLink } from "@/components/primary/nav.primary";
import { MyThemeSwitcher } from "@/components/primary/theme-switcher.primary";
import { lightIcon, darkIcon } from "@/constants/media";
import { useAuthCtx } from "@/components/providers/auth.provider";
import { useSignOut } from "@/hooks/requests/auth.hook";

export function HeaderLayoutSection() {
  const [scrolled, setScrolled] = React.useState(false);
  const authCtx = useAuthCtx();
  const handleSignOut = useSignOut();

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
          <div className="relative h-20 w-20 transition-transform">
            <React.Fragment>
              <Image
                src={lightIcon}
                alt="GlassMarket"
                className="w-full h-full object-contain block dark:hidden"
              />
              <Image
                src={darkIcon}
                alt="GlassMarket"
                className="w-full h-full object-contain hidden dark:block"
              />
            </React.Fragment>
          </div>
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

            {authCtx.logged ? (
              <button
                onClick={handleSignOut}
                className="px-6 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-all shadow-lg shadow-red-500/20 active:scale-95"
              >
                Logout
              </button>
            ) : (
              <Link href="/signin">
                <button className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg shadow-primary/20 active:scale-95">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
