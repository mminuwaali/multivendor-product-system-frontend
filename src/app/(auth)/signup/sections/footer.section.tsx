"use client";

// Framework
import Link from "next/link";

// External
import { useFormikContext } from "formik";
import { motion } from "framer-motion";

// Components
import { MyButtonForm } from "@/components/forms/button.form";

export function FooterSection() {
  const formik = useFormikContext<ISignUpInitForm>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-6"
    >
      <MyButtonForm
        type="submit"
        title="Create Account"
        className="w-full py-4 text-lg"
        loading={formik.isSubmitting}
        disabled={!formik.isValid}
      />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-emerald-500 font-bold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </motion.div>
  );
}
