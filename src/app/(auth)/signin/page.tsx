"use client";

// Framework
import React from "react";

// External
import { message } from "antd";
import { Formik } from "formik";
import { motion } from "framer-motion";

// Hooks
import { useSignIn } from "@/hooks/requests/auth.hook";

// Components
import { MyGlassCard } from "@/components/shared/glass.card";

// Sections
import { FieldSection } from "./sections/field.section";
import { FooterSection } from "./sections/footer.section";
import { HeaderSection } from "./sections/header.section";

// Constants
import { SigninSchema } from "@/constants/schema";

export default function SigninPage() {
  const signInMutation = useSignIn();

  const initialValues = React.useMemo<ISignInForm>(
    () => ({
      email: "",
      password: "",
      roles: ["user"],
    }),
    [],
  );

  async function onSubmit(values: ISignInForm) {
    try {
      await signInMutation.mutateAsync(values);
      message.success("Signed in successfully!");
    } catch {
      // Error handled by axios interceptor
    }
  }

  return (
    <MyGlassCard className="w-full max-w-md p-8">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={SigninSchema}
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
