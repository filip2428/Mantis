// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.52, delayChildren: 0.5 },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, // easeOut curve
    },
  } as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mantis-cream via-mantis-cream/80 to-white py-10">
      <div className="absolute -left-32 -top-32 hidden size-[420px] rounded-full bg-mantis-leaf-100 blur-3xl md:block" />
      <div className="absolute -right-24 top-20 hidden size-[260px] rounded-full bg-mantis-leaf-200 blur-3xl md:block" />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            // APLICARE TEMA: font-heading
            className="text-4xl font-heading font-extrabold tracking-tight text-mantis-green-700 md:text-6xl"
          >
            Asociația Mantis
          </motion.h1>

          <motion.p
            variants={item}
            // APLICARE TEMA: font-sans
            className="mt-8 max-w-2xl text-base font-sans text-mantis-bark/80 md:text-lg"
          >
            Cultivăm curiozitatea și caracterul prin experiențe reale în natură
            — programe pentru profesori și elevi care transformă lecțiile în
            descoperiri.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a href="/programe-educationale">
              <InteractiveHoverButton
                // APLICARE TEMA: Culoarea de acțiune (Verde Mantis)
                className="mt-5 rounded-full border-transparent bg-mantis-green-600 px-10 py-3 text-white shadow-mantis-soft hover:bg-mantis-green-700"
              >
                Vezi programele
              </InteractiveHoverButton>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
