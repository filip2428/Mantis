// components/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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

  return (
    <section
      id="acasa"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#eef6f2,_#ffffff_55%)] py-10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-16 top-24 hidden h-72 w-72 rounded-full bg-mantis-leaf-100/70 blur-3xl md:block" />
        <div className="absolute -right-24 top-0 hidden h-[420px] w-[420px] rounded-full bg-mantis-green-200/40 blur-3xl md:block" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[120%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(110,179,130,0.22),transparent_65%)]" />
        <svg
          className="absolute bottom-[-120px] left-1/2 h-[420px] w-[960px] -translate-x-1/2 text-mantis-green-100/45"
          viewBox="0 0 960 540"
          fill="none"
        >
          <path
            d="M0 280C160 160 320 80 480 80C640 80 800 160 960 280V540H0V280Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center px-6 pt-20 pb-24 md:pt-28 md:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            className="text-balance text-4xl font-heading font-extrabold tracking-tight text-mantis-green-700 md:text-6xl"
          >
            Asociația Mantis
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base font-sans text-mantis-bark/80 md:text-lg"
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
                className="mt-5 rounded-full border-transparent bg-mantis-green-600 px-10 py-3 text-white shadow-mantis-soft hover:bg-mantis-green-700"
              >
                Vezi programele
              </InteractiveHoverButton>
            </a>
            <Link href="/#despre" className="mt-5">
              <InteractiveHoverButton className="rounded-full border-mantis-green-100 bg-white/80 px-10 py-3 text-mantis-green-700 shadow-mantis-card hover:border-mantis-green-200 hover:bg-white">
                Descoperă cine suntem
              </InteractiveHoverButton>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={item}
          className="pointer-events-none mt-16 flex flex-col items-center text-mantis-green-600"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-mantis-green-500/80">
            Derulează pentru a explora
          </span>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="mt-3 rounded-full border border-mantis-green-200/70 bg-white/70 p-2 text-mantis-green-600 shadow-mantis-card"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
