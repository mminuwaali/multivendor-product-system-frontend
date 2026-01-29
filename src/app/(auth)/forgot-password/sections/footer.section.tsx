"use client";

// Framework
import Link from "next/link";

// Internal
import { MyButtonForm } from "@/components/forms/button.form";

export function FooterSection() {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <MyButtonForm type="submit" className="w-full h-12 text-lg">
        Reset Password
      </MyButtonForm>

      <div className="text-center">
        <p className="text-slate-500 font-bold">
          Remembered your password?{" "}
          <Link
            href="/signin"
            className="text-emerald-500 hover:text-emerald-600 transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
