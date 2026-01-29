"use client";

// Framework
import React from "react";

// External
import { Formik } from "formik";
import { motion } from "framer-motion";

// Components
import { MyGlassCard } from "@/components/shared/glass.card";

// Sections
import { FieldSection } from "./sections/field.section";
import { HeaderSection } from "./sections/header.section";
import { FooterSection } from "./sections/footer.section";

// Constants
import { ForgotPasswordSchema } from "@/constants/schema";

export default function ForgotPasswordPage() {
  const initialValues = React.useMemo(
    () => ({
      email: "",
    }),
    [],
  );

  const onSubmit = (values: { email: string }) => {
    console.log("ForgotPassword Values:", values);
  };

  return (
    <MyGlassCard className="w-full max-w-md p-8">
      <Formik
        initialValues={initialValues}
        validationSchema={ForgotPasswordSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <motion.form
            className="flex flex-col gap-4"
            onSubmit={formikProps.handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeaderSection />
            <FieldSection />
            <FooterSection />
          </motion.form>
        )}
      </Formik>
    </MyGlassCard>
  );
}
