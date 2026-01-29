"use client";

// Framework

// External
import { useFormikContext } from "formik";
import { motion } from "framer-motion";

// Components
import { MyInputForm } from "@/components/forms/input.form";

export function FieldSection() {
  const formik = useFormikContext<ISignUpInitForm>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-6"
    >
      <MyInputForm
        name="full_name"
        label="Full Name"
        placeholder="John Doe"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <MyInputForm
        name="email"
        label="Email Address"
        placeholder="john@example.com"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <MyInputForm
        name="phone"
        label="Phone Number"
        placeholder="+1 234 567 890"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </motion.div>
  );
}
