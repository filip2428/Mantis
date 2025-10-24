"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image"; // NOU: Componenta Next.js Image pentru performanță

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
}

export default function ProgramCard({
  title,
  description,
  fullDescription,
  imageSrc,
  details,
  disableModal = false,
}: ProgramCardProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        className="h-full w-full cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
      >
        {imageSrc && (
          <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              // Proprietățile fill și sizes sunt esențiale pentru <Image>
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-cover"
              loading="lazy" // Lazy loading activat pentru cardurile din Grid
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">
            {description}
          </p>
          {/* Textul butonului rămâne, dar acțiunea e dată de onClick-ul general */}
          <span className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer">
            Află mai multe →
          </span>
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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          {/* Fereastra Modalului */}
          <motion.div
            key="modal-window"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="relative flex-shrink-0">
              {imageSrc && (
                <div className="h-64 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="50vw"
                    className="w-full h-full object-cover"
                    priority // Prioritate mare pentru imaginea din modal
                  />
                </div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>
              {/* Restul conținutului modalului (fullDescription, details) rămâne neschimbat */}
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {fullDescription}
                </p>
                {/* Secțiunea de Detalii */}
                {details && (
                  <div className="space-y-6 mt-8">
                    {/* ... (Durata, Publicul Țintă, Obiectivele, Activitățile) ... */}

                    {details.duration && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Durată
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {details.duration}
                        </p>
                      </div>
                    )}
                    {details.targetAudience && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Publicul țintă
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {details.targetAudience}
                        </p>
                      </div>
                    )}
                    {details.objectives && details.objectives.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Obiective
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {details.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {details.activities && details.activities.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Activități
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
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
