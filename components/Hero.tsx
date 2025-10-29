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

  const handleScrollCue = () => {
    if (typeof document === "undefined") {
      return;
    }

    const textReveal = document.getElementById("hero-scroll-stop");
    if (textReveal) {
      textReveal.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const aboutSection = document.getElementById("despre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="acasa"
      className="relative overflow-hidden pb-32 pt-20 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(213,234,217,0.35),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3eddc] via-[#f6f1e4] to-[#f3eddc]" />
        <div className="absolute -left-24 -top-20 hidden h-[420px] w-[420px] rounded-full bg-mantis-green-200/35 blur-3xl md:block" />
        <div className="absolute -right-32 top-32 hidden h-[380px] w-[380px] rounded-full bg-mantis-leaf-100/45 blur-3xl lg:block" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-180px] h-[280px] bg-gradient-to-b from-transparent via-[#f6f1e4] to-[#f6f1e4]" />
      </div>
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center px-6 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            className="text-balance text-4xl font-heading font-extrabold tracking-tight text-mantis-bark md:text-6xl"
          >
            Asociația Mantis
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base font-sans text-mantis-bark/85 md:text-lg"
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
              <InteractiveHoverButton className="mt-5 rounded-full border-transparent bg-mantis-green-600 px-10 py-3 text-white shadow-mantis-soft hover:bg-mantis-green-700">
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
          className="mt-16 flex flex-col items-center text-mantis-green-600"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-mantis-green-500/80">
            Derulează pentru a explora
          </span>
          <motion.button
            type="button"
            aria-label="Derulează către secțiunea următoare"
            onClick={handleScrollCue}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-mantis-green-200/70 bg-mantis-cream/80 p-2 text-mantis-green-600 shadow-mantis-card outline-none transition-colors hover:border-mantis-green-300 focus-visible:ring-2 focus-visible:ring-mantis-green-400"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
