"use client";

import { useState } from "react";
import NavbarSite from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // Pictograme de contact

// =======================================================
// VARIANTE DE ANIMAȚIE (Scroll Reveal)
// =======================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// =======================================================
// DATELE FONDATORULUI ȘI CONTACTUL
// =======================================================
const DATE_CONTACT = {
  NUME: "Paul Hac", // Actualizează numele
  ROL: "Fondator & Coordonator Programe",
  EMAIL: "contact@mantis.ro", // Actualizează email-ul
  TELEFON: "+40 7xy zzz xxx", // Actualizează numărul
  ADRESA_POSTALA: "Str. Principală nr 159, Șiștarovăț, Arad",
  POZA_URL: "/paul-hac.jpeg", // Calea către poza prietenoasă
};

export default function ContactPage() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderAnimationComplete = () => {
    setIsHeaderLoaded(true);
  };

  return (
    <>
      <NavbarSite>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Secțiunea 1: Fondatorul și Contact Direct */}
            <motion.section
              className="mb-20 pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2">
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
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500/50">
                    <Image
                      src={DATE_CONTACT.POZA_URL}
                      alt={`Poza ${DATE_CONTACT.NUME}`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                      priority // Prioritate pe această poză
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {DATE_CONTACT.NUME}
                  </h3>
                  <p className="text-md text-indigo-600 dark:text-indigo-400">
                    {DATE_CONTACT.ROL}
                  </p>
                </motion.div>

                {/* Coloana 2: Detalii Contact și Mesaj */}
                <motion.div
                  className="md:w-2/3 space-y-6 pt-4"
                  variants={itemVariants}
                >
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {/* Mesaj personalizat, ideal de la fondator */}
                    "Ne face plăcere să auzim de la voi! Fie că doriți să
                    înscrieți o clasă la un program sau să propuneți o
                    colaborare, sunt aici pentru a vă oferi rapid toate
                    detaliile necesare. Suntem dedicați educației și
                    conservării."
                  </p>

                  <div className="space-y-3 pt-4">
                    <div className="flex items-center text-lg text-gray-800 dark:text-gray-200">
                      <Mail className="w-5 h-5 mr-3 text-indigo-600" />
                      Email:{" "}
                      <a
                        href={`mailto:${DATE_CONTACT.EMAIL}`}
                        className="ml-2 font-semibold hover:text-indigo-700"
                      >
                        {DATE_CONTACT.EMAIL}
                      </a>
                    </div>
                    <div className="flex items-center text-lg text-gray-800 dark:text-gray-200">
                      <Phone className="w-5 h-5 mr-3 text-indigo-600" />
                      Telefon:{" "}
                      <a
                        href={`tel:${DATE_CONTACT.TELEFON.replace(/\s/g, "")}`}
                        className="ml-2 font-semibold hover:text-indigo-700"
                      >
                        {DATE_CONTACT.TELEFON}
                      </a>
                    </div>
                    <div className="flex items-start text-lg text-gray-800 dark:text-gray-200">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-600 flex-shrink-0" />
                      Adresă Corespondență:{" "}
                      <span className="ml-2">
                        {DATE_CONTACT.ADRESA_POSTALA}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Secțiunea 2: Formular Rapid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={itemVariants} // Fără staggered, doar itemVariants
              className="max-w-3xl mx-auto pt-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 text-center">
                Trimite un Mesaj Rapid
              </h2>
              <form
                action={"https://formspree.io/f/xanlqbee"}
                className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                method="POST"
              >
                {/* Nume */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nume Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Adresa Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
                {/* Mesaj */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mesajul Tău
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                {/* Buton Trimite */}
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                >
                  Trimite Cererea
                </button>
              </form>
            </motion.section>
          </div>
        </motion.div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.png" />
    </>
  );
}
