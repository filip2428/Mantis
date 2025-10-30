"use client";

import { Suspense, useState } from "react";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./contact-form"; // Importăm formularul (client)

// --- Variantele de animație ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Datele Statice ---
const DATE_CONTACT = {
  NUME: "Paul Hac",
  ROL: "Fondator & Coordonator Programe",
  EMAIL: "contact@mantis.ro",
  TELEFON: "+40 7xy zzz xxx",
  ADRESA_POSTALA: "Str. Principală nr 159, Șiștarovăț, Arad",
  POZA_URL: "/paul-hac.jpeg",
};

// --- Componenta de Fallback pentru Suspense ---
function FormularLoading() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center rounded-3xl bg-white/90 p-8 shadow-mantis-card backdrop-blur-sm dark:bg-[#143921]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mantis-green-600"></div>
    </div>
  );
}

// --- Corpul Paginii (Client Component) ---
export default function ContactBody() {
  // Am readus logica pentru animația header-ului aici,
  // deoarece acum suntem într-o componentă client.
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const handleHeaderAnimationComplete = () => {
    setIsHeaderLoaded(true);
  };

  return (
    <>
      <AnimatedPageHeader
        title="Contact & Colaborare"
        description="Vă stăm la dispoziție pentru întrebări, parteneriate sau detalii suplimentare despre programele noastre. Ne puteți contacta direct sau folosi formularul de mai jos."
        onAnimationComplete={handleHeaderAnimationComplete}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeaderLoaded ? 1 : 0 }}
        transition={{ duration: 0.7 }}
        className="pb-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Secțiunea 1: Fondatorul și Contact Direct (Client) */}
          <motion.section
            className="mb-20 rounded-3xl bg-white/80 p-8 shadow-mantis-card backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-3xl font-heading font-bold text-mantis-bark dark:text-white">
              Echipa Mantis vă răspunde
            </h2>
            <motion.div
              className="flex flex-col md:flex-row gap-12 items-start"
              variants={containerVariants}
            >
              {/* Coloana 1: Poza și Rolul */}
              <motion.div
                className="md:w-1/3 flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className="relative w-80 h-80 mb-4 rounded-full overflow-hidden shadow-xl border-4 border-mantis-green-500/50">
                  <Image
                    src={DATE_CONTACT.POZA_URL}
                    alt={`Poza ${DATE_CONTACT.NUME}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  {DATE_CONTACT.NUME}
                </h3>
                <p className="text-md text-mantis-green-600 dark:text-mantis-green-400">
                  {DATE_CONTACT.ROL}
                </p>
              </motion.div>
              {/* Coloana 2: Detalii Contact și Mesaj */}
              <motion.div
                className="md:w-2/3 space-y-6 pt-4 font-sans"
                variants={itemVariants}
              >
                <p className="text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300">
                  „Ne face plăcere să auzim de la voi! Fie că doriți să
                  înscrieți o clasă la un program sau să propuneți o colaborare,
                  sunt aici pentru a vă oferi rapid toate detaliile necesare.
                  Suntem dedicați educației și conservării.”
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center text-lg text-mantis-bark dark:text-gray-200">
                    <Mail className="mr-3 h-5 w-5 text-mantis-green-600" />
                    Email:{" "}
                    <a
                      href={`mailto:${DATE_CONTACT.EMAIL}`}
                      className="ml-2 font-semibold text-mantis-green-700 hover:text-mantis-green-600"
                    >
                      {DATE_CONTACT.EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center text-lg text-mantis-bark dark:text-gray-200">
                    <Phone className="mr-3 h-5 w-5 text-mantis-green-600" />
                    Telefon:{" "}
                    <a
                      href={`tel:${DATE_CONTACT.TELEFON.replace(/\s/g, "")}`}
                      className="ml-2 font-semibold text-mantis-green-700 hover:text-mantis-green-600"
                    >
                      {DATE_CONTACT.TELEFON}
                    </a>
                  </div>
                  <div className="flex items-start text-lg text-mantis-bark dark:text-gray-200">
                    <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-mantis-green-600" />
                    Adresă Corespondență:{" "}
                    <span className="ml-2">{DATE_CONTACT.ADRESA_POSTALA}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Secțiunea 2: Formular Rapid (Client, încărcat dinamic) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="mx-auto max-w-3xl pt-16"
          >
            <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-center text-3xl font-heading font-bold text-mantis-bark dark:text-white">
              Trimite un Mesaj Rapid
            </h2>
            <Suspense fallback={<FormularLoading />}>
              <ContactForm />
            </Suspense>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}
