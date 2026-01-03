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
    full: "Cine are păstrăv în apele de munte, are aur. Acest pește nu este doar un foarte valoros element de biodiversitate, ci reprezintă și un simbol și o mândrie locală. Râurile bogate în pește indică bunăstare și comunități înțelepte și pot contribui la dezvoltarea unui turism sănătos. În țara noastră se întâlnesc trei specii diferite de păstrăv: indigen, curcubeu și  fântânel, însă doar păstrăvul indigen se găsește în mod nativ în apele noastre și este cel mai potrivit pentru repopulări. Așadar, ne propunem să populăm cât mai multe ape de munte cu păstrăv indigen. Înainte de fiecare acțiune de populare, mergem la școlile din zona respectivă și le prezentăm copiilor informații interesante despre păstrăv și îi încurajăm să respecte și să protejeze această podoabă locală. Copiii ne însoțesc apoi în teren și ne ajută să eliberăm puietul de păstrăv în apă. Credem că în acest fel se creează o legătură strânsă între pești și copii, care îi responsabilizează pe aceștia din urmă să aibă grijă de natură.",
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
    title: "Râuri care să curgă liber ",
    short:
      "Redăm libertatea râurilor din România: Eliminăm barierele inutile pentru un ecosistem viu.",
    full: "Râurile din Europa sunt fragmentate de peste 1,2 milioane de bariere, dar cel puțin 50.000 dintre acestea sunt scoase din uz și nu mai își mai îndeplinesc rolul pentru care au fost construite. Păstrarea lor în albiile râurilor este păguboasă deoarece blochează migrarea peștilor, libera deplasare a sedimentelor și uneori pot reprezenta și un risc pentru siguranța populației. Mai multe țări europene au ales în ultimii ani să elimine aceste bariere învechite și abandonate pentru a reface conectivitatea longitudinală a râurilor. Spre exemplu, în anul 2024 au fost eliminate în total 542 de bariere, în 23 de țări europene, în frunte cu Finlanda, Franța, Spania, Suedia, UK, Belgia, Elveția, Danemarca, Irlanda, Bosnia & Herțegovina  și altele. Cele mai multe dintre barierele eliminate au fost tuburi de podeț sau praguri de joasă înălțime (65% dintre ele au avut sub 2 m înălțime). În țara noastră, curentul eliminării barierelor scoase din uz de pe râuri a prins contur în anul 2023, atunci când s-a organizat o conferință internațională cu acest subiect în București. Mai multe organizații non-guvernamentale și instituții de stat s-au arătat interesate să se implice în acest domeniu, așa că au urmat și alte evenimente care au dezvoltat această direcție (webinars, schimburi de experiență, cursuri de pregătire a specialiștilor). Un punct de cotitură a fost reprezentat de publicarea la nivelul Uniunii Europene, în august 2024, a Legii pentru Restaurarea Naturii (Nature Restoration Law). Acest regulament european obligatoriu prevede inclusiv restaurarea a 25.000 de km de râuri cu curgere liberă. Organizația noastră se implică activ în identificarea și eliminarea barierelor învechite și scoase din uz de pe râurile din România pentru a crește sau reface valoarea ecologică a acestora. Vorbim despre acele bariere care nu își mai îndeplinesc rolul pentru care au fost construite și blochează inutil râurile noastre. De asemenea, suntem activi în coagularea mișcării Dam Removal în România și sprijinirea instituțiilor abilitate să îndeplinească cerințele legislației europene și naționale în acest domeniu.",
    galleryImages: [
      "/poze-conservare/dam-removal/dam-removal-1.jpeg", // Imagine principală
      "/poze-conservare/dam-removal/dam-removal-2.jpeg",
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
          title="Viziunea Mantis: Proiecte de Conservare și Reconstrucție Ecologică"
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
      <Footer brandName="Mantis" logoSrc="/mantis-text.png" />
    </>
  );
}
