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
        title="Support Center"
        description="Have a question or need assistance? Our support team is available 24/7 to help you with anything you need."
        icon="fa-headset"
      />
    </motion.div>
  );
}
