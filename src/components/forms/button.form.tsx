"use client";

import React from "react";
import { ButtonProps } from "antd";
import { motion, AnimatePresence } from "framer-motion";

interface MyButtonFormProps extends Omit<
  ButtonProps,
  "type" | "title" | "variant"
> {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  title?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  variant?: "solid" | "outline" | "text" | "danger";
}

const variants = {
  solid:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
  outline: "border-2 border-primary text-primary hover:bg-primary-light",
  text: "bg-transparent text-primary hover:bg-primary-light/50",
  danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
};

export function MyButtonForm(props: MyButtonFormProps) {
  const variantCls =
    variants[(props.variant ?? "solid") as keyof typeof variants] ||
    variants.solid;

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      disabled={props.disabled || props.loading}
      className={`
        relative overflow-hidden
        flex items-center justify-center gap-2 
        px-6 py-2.5 rounded-xl
        text-sm font-bold tracking-wide
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale
        ${variantCls}
        ${props.className ?? ""}
      `}
    >
      <AnimatePresence mode="wait">
        {props.loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-circle-notch fa-spin text-lg" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            {props.leftIcon && (
              <span className="flex items-center">{props.leftIcon}</span>
            )}
            {props.title || props.children}
            {props.rightIcon && (
              <span className="flex items-center">{props.rightIcon}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
