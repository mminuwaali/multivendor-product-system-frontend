"use client";

import { Spin } from "antd";
import { motion, Variants, AnimatePresence } from "framer-motion";

interface MyLoaderPrimaryProps extends React.PropsWithChildren {
  message?: string;
  loading?: boolean;
  className?: string;
}

export function MyLoaderPrimary(props: MyLoaderPrimaryProps) {
  // Split the message into characters
  const messageChars = props.message?.split("") ?? [];

  // Variants for parent to stagger children
  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for each character
  const charVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {props.loading ? (
        <motion.section
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`z-20 flex gap-2 py-10 flex-col items-center justify-center text-slate-800 ${props.className}`}
        >
          <Spin size="large" />

          <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="flex gap-[2px] text-center md:text-xl font-black variant-small-caps"
          >
            {messageChars.map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>
      ) : (
        props.children
      )}
    </AnimatePresence>
  );
}
