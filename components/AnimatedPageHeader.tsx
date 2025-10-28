// components/AnimatedPageHeader.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedPageHeaderProps {
  title: string;
  description: string;
  onAnimationComplete?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
} as const;

export default function AnimatedPageHeader({
  title,
  description,
  onAnimationComplete,
}: AnimatedPageHeaderProps) {
  return (
    <div className="mx-auto max-w-6xl rounded-3xl bg-mantis-cream/80 px-6 pt-16 pb-10 shadow-mantis-card backdrop-blur-sm md:pt-24 md:pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          // APLICARE TEMA: font-heading & mantis-green
          className="text-5xl md:text-6xl font-heading font-extrabold text-mantis-green-700 dark:text-mantis-green-400 mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-4xl px-4 font-sans text-lg text-mantis-bark/80 dark:text-gray-200"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}
