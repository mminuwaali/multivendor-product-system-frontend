"use client";

// Framework
import Link from "next/link";

// Internal
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/data";
import { MySocialIcon } from "@/components/primary/social.primary";

export function FooterLayoutSection() {
  return (
    <footer className="w-full py-12 px-5% bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xl font-black text-slate-800 dark:text-white tracking-tighter">
            Glass<span className="text-primary">Market</span>
          </span>
          <p className="text-sm text-slate-500 mt-2">
            © 2026 GlassMarket. Powered by Marketplace.
          </p>
        </div>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <MySocialIcon key={social.icon} icon={social.icon} />
          ))}
        </div>

        <div className="flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
