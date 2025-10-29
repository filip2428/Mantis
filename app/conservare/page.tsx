"use client";

import { useState } from "react";
import NavbarSite from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import ConservationProjectCard from "@/components/ConservationProjectCard"; // Import NOU
import { motion } from "framer-motion";

// =======================================================
// VARIANTE DE ANIMAȚIE (Scroll Reveal)
// =======================================================
// Preluăm variantele folosite în paginile anterioare pentru coerență
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
// DATELE PROIECTELOR DE CONSERVARE
// =======================================================
const CONSERVATION_PROJECTS = [
  {
    title: "Repopularea Râului cu Păstrăvi",
    short:
      "Proiect educațional și științific de repopulare a râului cu puiet de păstrăv, realizat împreună cu elevii.",
    full: "Elevii participă activ la etapele de aclimatizare și eliberare a puieților. Proiectul include sesiuni de hidrobiologie și monitorizare a calității apei, oferind o experiență practică unică de conservare. (Detaliile complete...)",
    galleryImages: [
      "/poze-conservare/repopulare-valea-zugau/9.JPG", // Imagine principală
      "/poze-conservare/repopulare-valea-zugau/5.JPG",
      "/poze-conservare/repopulare-valea-zugau/1.JPG",
      "/poze-conservare/repopulare-valea-zugau/11.JPG",
      "/poze-conservare/repopulare-valea-zugau/3.JPG",
      "/poze-conservare/repopulare-valea-zugau/2.JPG",
      "/poze-conservare/repopulare-valea-zugau/6.JPG",
      "/poze-conservare/repopulare-valea-zugau/4.JPG",
    ],
  },
  {
    title: "Reîmpădurirea Banatului",
    short:
      "Proiect pe termen lung axat pe restaurarea ecosistemelor forestiere degradate din zona Banatului prin plantări de specii native.",
    full: "În cadrul acestui proiect amplu, Asociația Mantis colaborează cu autoritățile locale și voluntari pentru a planta anual mii de puieți. Obiectivul principal este de a sprijini biodiversitatea locală și de a îmbunătăți calitatea solului și a aerului în regiune. Proiectul include sesiuni de educație comunitară pentru a asigura sustenabilitatea inițiativei.",
    galleryImages: [
      "/poze-conservare/pastrav-1.JPG", // Imagine principală
      "/poze-conservare/pastrav-2.JPG",
      "/poze-conservare/pastrav-3.JPG",
    ],
  },
  {
    title: "Monitorizarea Populației de Lilieci",
    short:
      "Studiu științific și acțiuni de protecție pentru coloniile de lilieci din peșterile din vestul României, vitale pentru ecosistem.",
    full: "Liliecii sunt indicatori importanți ai sănătății mediului. Proiectul nostru implică monitorizarea lor prin metode non-invazive, marcarea și instalarea de camere video pentru a înțelege mai bine migrația și hrana lor. De asemenea, educăm publicul cu privire la importanța acestor mamifere și la distrugerea miturilor dăunătoare.",
    galleryImages: [
      "/poze-conservare/pastrav-1.JPG", // Imagine principală
      "/poze-conservare/pastrav-2.JPG",
      "/poze-conservare/pastrav-3.JPG",
    ],
  },
  {
    title: "Zone Umide: Refugii pentru Amfibieni",
    short:
      "Inițiativă dedicată restaurării și creării de zone umede artificiale pentru a proteja populațiile de broaște, triton și salamandre amenințate.",
    full: "Amfibienii sunt extrem de vulnerabili la poluare și schimbările climatice. Prin crearea de noi habitate acvatice sigure și restaurarea celor existente, oferim acestor specii refugii vitale. Proiectul include ateliere practice de construcție de iazuri mici și cursuri de identificare a amfibienilor.",
    galleryImages: [
      "/poze-conservare/pastrav-1.JPG", // Imagine principală
      "/poze-conservare/pastrav-2.JPG",
      "/poze-conservare/pastrav-3.JPG",
    ],
  },
  {
    title: "Combaterea Speciilor Invazive",
    short:
      "Program de control al speciilor de plante invazive care amenință flora autohtonă în rezervațiile naturale locale, folosind metode ecologice.",
    full: "Speciile invazive sufocă ecosistemele locale. Proiectul se concentrează pe cartografierea și eliminarea manuală sau controlată a plantelor precum salcâmul. Voluntarii joacă un rol crucial în acest proces, fiind instruiți să identifice și să raporteze focarele de invazie. Este esențial pentru menținerea biodiversității.",
    galleryImages: [
      "/poze-conservare/pastrav-1.JPG", // Imagine principală
      "/poze-conservare/pastrav-2.JPG",
      "/poze-conservare/pastrav-3.JPG",
    ],
  },
];

export default function ConservarePage() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderAnimationComplete = () => {
    setIsHeaderLoaded(true);
  };

  return (
    <>
      <NavbarSite>
        {/* Antetul Animă */}
        <AnimatedPageHeader
          title="Viziunea Mantis: Conservare"
          description="Protejăm natura prin știință, educație și acțiune directă. Descoperiți proiectele noastre active de prezervare a biodiversității."
          onAnimationComplete={handleHeaderAnimationComplete}
        />

        {/* Conținutul Paginii (Apare Doar După Animația Antetului) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeaderLoaded ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="pb-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Secțiunea 1: Viziunea Mantis (Text cu Animație) */}
            <motion.section
              className="mx-auto mb-20 max-w-4xl rounded-3xl bg-white/80 p-8 text-center shadow-mantis-card "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-mantis-bark dark:text-white">
                Misiunea noastră pentru un viitor verde
              </h2>
              <motion.p
                className="text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Conservarea nu este doar despre protejarea mediului; este despre
                *investiția* în resursele esențiale care susțin viața. Mantis se
                angajează să utilizeze date științifice precise pentru a
                dezvolta și implementa soluții de conservare eficiente, de la
                restaurarea habitatelor la implicarea comunităților locale.
                Fiecare proiect este o promisiune pentru un mediu mai sănătos.
              </motion.p>
            </motion.section>

            {/* Secțiunea 2: Grid-ul de Proiecte (Carduri Modale) */}
            <motion.section
              className="mb-20 rounded-3xl bg-white/80 p-6 shadow-mantis-card sm:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <h2 className="mb-8 border-b border-mantis-green-100 pb-2 text-3xl font-bold text-mantis-bark dark:text-white">
                Proiecte Active
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CONSERVATION_PROJECTS.map((project) => (
                  <motion.div key={project.title} variants={itemVariants}>
                    <ConservationProjectCard
                      title={project.title}
                      shortDescription={project.short}
                      fullDescription={project.full}
                      galleryImages={project.galleryImages}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.png" />
    </>
  );
}
