"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import Author from "./AboutPaul";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  return (
    <>
      {/* HEADER CU TITLU */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="mx-auto max-w-4xl px-4 py-16 md:py-24 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-mantis-bark mb-6"
        >
          Fă cunoștință cu <span className="text-mantis-green-600">Mantis</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-mantis-bark/70 max-w-2xl mx-auto leading-relaxed"
        >
          Descoperă organizația care dedică pasiunea ei conservării naturii și
          educației pentru generații viitoare
        </motion.p>
      </motion.section>

      <div className="my-20 max-w-4xl px-4 md:mx-auto">
        <div>
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-mantis-green/5 via-mantis-green/10 to-mantis-green/5 p-8 backdrop-blur-sm border border-mantis-green/20">
            <p className="text-center text-lg leading-relaxed text-mantis-bark ">
              Asociația Mantis este o organizație non-guvernamentală care se
              implică în conservarea biodiversității, reconstrucția ecologică și
              promovarea educației pentru natură. Este formată din specialiști
              în domeniul științelor naturale și voluntari care își doresc râuri
              libere și pline de viață, un mediu mai sănătos și generații tinere
              implicate în conservare.
            </p>
          </div>

          <h1 className="mb-10 text-center text-2xl font-bold text-mantis-bark">
            Domeniile noastre prioritare:
          </h1>

          <ul className="space-y-5 text-left">
            <Link href="/proiecte/dam-removal">
              <li className="group relative flex gap-6 rounded-xl bg-gradient-to-r from-mantis-green/5 to-transparent p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-mantis-green/15 hover:to-mantis-green/5 hover:shadow-lg border border-mantis-green/10 hover:border-mantis-green/30 cursor-pointer">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-mantis-green to-mantis-green/80 text-base font-bold text-mantis-cream shadow-md group-hover:shadow-lg transition-all duration-300">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-mantis-bark text-base mb-2">
                    Râuri care să curgă liber (Dam Removal)
                  </h3>
                  <p className="leading-relaxed text-mantis-bark/75">
                    Suntem implicați în eliminarea de pe apele curgătoare a
                    barierelor scoase din uz, care nu își mai îndeplinesc rolul
                    pentru care au fost construite și care blochează deplasarea
                    liberă a peștilor și a sedimentelor
                  </p>
                </div>
              </li>
            </Link>

            <Link href="/proiecte/populare-cu-pastrav">
              <li className="group relative flex gap-6 rounded-xl bg-gradient-to-r from-mantis-green/5 to-transparent p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-mantis-green/15 hover:to-mantis-green/5 hover:shadow-lg border border-mantis-green/10 hover:border-mantis-green/30 cursor-pointer">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-mantis-green to-mantis-green/80 text-base font-bold text-mantis-cream shadow-md group-hover:shadow-lg transition-all duration-300">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-mantis-bark text-base mb-2">
                    Păstrăv în apele de munte
                  </h3>
                  <p className="leading-relaxed text-mantis-bark/75">
                    Inițiem proiecte de populare cu păstrăv a apelor de munte
                    deoarece noi credem că, în felul acesta, zonele respective
                    devin mai bogate – spiritual și economic. Implicăm copiii
                    din comunitățile locale în acțiunile de eliberare a
                    puietului și îi pregătim astfel să devină viitorii prieteni
                    ai naturii
                  </p>
                </div>
              </li>
            </Link>

            <Link href="/programe-educationale">
              <li className="group relative flex gap-6 rounded-xl bg-gradient-to-r from-mantis-green/5 to-transparent p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-mantis-green/15 hover:to-mantis-green/5 hover:shadow-lg border border-mantis-green/10 hover:border-mantis-green/30 cursor-pointer">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-mantis-green to-mantis-green/80 text-base font-bold text-mantis-cream shadow-md group-hover:shadow-lg transition-all duration-300">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-mantis-bark text-base mb-2">
                    Educație pentru natură
                  </h3>
                  <p className="leading-relaxed text-mantis-bark/75">
                    Organizăm programe educaționale în natură pentru elevi, prin
                    care construim experiențe ce motivează, transformă și
                    inspiră. Centrul de Educație Mantis din localitatea
                    Șiștarovăț ne ajută să ne pliem bine și pe nevoile de
                    programe dedicate Săptămânii Verzi și Școlii Altfel
                  </p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* <div className="container mx-auto rounded-3xl  p-8 pt-12 shadow-mantis-card backdrop-blur-sm border-8 border-mantis-green bg-white/50"> */}
      {/* <h1 className="mb-4 text-center text-3xl font-bold text-mantis-cream">
          {`Fă cunoștință cu ${"\t"}`}
          <Highlight className="text-mantis-bark">Asociația Mantis</Highlight>
        </h1>  */}
      <Author
        name="Paul Hac"
        // role="Fondator & creatorul proiectului"
        imageSrc="/paul-hac-photo.jpeg"
        bio={`Paul Hac este președintele Asociației Mantis și inițiatorul acestui proiect. Are o experiență de peste 20 de ani în managementul ariilor protejate și conservarea biodiversității. A fost implicat sau a inițiats proiecte de combatere a speciilor invazive de plante, prevenirea traficului cu specii protejate, refacerea conectivității longitudinale a râurilor și altele. ${"\n\n"}Un loc aparte în pregătirea profesională îl poartă educația pentru natură, fiind interesat să transmită generațiilor tinere pasiunea pentru cunoașterea naturii. În cadrul studiilor doctorale a cercetat ecologia galelor ce se formează pe plantele lemnoase în ecosistemele forestiere. A lucrat timp de 12 ani pentru Administrația Parcului Natural Lunca Mureșului (din care 7 ani în calitate de director de parc) și mai bine de 8 ani ca expert ecolog pentru organizația Fauna & Flora International. Este trainer în cadrul Centrului de Excelență pentru Natură ProPark. ${"\n\n"}În timpul liber, îi place să sculpteze în lemn și să forjeze.`}
        className="mt-12 px-4"
        //   imageWidth={140} // mai mic
        //   imageRounded="xl" // sau "full" pentru avatar rotund
      />

      {/* <p className="mb-10 text-center text-sm text-zinc-500">
          For demo purpose we have kept the position as{" "}
          <span className="font-medium">Sticky</span>. Keep in mind that this
          component is <span className="font-medium">fixed</span> and will not
          move when scrolling.
        </p> */}
      {/* </div> */}
    </>
  );
}
