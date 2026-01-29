"use client";

// Framework

// External
import { useFormikContext } from "formik";
import { motion } from "framer-motion";

// Components
import { MyInputForm } from "@/components/forms/input.form";

export function FieldSection() {
  const formik = useFormikContext<ISignInForm>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-6"
    >
      <MyInputForm
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <MyInputForm
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </motion.div>
  );
}
