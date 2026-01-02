"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

type Props = {
  name: string;
  role?: string;
  bio: string;
  imageSrc: string; // ex: "/paul-hac.jpg" în /public
  imageAlt?: string;
  className?: string;
};

export default function Author({
  name,
  role = "Fondator & creatorul proiectului",
  bio,
  imageSrc,
  imageAlt = name,
  className,
}: Props) {
  return (
    <section className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 overflow-visible rounded-3xl 
       bg-white/50
         shadow-mantis-card  dark:bg-[#102a1b] dark:ring-[#1b3525] md:grid-cols-12 md:min-h-[40vh] mb-12 bg-gradient-to-r from-mantis-green/5 via-mantis-green/10 to-mantis-green/5 p-8 backdrop-blur-sm border border-mantis-green/20"
      >
        {/* Coloana stângă: POZA (ocupă stânga) */}
        <div className="relative md:col-span-5 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          {/* raport 4:5 pe mobil; pe desktop întinde pe înălțimea cardului */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full px-10 py-20">
            <DirectionAwareHover // 1. Forțezi wrapper-ul să umple părintele
              className="h-full w-full"
              imageUrl={imageSrc}
              imageAlt={imageAlt} // 2. (PRESUNUPUNERE) Folosești prop-ul corect pentru imaginea internă
              imageClassName={clsx(
                "h-full w-full object-cover" // Asigură-te că și imaginea umple spațiul
              )}
            >
              <p>Paul Hac</p>
            </DirectionAwareHover>
          </div>
        </div>

        {/* Coloana dreaptă: TEXT */}
        <div className="md:col-span-7 flex flex-col justify-center p-6 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-none">
          <h2 className="text-2xl font-extrabold tracking-tight text-mantis-bark dark:text-neutral-50">
            {name}
          </h2>
          <p className="mt-1 text-sm font-medium text-mantis-leaf-500 dark:text-mantis-leaf-300">
            {role}
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-mantis-bark/80 dark:text-neutral-300 whitespace-pre-line">
            {bio}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
