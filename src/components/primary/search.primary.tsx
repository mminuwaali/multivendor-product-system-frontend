"use client";

import React from "react";
import { motion } from "framer-motion";

type VariantType = Record<
  NonNullable<MySearchPrimaryProps["variant"]>,
  { input: string; container: string }
>;

interface MySearchPrimaryProps {
  value: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  classNameInput?: string;
  classNameContainer?: string;
  onChangeValue: (val: string) => void;
  variant?: "solid" | "outline" | "text";
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const variants: VariantType = {
  solid: {
    container: "bg-gray-100",
    input: "placeholder:text-sm placeholder:text-gray-400",
  },
  outline: {
    input: "text-blue-main placeholder-blue-300",
    container: "border-2 border-gray-100 bg-transparent",
  },
  text: {
    container: "bg-transparent",
    input: "text-blue-dark placeholder-gray-500",
  },
};

export function MySearchPrimary(props: MySearchPrimaryProps) {
  const cls = variants[props.variant ?? "solid"];

  return (
    <motion.div
      className={`px-2 flex gap-4 rounded-md transition-all duration-300 ${cls.container} ${props.classNameContainer}`}
    >
      <motion.input
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        disabled={props.disabled || props.loading}
        onChange={(e) => props.onChangeValue?.(e.target.value)}
        className={`
          flex-1 outline-none py-2
          disabled:cursor-not-allowed
          bg-transparent
          ${cls.input}
          ${props.classNameInput ?? ""}
        `}
      />

      <div className="flex items-center">
        {props.loading ? (
          <i className="fa-solid fa-spinner fa-spin text-gray-400" />
        ) : (
          props.icon
        )}
      </div>
    </motion.div>
  );
}
