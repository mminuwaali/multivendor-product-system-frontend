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
        title="Your Cart is Empty"
        description="Looks like you haven't added anything to your cart yet. Explore our products and find something you love!"
        icon="fa-shopping-cart"
      />
    </motion.div>
  );
}
