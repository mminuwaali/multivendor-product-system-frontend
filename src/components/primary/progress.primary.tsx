"use client";
import { motion, Transition } from "framer-motion";

interface MyProgressPrimaryProps {
  label: string;
  color: string;
  pecentage: string;
  background: string;
  value: string | number;
  transition?: Transition;
}

export function MyProgressPrimary(props: MyProgressPrimaryProps) {
  return (
    <div className={"flex gap-2 flex-col"}>
      <p className={"flex items-center justify-between"}>
        <span>{props.label}</span>
        <span>{props.value}</span>
      </p>

      <span
        className={"h-1 flex justify-start rounded-full"}
        style={{ color: props.color, backgroundColor: props.background }}
      >
        <motion.i
          initial={{ width: "0%" }}
          transition={props.transition}
          className={"bg-current rounded-full"}
          animate={{ width: props.pecentage }}
        />
      </span>
    </div>
  );
}
