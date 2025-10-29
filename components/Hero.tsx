// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.12 },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  } as const;

  const scrollTimeoutRef = useRef<number | null>(null);

  const handleArrowClick = useCallback(() => {
    const pasiuneSection = document.getElementById("pasiune-pentru-cunoastere");
    const aboutSection = document.getElementById("about-us");

    if (!pasiuneSection && !aboutSection) {
      return;
    }

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    pasiuneSection?.scrollIntoView({ behavior: "smooth", block: "center" });

    scrollTimeoutRef.current = window.setTimeout(() => {
      aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mantis-cream via-mantis-cream/80 to-white py-10">
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
                className="mt-5 rounded-full border-transparent px-10 py-3 text-mantis-green-700 shadow-mantis-soft hover:bg-mantis-green-700"
              >
                Vezi programele
              </InteractiveHoverButton>
            </a>
          </motion.div>
          <motion.button
            type="button"
            variants={item}
            onClick={handleArrowClick}
            className="mt-12 flex flex-col items-center text-mantis-green-700"
            aria-label="Derulează pentru a descoperi secțiunile următoare"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-mantis-bark/70">
              Derulează
            </span>
            <motion.span
              aria-hidden="true"
              className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-mantis-green-500/60 bg-white/80 shadow-mantis-soft"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="h-5 w-5 text-mantis-green-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v14m0 0l-5-5m5 5l5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
