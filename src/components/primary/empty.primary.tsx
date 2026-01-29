"use client";
import React from "react";
import { motion } from "framer-motion";

interface MyEmptyPrimaryProps extends React.PropsWithChildren {
  title?: string;
  isEmpty?: boolean;
  className?: string;
  icon?: React.ReactNode; // Added prop for icon
}

export function MyEmptyPrimary(props: MyEmptyPrimaryProps) {
  if (!props.isEmpty) return props.children;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`py-10 flex gap-2 flex-col items-center justify-center rounded-md bg-gray-100 ${props.className}`}
    >
      {/* Use Font Awesome icon */}
      {props.icon ? (
        props.icon
      ) : (
        <i className="fa-solid fa-ban text-4xl text-gray-400" /> 
      )}
      <span className="text-gray-600">{props.title}</span>
    </motion.div>
  );
}