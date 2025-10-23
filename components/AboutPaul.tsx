"use client";

import Image from "next/image";
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
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 overflow-hidden rounded-2xl bg-white p-0 shadow-sm ring-1 ring-neutral-200/60 dark:bg-neutral-950 dark:ring-neutral-800 md:grid-cols-12 min-h-[40vh]"
      >
        {/* Coloana stângă: POZA (ocupă stânga) */}
        <div className="relative md:col-span-5">
          {/* raport 4:5 pe mobil; pe desktop întinde pe înălțimea cardului */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
            {/* <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={false}
              className={clsx(
                "object-cover",
                "md:rounded-none", // muchie dreaptă comună
                "rounded-t-2xl md:rounded-l-2xl" // colțuri pe mobil & stânga
              )} 
            /> */}
            <DirectionAwareHover
              className={clsx(
                "object-cover",
                "md:rounded-none", // muchie dreaptă comună
                "rounded-t-2xl md:rounded-l-2xl" // colțuri pe mobil & stânga
              )}
              imageUrl="/paul-hac.jpeg"
            >
              <p>Paul Hac</p>
            </DirectionAwareHover>
          </div>
        </div>

        {/* Coloana dreaptă: TEXT */}
        <div className="md:col-span-7 flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            {name}
          </h2>
          <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            {role}
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {bio}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
