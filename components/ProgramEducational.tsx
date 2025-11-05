"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image"; // NOU: Componenta Next.js Image pentru performanță
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  fullDescription: string;
  imageSrc?: string;
  details?: {
    duration?: string;
    targetAudience?: string;
    objectives?: string[];
    activities?: string[];
  };
  disableModal?: boolean;
  contactMessage?: string;
  contactCtaLabel?: string;
}

export default function ProgramCard({
  title,
  description,
  fullDescription,
  imageSrc,
  details,
  disableModal = false,
  contactMessage,
  contactCtaLabel = "Rezervă programul",
}: ProgramCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || disableModal) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen, disableModal]);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        // DACA disableModal este TRUE, nu facem nimic la onClick,
        // ne bazăm pe <a> tag-ul din SwiperSlide pentru redirecționare.
        onClick={() => {
          if (!disableModal) {
            setIsOpen(true);
          }
        }}
        // Am adăugat h-full pentru a se potrivi în Grid/Slider
        className="h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-mantis-card transition-shadow hover:shadow-mantis-soft dark:bg-[#143921] flex flex-col border border-mantis-green-100/60"
      >
        {imageSrc && (
          <div className="relative h-48 w-full overflow-hidden bg-mantis-cream flex-shrink-0 flex items-center justify-center">
            {" "}
            <Image
              src={imageSrc}
              alt={title} // fill // <--- SE ȘTERGE ACEASTĂ PROPRIETATE
              width={192} // Latimea maximă dorită (ex: 192px = 48 * 4)
              height={192} // Inaltimea maximă dorită
              sizes="(max-width: 768px) 100vw, 33vw" // Păstrează sizes
              className="max-w-[100%] max-h-100%] object-contain" // <-- Modificat: max-w, max-h, object-contain
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-grow flex-col p-6">
          <h3 className="mb-3 text-2xl font-bold text-mantis-bark dark:text-white">
            {title}
          </h3>
          <p className="flex-grow text-mantis-bark/80 dark:text-gray-200 line-clamp-3">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-mantis-green-600">
              Află mai multe →
            </span>
            {contactMessage && (
              <Link
                href={{
                  pathname: "/contact",
                  query: { message: contactMessage },
                }}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg bg-mantis-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-mantis-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mantis-green-500"
              >
                {contactCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Optimizare: Modalul este randat NUMAI când isOpen este TRUE */}
      {isOpen && !disableModal && (
        <AnimatePresence>
          {/* Overlay (fundalul negru) */}
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          />
          {/* Fereastra Modalului */}
          <motion.div
            key="modal-window"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 z-[210] flex flex-col overflow-hidden rounded-3xl bg-mantis-cream shadow-mantis-soft dark:bg-[#143921] md:inset-auto md:left-1/2 md:top-1/2 md:m-auto md:h-auto md:w-full md:max-h-[90vh] md:max-w-3xl md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="relative flex-shrink-0">
              {imageSrc && (
                <div className="h-64 w-full overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt={title} // fill // <--- SE ȘTERGE ACEASTĂ PROPRIETATE
                    width={256} // Latimea maximă dorită (ex: 256px = 64 * 4)
                    height={256} // Inaltimea maximă dorită
                    sizes="50vw"
                    className="max-w-[120%] max-h-[120%] object-contain" // <-- Modificat: max-w, max-h, object-contain
                    priority
                  />
                </div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-mantis-bark shadow-sm transition-colors hover:bg-white dark:bg-[#102a1b]/80 dark:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <h2 className="mb-4 text-3xl font-heading font-bold text-mantis-bark md:text-4xl dark:text-white">
                {title}
              </h2>
              {/* Restul conținutului modalului (fullDescription, details) rămâne neschimbat */}
              <div className="prose max-w-none text-mantis-bark/80 prose-headings:text-mantis-bark dark:prose-invert">
                <p className="mb-6 text-lg">{fullDescription}</p>
                {/* Secțiunea de Detalii */}
                {details && (
                  <div className="space-y-6 mt-8">
                    {/* ... (Durata, Publicul Țintă, Obiectivele, Activitățile) ... */}

                    {details.duration && (
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-mantis-bark dark:text-white">
                          Durată
                        </h3>
                        <p>{details.duration}</p>
                      </div>
                    )}
                    {details.targetAudience && (
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-mantis-bark dark:text-white">
                          Publicul țintă
                        </h3>
                        <p>{details.targetAudience}</p>
                      </div>
                    )}
                    {details.objectives && details.objectives.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-mantis-bark dark:text-white">
                          Obiective
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {details.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {details.activities && details.activities.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-mantis-bark dark:text-white">
                          Activități
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {details.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
