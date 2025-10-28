"use client";

import { useState } from "react";
import NavbarSite from "@/components/NavBar";
import ProgramEducational from "@/components/ProgramEducational";
import Footer from "@/components/Footer";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import { motion } from "framer-motion";

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
            className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardContainerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* NOTE: Cardurile folosesc deja componenta ProgramEducational, care va fi stilizată. */}

              {/* CARD 1 */}
              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P1: Conservarea Biodiversității"
                  description="Program axat pe studiul ecosistemelor locale, metode practice de conservare și monitorizarea faunei."
                  fullDescription="Participanții vor învăța tehnici de monitorizare a faunei, vor lua parte la expediții de teren în arii protejate și vor dezvolta proiecte de reîmpădurire. Ideal pentru viitorii biologi și ecologi."
                  imageSrc="/poze-mantis/2.JPG"
                  details={{
                    duration: "6 Săptămâni",
                    targetAudience: "Elevi de liceu",
                  }}
                />
              </motion.div>

              {/* CARD 2 */}
              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P2: Ecologia Urbană"
                  description="Descoperă natura ascunsă în orașul tău! Program destinat elevilor de gimnaziu, axat pe impactul uman asupra mediului construit."
                  fullDescription="Vom explora parcurile urbane, vom analiza calitatea aerului și a apei în zonele locuite și vom învăța cum să creăm spații verzi verticale și grădini comunitare."
                  imageSrc="/poze-mantis/4.JPG"
                  details={{
                    duration: "4 Săptămâni",
                    targetAudience: "Elevi de gimnaziu",
                  }}
                />
              </motion.div>

              {/* ... (restul cardurilor - doar structura este necesară aici) ... */}
              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P3: Vânătorii de Insecte"
                  description="O introducere distractivă în lumea entomologiei. Participanții de școală primară învață despre rolul vital al micilor viețuitoare."
                  fullDescription="Copiii vor învăța despre rolul vital al insectelor, vor construi hoteluri pentru albine și fluturi și vor folosi microscoape simple pentru a studia micro-organismele din sol."
                  imageSrc="/poze-mantis/30.JPG"
                  details={{
                    duration: "8 Sesiuni",
                    targetAudience: "Elevi de școală primară",
                  }}
                />
              </motion.div>

              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P4: Supraviețuire & Munte"
                  description="Excursii și ateliere practice de orientare, prim-ajutor și supraviețuire pe termen scurt în medii montane diverse."
                  fullDescription="Învață să navighezi fără GPS, să amenajezi un adăpost de urgență și să filtrezi apa. Program intensiv de dezvoltare a abilităților practice și a respectului pentru natură."
                  imageSrc="/poze-mantis/31.JPG"
                  details={{
                    duration: "3 Zile (Weekend)",
                    targetAudience: "Elevi de liceu și adulți",
                  }}
                />
              </motion.div>

              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P5: Explorări Litorale"
                  description="Studiul ecosistemelor de coastă, impactul poluării marine și proiecte de protecție a mediului în zona Mării Negre."
                  fullDescription="Vom colecta mostre de apă, vom face observații asupra vieții marine și vom participa la acțiuni de curățare a plajelor. Oportunitate de a înțelege fragilitatea ecosistemelor acvatice."
                  imageSrc="/poze-mantis/22.JPG"
                  details={{
                    duration: "5 Zile (Tabără)",
                    targetAudience: "Gimnaziu & Liceu",
                  }}
                />
              </motion.div>

              <motion.div variants={cardItemVariants}>
                <ProgramEducational
                  title="P6: Detectivii Pădurii"
                  description="Jocuri și activități interactive pentru cei mici, axate pe recunoașterea copacilor, a urmelor de animale și a sunetelor naturii."
                  fullDescription="O introducere jucăușă în silvicultură și cunoașterea naturii. Folosim povești și activități practice pentru a stimula curiozitatea copiilor."
                  imageSrc="/poze-mantis/11.JPG"
                  details={{
                    duration: "4 Sesiuni",
                    targetAudience: "Elevi de școală primară",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.png" />
    </>
  );
}
