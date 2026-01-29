"use client";

// Framework
import React from "react";

// External
import { useRouter } from "next/navigation";

// Providers
import { useAuthCtx } from "@/components/providers/auth.provider";

export default function AuthLayout(props: React.PropsWithChildren) {
  const router = useRouter();
  const authCtx = useAuthCtx();

  React.useEffect(() => {
    if (authCtx.logged) router.replace("/");
  }, [authCtx.logged, router]);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-5% py-20 relative overflow-hidden">
      {props.children}
    </section>
  );
}
