"use client";

// External
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MyGlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function MyGlassCard(props: MyGlassCardProps) {
  return (
    <motion.div
      {...props}
      className={`glass-effect rounded-3xl overflow-hidden ${
        props.noPadding ? "" : "p-6"
      } ${props.className ?? ""}`}
    >
      {props.children}
    </motion.div>
  );
}
