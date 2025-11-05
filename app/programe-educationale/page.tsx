"use client";

import { useState } from "react";
import NavbarSite from "@/components/NavBar";
import ProgramEducational from "@/components/ProgramEducational";
import Footer from "@/components/Footer";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import { motion } from "framer-motion";
import Link from "next/link";

// =======================================================
// VARIANTE DE ANIMAȚIE (Scroll Reveal pentru Carduri)
// =======================================================

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProgrameEducaționale() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const contactCtaMessage =
    "Bună ziua! Sunt interesat(ă) de programele educaționale Mantis și aș dori mai multe detalii despre înscriere și colaborare.";

  const handleHeaderAnimationComplete = () => {
    setIsHeaderLoaded(true);
  };

  return (
    <>
      <NavbarSite>
        {/* Antetul Animă */}
        <AnimatedPageHeader
          title="Programe Educaționale"
          description="Aici vei găsi informații despre programele educaționale oferite de Mantis. Explorează opțiunile noastre pentru a descoperi noi orizonturi!"
          onAnimationComplete={handleHeaderAnimationComplete}
        />

        {/* Conținutul Paginii (Apare Doar După Animația Antetului) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeaderLoaded ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="pb-20"
        >
          {/* Secțiunea de Carduri: Grid responsiv */}
          <motion.div
            className="mx-auto mt-8 max-w-7xl rounded-3xl bg-white/80 p-6 shadow-mantis-card  sm:p-10"
            // className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardContainerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P1: Biodivers - Exploratorii lumii vii"
                  description="Program axat pe studiul ecosistemelor locale, metode practice de conservare și monitorizarea faunei."
                  fullDescription="Participanții vor învăța tehnici de monitorizare a faunei, vor lua parte la expediții de teren în arii protejate și vor dezvolta proiecte de reîmpădurire. Ideal pentru viitorii biologi și ecologi."
                  imageSrc="/logo-programe/P1.png"
                  details={{
                    duration: "1/2/3 zile",
                    targetAudience: "Elevi de gimnaziu și liceu",
                  }}
                  contactMessage="Bună ziua! Aș dori să rezerv programul „P1: Biodivers - Exploratorii lumii vii” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
                />
              </motion.div>

              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P2: Viața în inele - Tainele copacilor"
                  description="Program dedicat înțelegerii rolului copacilor în ecosisteme, tehnici de plantare și îngrijire a pădurilor."
                  fullDescription="Participanții vor învăța despre importanța copacilor, vor participa la sesiuni practice de plantare și vor dezvolta proiecte de conservare a pădurilor. Ideal pentru pasionații de natură și viitorii silvicultori."
                  imageSrc="/logo-programe/P2.png"
                  details={{
                    duration: "1/2/3 zile",
                    targetAudience: "Elevi de gimnaziu și liceu",
                  }}
                  contactMessage="Bună ziua! Aș dori să rezerv programul „P2: Viața în inele - Tainele copacilor” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
                />
              </motion.div>

              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P3: Drumul sevei și al sângelui"
                  description="Program care explorează conexiunea dintre plante și animale, rolul lor în ecosisteme și metode de conservare integrate."
                  fullDescription="Participanții vor învăța despre interdependența dintre plante și animale, vor lua parte la activități de teren și vor dezvolta proiecte de conservare holistică. Ideal pentru cei interesați de ecologie și biologie."
                  imageSrc="/logo-programe/P3.png"
                  details={{
                    duration: "1/2/3 zile",
                    targetAudience: "Elevi de gimnaziu și liceu",
                  }}
                  contactMessage="Bună ziua! Aș dori să rezerv programul „P3: Drumul sevei și al sângelui” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-12 max-w-4xl rounded-3xl bg-mantis-green-50/80 p-10 text-center shadow-mantis-card"
          >
            <h2 className="text-3xl font-heading font-bold text-mantis-bark mb-4">
              Pregătit să colaborăm?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-mantis-bark/80">
              Spune-ne ce program te interesează și îți oferim rapid toate
              detaliile despre calendar, logistică și pașii de înscriere.
            </p>
            <Link
              href={{
                pathname: "/contact",
                query: { message: contactCtaMessage },
              }}
              className="inline-flex items-center justify-center rounded-xl bg-mantis-green-600 px-8 py-3 text-lg font-semibold text-white shadow-mantis-soft transition hover:bg-mantis-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mantis-green-500"
            >
              Contactează-ne acum
            </Link>
          </motion.div>
        </motion.div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="/SiglaMantis+slogan.png" />
    </>
  );
}
