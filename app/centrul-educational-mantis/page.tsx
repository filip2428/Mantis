"use client";

import { useState } from "react";
import NavbarSite from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import { motion } from "framer-motion";

// Datele de bază pentru locație (TE ROG SĂ LE ACTUALIZEZI)
const LOCATIE_MANTIS = {
  ADRESA: "Str. Principală nr 159, Șiștarovăț 317348, Județul Arad, România",
  COORDONATE_MAPS: "46.00656869444333, 21.745725519829737",
  LINK_GMAPS:
    "https://www.google.com/maps/place/Tabăra+al+7-lea+izvor/@46.0060157,21.7431765,17z/data=!3m1!4b1!4m6!3m5!1s0x474f79919f491e97:0x4acec63a133a2859!8m2!3d46.0060157!4d21.7457514!16s%2Fg%2F11v9p1r261?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
};

// =======================================================
// VARIANTE DE ANIMAȚIE (Scroll Reveal)
// =======================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CentrulEducationalMantisPage() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderAnimationComplete = () => {
    setIsHeaderLoaded(true);
  };

  return (
    <>
      <NavbarSite>
        <AnimatedPageHeader
          title="Centrul Educațional Mantis"
          description="Descoperiți locul unde pasiunea pentru natură se întâlnește cu știința. Un mediu liniștit, ideal pentru explorare și activități de teren."
          onAnimationComplete={handleHeaderAnimationComplete}
        />

        {/* NOU: Container care va face Fade-In după Antet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeaderLoaded ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          {/* Secțiunea 1: Galerie Foto (Vizual) */}
          <motion.section
            className="mb-12 rounded-3xl bg-white/80 p-6 shadow-mantis-card backdrop-blur-sm sm:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-3xl font-bold text-mantis-bark dark:text-white">
              Spațiul Nostru
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {/* Imaginile (Rămân neschimbate) */}
              <motion.div
                className="md:col-span-2 relative h-96 rounded-xl overflow-hidden shadow-lg"
                variants={itemVariants}
              >
                <Image
                  src="/poze-mantis/centru-1.jpg"
                  alt="Vedere generală Centru Mantis"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  <Image
                    src="/poze-mantis/centru-2.jpg"
                    alt="Interior Centru Mantis"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  <Image
                    src="/poze-mantis/centru-3.jpg"
                    alt="Curte Centru Mantis"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* NOUA SECȚIUNE: Detalii Facilități */}
          <motion.section
            className="mb-20 rounded-3xl bg-white/80 p-6 shadow-mantis-card backdrop-blur-sm sm:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-3xl font-bold text-mantis-bark dark:text-white">
              Facilități și Echipamente
            </h2>
            <motion.div
              className="space-y-4 text-lg text-mantis-bark/80 dark:text-gray-300 md:flex md:gap-12"
              variants={containerVariants}
            >
              <motion.p className="md:w-1/2" variants={itemVariants}>
                Centrul nostru este echipat pentru a susține atât activități
                teoretice, cât și practice. Oferim un spațiu modern, adaptat
                nevoilor de învățare ale grupurilor de elevi, punând accent pe
                interacțiune și explorare directă a naturii.
              </motion.p>

              <motion.div className="md:w-1/2" variants={itemVariants}>
                <h3 className="mb-2 text-xl font-semibold text-mantis-bark dark:text-white">
                  Echipamente cheie:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-mantis-green-700 marker:text-mantis-leaf-400 dark:text-mantis-leaf-300">
                  <li>
                    <span className="text-mantis-bark/80 dark:text-gray-300">
                      Sălă de clasă dotată cu **tehnologie interactivă** și
                      Wi-Fi.
                    </span>
                  </li>
                  <li>
                    <span className="text-mantis-bark/80 dark:text-gray-300">
                      Echipamente de **observație în natură** (binocluri, lupe,
                      seturi de colectare).
                    </span>
                  </li>
                  <li>
                    <span className="text-mantis-bark/80 dark:text-gray-300">
                      Acces la **laborator de microscopie** pentru studiul
                      detaliat al probelor.
                    </span>
                  </li>
                  <li>
                    <span className="text-mantis-bark/80 dark:text-gray-300">
                      Curte spațioasă și proximitatea pădurii pentru
                      **activități de teren**.
                    </span>
                  </li>
                  <li>
                    <span className="text-mantis-bark/80 dark:text-gray-300">
                      Spații de cazare și masă (la cerere).
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Secțiunea 3 (Fosta 2): Adresa și Harta (Interactivitate) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="rounded-3xl bg-white/80 p-6 shadow-mantis-card backdrop-blur-sm sm:p-10"
          >
            <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-3xl font-bold text-mantis-bark dark:text-white">
              Unde Ne Găsiți
            </h2>

            <motion.div
              className="flex flex-col md:flex-row gap-8"
              variants={containerVariants}
            >
              {/* Adresa (Item 1) */}
              <motion.div
                className="md:w-1/2 space-y-4"
                variants={itemVariants}
              >
                <h3 className="flex items-center text-2xl font-semibold text-mantis-green-700 dark:text-mantis-leaf-300">
                  <MapPin className="w-6 h-6 mr-2" />
                  Adresa Completă:
                </h3>
                <address className="not-italic text-lg text-mantis-bark/80 dark:text-gray-300">
                  {LOCATIE_MANTIS.ADRESA}
                </address>

                {/* Buton Google Maps */}
                <a
                  href={LOCATIE_MANTIS.LINK_GMAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-mantis-green-600 px-6 py-3 text-white shadow-mantis-soft transition duration-300 hover:bg-mantis-green-700"
                >
                  Navighează pe Google Maps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>

              {/* Harta Vizuală cu Redirecționare (Item 2) */}
              <motion.a
                href={LOCATIE_MANTIS.LINK_GMAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 relative h-80 rounded-xl overflow-hidden shadow-2xl transition transform hover:scale-[1.01] duration-300"
                variants={itemVariants}
              >
                <Image
                  src="/CentrulEducationalMantis.png"
                  alt="Hartă Google Maps către Centrul Mantis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="rounded-lg bg-mantis-green-600/80 p-4 text-xl font-bold text-white">
                    Click pentru Navigare
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.section>
        </motion.div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="/SiglaMantis+slogan.png" />
    </>
  );
}
