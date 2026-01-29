"use client";

// Framework
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Internal
import { lightIcon, darkIcon } from "@/constants/media";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/data";
import { MySocialIcon } from "@/components/primary/social.primary";

export function FooterLayoutSection() {
  return (
    <footer className="w-full py-12 px-5% bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="relative h-16 w-16">
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
          <p className="text-sm text-slate-500">
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
