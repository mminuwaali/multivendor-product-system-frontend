"use client";

export function HeaderSection() {
  return (
    <div className="flex flex-col gap-2 items-center text-center mb-4">
      <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
        Forgot <span className="text-emerald-500">Password?</span>
      </h1>
      <p className="text-slate-500 font-medium">
        Enter your email address and we&#39;ll send you a link to reset your
        password.
      </p>
    </div>
  );
}
