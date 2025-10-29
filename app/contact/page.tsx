// app/contact/page.tsx
"use client";

import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import NavbarSite from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";

// ... (Animații și DATE_CONTACT) ...
const containerVariants = {
  /* ... */
};
const itemVariants = {
  /* ... */
};
const DATE_CONTACT = {
  NUME: "Paul Hac",
  ROL: "Fondator & Coordonator Programe",
  EMAIL: "contact@mantis.ro",
  TELEFON: "+40 7xy zzz xxx",
  ADRESA_POSTALA: "Str. Principală nr 159, Șiștarovăț, Arad",
  POZA_URL: "/paul-hac.jpeg",
};

export default function ContactPage() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const searchParams = useSearchParams();
  const programFromQuery = searchParams.get("program");
  const defaultPrefill = useMemo(() => {
    if (!programFromQuery) {
      return "";
    }

    return `Bună, aș dori să rezerv programul "${programFromQuery}" și să discutăm despre pașii următori.`;
  }, [programFromQuery]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: defaultPrefill,
  });

  useEffect(() => {
    if (!programFromQuery) {
      return;
    }

    setFormData((prev) => {
      if (prev.message.trim().length > 0) {
        return prev;
      }

      return { ...prev, message: defaultPrefill };
    });
  }, [programFromQuery, defaultPrefill]);

  const handleChange = (
    field: "name" | "email" | "phone" | "organization" | "message"
  ) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Secțiunea 1: Fondatorul și Contact Direct */}
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
                    înscrieți o clasă la un program sau să propuneți o
                    colaborare, sunt aici pentru a vă oferi rapid toate
                    detaliile necesare. Suntem dedicați educației și
                    conservării.”
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
              variants={itemVariants}
              className="mx-auto max-w-3xl pt-16"
            >
              <h2 className="mb-6 border-b border-mantis-green-100 pb-2 text-center text-3xl font-heading font-bold text-mantis-bark dark:text-white">
                Trimite un Mesaj Rapid
              </h2>
              <form
                action={"https://formspree.io/f/xanlqbee"}
                className="space-y-6 rounded-3xl bg-white/90 p-8 font-sans shadow-mantis-card backdrop-blur-sm dark:bg-[#143921]"
                method="POST"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-1 text-left text-sm font-medium text-mantis-bark dark:text-gray-200">
                    Nume complet
                    <input
                      type="text"
                      name="Nume complet"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      required
                      className="w-full rounded-xl border border-mantis-green-100/70 bg-white px-4 py-2.5 text-base text-mantis-bark shadow-sm transition placeholder:text-mantis-bark/40 focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:border-[#1b3525] dark:bg-[#102a1b] dark:text-white dark:placeholder:text-gray-400"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-left text-sm font-medium text-mantis-bark dark:text-gray-200">
                    Adresă de email
                    <input
                      type="email"
                      name="Email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      required
                      className="w-full rounded-xl border border-mantis-green-100/70 bg-white px-4 py-2.5 text-base text-mantis-bark shadow-sm transition placeholder:text-mantis-bark/40 focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:border-[#1b3525] dark:bg-[#102a1b] dark:text-white dark:placeholder:text-gray-400"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-left text-sm font-medium text-mantis-bark dark:text-gray-200">
                    Telefon de contact
                    <input
                      type="tel"
                      name="Telefon"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="w-full rounded-xl border border-mantis-green-100/70 bg-white px-4 py-2.5 text-base text-mantis-bark shadow-sm transition placeholder:text-mantis-bark/40 focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:border-[#1b3525] dark:bg-[#102a1b] dark:text-white dark:placeholder:text-gray-400"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-left text-sm font-medium text-mantis-bark dark:text-gray-200">
                    Școala / Organizația
                    <input
                      type="text"
                      name="Organizație"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={handleChange("organization")}
                      className="w-full rounded-xl border border-mantis-green-100/70 bg-white px-4 py-2.5 text-base text-mantis-bark shadow-sm transition placeholder:text-mantis-bark/40 focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:border-[#1b3525] dark:bg-[#102a1b] dark:text-white dark:placeholder:text-gray-400"
                    />
                  </label>
                </div>

                {programFromQuery && (
                  <div className="rounded-2xl border border-mantis-green-100/80 bg-mantis-cream/60 px-4 py-3 text-sm text-mantis-bark dark:border-[#1b3525] dark:bg-[#102a1b]/60 dark:text-gray-200">
                    <strong className="font-semibold text-mantis-green-700 dark:text-mantis-green-300">
                      Program selectat:
                    </strong>{" "}
                    {programFromQuery}. Am precompletat mesajul tău pentru a economisi timp.
                  </div>
                )}

                <label className="flex flex-col gap-2 text-left text-sm font-medium text-mantis-bark dark:text-gray-200">
                  Mesajul tău
                  <textarea
                    name="Mesaj"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="Spune-ne cum te putem ajuta"
                    required
                    className="w-full rounded-2xl border border-mantis-green-100/70 bg-white px-4 py-3 text-base text-mantis-bark shadow-sm transition placeholder:text-mantis-bark/40 focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:border-[#1b3525] dark:bg-[#102a1b] dark:text-white dark:placeholder:text-gray-400"
                  />
                </label>

                {programFromQuery && (
                  <input type="hidden" name="Program Mantis" value={programFromQuery} />
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-mantis-green-600 px-6 py-3 text-base font-semibold text-white shadow-mantis-soft transition hover:bg-mantis-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mantis-green-500"
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
