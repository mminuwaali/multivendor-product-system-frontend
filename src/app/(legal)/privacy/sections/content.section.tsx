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
        title="Privacy Policy"
        description="We are committed to protecting your personal information and your right to privacy. Our full policy is currently being drafted."
        icon="fa-shield-halved"
      />
    </motion.div>
  );
}
