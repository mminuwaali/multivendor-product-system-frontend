"use client";

// Framework
import React from "react";

// External
import { message } from "antd";
import { Formik } from "formik";
import { motion } from "framer-motion";

// Hooks
import { useSignUp } from "@/hooks/requests/auth.hook";

// Components
import { MyGlassCard } from "@/components/shared/glass.card";

// Sections
import { FieldSection } from "./sections/field.section";
import { FooterSection } from "./sections/footer.section";
import { HeaderSection } from "./sections/header.section";

// Constants
import { SignupSchema } from "@/constants/schema";

export default function SignupPage() {
  const signUpMutation = useSignUp();

  const initialValues = React.useMemo<ISignUpForm>(
    () => ({
      email: "",
      phone: "",
      role: "user",
      full_name: "",
      password: "",
    }),
    [],
  );

  async function onSubmit(values: ISignUpForm) {
    try {
      await signUpMutation.mutateAsync(values);
      message.success("Account created successfully!");
    } catch {
      // Error handled by axios interceptor
    }
  }

  return (
    <MyGlassCard className="w-full max-w-md p-8">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      >
        {(formikProps) => (
          <motion.form
            onSubmit={formikProps.handleSubmit}
            className="flex flex-col gap-4"
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
