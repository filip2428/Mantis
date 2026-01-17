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
    title: "Îndepărtarea pragului de la Chizătău",
    short: "Pragul de la Chizătău, râul Bega, județul Timiș",
    full: (
      <div className="space-y-5">
        <p>
          În apropierea localității <strong>Chizătău</strong> din județului
          Timiș a funcționat o moară pe apă, care este dezafectată de mai mult
          timp. Pragul de captare de pe râul Bega a rămas în albie, fără să mai
          îndeplinească vreun rol efectiv, dar blochează libera deplasare a
          faunei acvatice și a sedimentelor.
        </p>

        <p>
          <strong>Asociația Mantis</strong>, împreună cu{" "}
          <strong>Fauna & Flora</strong> și{" "}
          <strong>Administrația Bazinală de Apă Banat </strong>
          colectează date și încearcă să atragă fonduri pentru reconstrucția
          ecologică a râului în acea zonă, prin îndepărtarea din albie a
          pragului scos din uz.
        </p>

        {/* <div className="bg-mantis-green-100/30 dark:bg-mantis-green-950/30 rounded-lg p-4 border-l-4 border-mantis-green-600"> */}
        <h1 className="font-semibold text-mantis-bark dark:text-gray-100 mb-2">
          Caracteristici ale Râului Bega
        </h1>
        <p className=" leading-relaxed">
          <strong>Râul Bega </strong>izvorăşte din Munţii Poiana Ruscă la o
          altitudine de 890 m, de sub Vârful Padeş. Suprafaţa bazinului de
          recepţie, care este de 4.470 km2, are o orientare generală est-vest,
          iar lungimea cursului de apă este de <strong>170 km</strong>. Lungimea
          reţelei hidrografice din bazinul hidrografic Bega este de 1.418 km iar
          densitatea acesteia este de 0,32 km/ km2. Râul Bega se varsă pe
          teritoriul Serbiei în râul Tisa.
        </p>
        {/* </div> */}

        <div>
          <h2 className="font-semibold text-mantis-bark dark:text-gray-100 mb-3">
            Fauna Acvatică Identificată
          </h2>
          <p className=" leading-relaxed">
            În sectorul de referință, pe râul Bega au fost identificate specii
            de pești precum mreana (<em>Barbus barbus</em>), porcușorul dunărean
            (<em>Gobio obtusirostris</em>), boarța (<em>Rhodeus amarus</em>),
            scobarul (<em>Chondrostoma nasus</em>), știuca (<em>Esox lucius</em>
            ), porcușorul comun (<em>Gobio gobio</em>), chișcarul (
            <em>Eudontomyzon danfordi</em>), zvârluga (<em>Cobitis taenia</em>)
            și altele.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-mantis-bark dark:text-gray-100 mb-3">
            Status
          </h2>
          <p className=" leading-relaxed">
            Colectare date. Atragere de fonduri
          </p>
        </div>

        {/* <div className="bg-mantis-bark/5 dark:bg-white/5 rounded-lg p-4 border-l-4 border-mantis-bark">
          <p className="text-sm font-semibold text-mantis-bark dark:text-gray-200">
            <strong>Status:</strong>{" "}
            <span className="text-mantis-green-600">Colectare date</span> •{" "}
            <span className="text-orange-600">Atragere de fonduri</span>
          </p>
        </div> */}
      </div>
    ),
    galleryImages: [
      "/poze-conservare/dam-removal/dam-removal-1.jpeg", // Imagine principală
      // "/poze-conservare/dam-removal/dam-removal-2.jpeg",
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
          title="Dam Removal. Râuri care să curgă liber"
          description="Conducem inițiativa de eliminare a barierelor inutile de pe râurile din România pentru a restabili ecosistemele acvatice și a promova biodiversitatea."
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
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              variants={containerVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-mantis-bark dark:text-white">
                Misiunea noastră pentru Râuri Libere
              </h2>
              <motion.p
                className="mb-4 text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Râurile din Europa sunt fragmentate de peste{" "}
                <strong>1,2 milioane de bariere</strong>, dar cel puțin 50.000
                dintre acestea sunt scoase din uz și nu mai își mai îndeplinesc
                rolul pentru care au fost construite. Păstrarea lor în albiile
                râurilor este păguboasă deoarece{" "}
                <strong>blochează migrarea peștilor</strong>, libera deplasare a
                sedimentelor și uneori pot reprezenta și un risc pentru
                siguranța populației.
              </motion.p>

              {/* Paragraful 2: Statistici Europene */}
              <motion.p
                className="mb-4 text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Mai multe țări europene au ales în ultimii ani să elimine aceste
                bariere învechite și abandonate pentru a reface conectivitatea
                longitudinală a râurilor. Spre exemplu, în anul 2024 au fost
                eliminate în total <strong>542 de bariere</strong>, în 23 de
                țări europene, în frunte cu Finlanda, Franța, Spania, Suedia,
                UK, Belgia, Elveția, Danemarca, Irlanda, Bosnia & Herțegovina și
                altele. Cele mai multe dintre barierele eliminate au fost tuburi
                de podeț sau praguri de joasă înălțime (65% dintre ele au avut
                sub 2 m înălțime).
              </motion.p>

              {/* Paragraful 3: Contextul în România și Legea */}
              <motion.p
                className="mb-4 text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                În țara noastră, curentul eliminării barierelor scoase din uz de
                pe râuri a prins contur în anul 2023, atunci când s-a organizat
                o conferință internațională cu acest subiect în București. Mai
                multe organizații non-guvernamentale și instituții de stat s-au
                arătat interesate să se implice în acest domeniu, așa că au
                urmat și alte evenimente care au dezvoltat această direcție
                (webinars, schimburi de experiență, cursuri de pregătire a
                specialiștilor). Un punct de cotitură a fost reprezentat de
                publicarea la nivelul Uniunii Europene, în august 2024, a{" "}
                <strong>
                  Legii pentru Restaurarea Naturii (Nature Restoration Law)
                </strong>
                . Acest regulament european obligatoriu prevede inclusiv{" "}
                <strong>restaurarea a 25.000 de km de râuri</strong> cu curgere
                liberă.
              </motion.p>

              {/* Paragraful 4: Implicarea voastră */}
              <motion.p
                className="text-xl leading-relaxed text-mantis-bark/80 dark:text-gray-300"
                variants={itemVariants}
              >
                Organizația noastră se implică activ în{" "}
                <strong>identificarea și eliminarea barierelor</strong>{" "}
                învechite și scoase din uz de pe râurile din România pentru a
                crește sau reface valoarea ecologică a acestora. Vorbim despre
                acele bariere care nu își mai îndeplinesc rolul pentru care au
                fost construite și blochează inutil râurile noastre. De
                asemenea, suntem activi în coagularea mișcării{" "}
                <strong>Dam Removal</strong> în România și sprijinirea
                instituțiilor abilitate să îndeplinească cerințele legislației
                europene și naționale în acest domeniu.
              </motion.p>
            </motion.section>

            {/* Secțiunea 2: Grid-ul de Proiecte (Carduri Modale) */}
            <motion.section
              className="mb-20 rounded-3xl bg-white/80 p-6 shadow-mantis-card sm:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "50px" }}
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
