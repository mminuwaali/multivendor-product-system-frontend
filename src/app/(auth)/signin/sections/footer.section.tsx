"use client";

// Framework
import Link from "next/link";

// External
import { useFormikContext } from "formik";
import { motion } from "framer-motion";

// Components
import { MyButtonForm } from "@/components/forms/button.form";

export function FooterSection() {
  const formik = useFormikContext<ISignInForm>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-emerald-500 focus:ring-emerald-500 bg-transparent"
          />
          Remember me
        </label>
        <Link
          href="/forgot-password"
          className="text-xs text-emerald-500 font-bold hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <MyButtonForm
        type="submit"
        title="Sign In"
        className="w-full py-4 text-lg"
        loading={formik.isSubmitting}
        disabled={!formik.isValid}
      />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-emerald-500 font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </motion.div>
  );
}
