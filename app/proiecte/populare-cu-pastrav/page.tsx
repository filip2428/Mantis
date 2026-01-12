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
    title: "Repopulare Valea Zugăului cu Păstrăv",
    short:
      "Repopularea Văii Zugăului cu păstrăv, împreună cu elevii din zonă. Dezna, Județul Arad",
    full: (
      <div className="space-y-5">
        <p>
          În anul 2024, împreună cu Direcția Silvică Arad, am început o acțiune
          de populare cu păstrăv indigen a Văii Zugăului, în apropiere de
          localitatea Dezna, județul Arad.
        </p>

        <p>
          După ce au participat la o lecție despre pești, în general, și
          păstrăv, în particular, copiii de la Școala Gimnazială Dezna au
          participat la acțiunea de populare și au ajutat la transportul și
          eliberarea puietului în apă.
        </p>

        <h2 className="font-semibold text-mantis-bark dark:text-gray-100 mb-3">
          Receptivitate și Implicare Comunității
        </h2>
        <p className="leading-relaxed">
          Proiectul a fost extrem de bine primit și susținut de comunitatea
          locală și de către presa regională.
        </p>

        <h2 className="font-semibold text-mantis-bark dark:text-gray-100 mb-3">
          Viitor
        </h2>
        <p className="leading-relaxed">
          Intenționăm să continuăm acțiunile de populare din această zonă.
        </p>

        <div>
          <h2 className="font-semibold text-mantis-bark dark:text-gray-100 mb-3">
            Status
          </h2>
          <p className=" leading-relaxed">Inițiat. În derulare</p>
        </div>
      </div>
    ),
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
          title="Repopularea Râurilor cu Păstrăv"
          description="Conducem inițiativa de repopulare a râurilor din România cu păstrăv"
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
              className="mx-auto mb-20 max-w-4xl rounded-3xl bg-white/80 p-8 text-center shadow-mantis-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-mantis-bark dark:text-white">
                Misiunea noastră pentru râuri pline de viață
              </h2>

              {/* Paragraful 1: Valoarea (De ce contează?) */}
              <motion.p
                className="mb-4 text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Cine <strong>are păstrăv</strong> în apele de munte,{" "}
                <strong>are aur</strong>. Acest pește nu este doar un foarte
                valoros element de biodiversitate, ci reprezintă și un{" "}
                <strong>simbol și o mândrie locală</strong>. Râurile bogate în
                pește indică bunăstare și comunități înțelepte și pot contribui
                la dezvoltarea unui <strong>turism sănătos</strong>.
              </motion.p>

              {/* Paragraful 2: Soluția (Ce facem noi?) */}
              <motion.p
                className="mb-4 text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                În țara noastră se întâlnesc trei specii diferite de păstrăv:
                indigen, curcubeu și fântânel, însă{" "}
                <strong>doar păstrăvul indigen</strong> se găsește în mod nativ
                în apele noastre și este cel mai potrivit pentru repopulări.
                Așadar, ne propunem să{" "}
                <strong>populăm cât mai multe ape</strong> de munte cu păstrăv
                indigen.
              </motion.p>

              {/* Paragraful 3: Metoda (Cum implicăm comunitatea?) */}
              <motion.p
                className="text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Înainte de fiecare acțiune de populare, mergem la școlile din
                zona respectivă și le <strong>prezentăm copiilor</strong>{" "}
                informații interesante despre păstrăv și îi încurajăm să
                respecte și să protejeze această podoabă locală. Copiii ne
                însoțesc apoi în teren și ne ajută să{" "}
                <strong>eliberăm puietul</strong> de păstrăv în apă. Credem că
                în acest fel se creează o{" "}
                <strong>legătură strânsă între pești și copii</strong>, care îi
                responsabilizează pe aceștia din urmă să aibă grijă de natură.
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
      <Footer brandName="Mantis" />
    </>
  );
}
