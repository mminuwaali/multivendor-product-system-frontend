"use client";

// Framework
import Link from "next/link";

export interface MyNavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function MyNavLink(props: MyNavLinkProps) {
  return (
    <Link
      href={props.href}
      className={`text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors relative group ${props.className ?? ""}`}
    >
      {props.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
    </Link>
  );
}
