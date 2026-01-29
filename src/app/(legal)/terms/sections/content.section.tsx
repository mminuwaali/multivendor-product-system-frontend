"use client";

// Framework

// External
import { motion } from "framer-motion";

// Components
import { EmptyMain } from "@/app/(main)/(default)/sections/empty.main";

export function ContentSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-8"
    >
      <EmptyMain
        title="Terms of Service"
        description="By using our platform, you agree to comply with our terms of service. The full terms of use will be available shortly."
        icon="fa-file-lines"
      />
    </motion.div>
  );
}
