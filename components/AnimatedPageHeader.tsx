"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedPageHeaderProps {
  title: string;
  description: string;
  onAnimationComplete?: () => void;
}

// Variante de animație preluate de la Hero
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export default function AnimatedPageHeader({
  title,
  description,
  onAnimationComplete,
}: AnimatedPageHeaderProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
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
          className="text-5xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-4xl text-lg text-gray-700 dark:text-gray-300 px-4"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}
