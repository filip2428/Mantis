"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Hero() {
  // variante de animație (compatibile cu TS)
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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl"
          >
            Asociația Mantis
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-10 max-w-2xl text-base text-neutral-600 md:text-lg"
          >
            Cultivăm curiozitatea și caracterul prin experiențe reale în natură
            — programe pentru profesori și elevi care transformă lecțiile în
            descoperiri.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {/* <a
              href="#programe"
              className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Vezi programele
            </a> */}
            <a href="/programe-educationale">
              <InteractiveHoverButton className="mt-5">
                Vezi programele
              </InteractiveHoverButton>
            </a>
            {/* <a
              href="#contact"
              className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Cere ofertă
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
