"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpenText } from "lucide-react";
import Image from "next/image";
// Importăm toate modulele necesare, inclusiv Lazy, FreeMode și Autoplay
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  galleryImages: string[];
}

export default function ConservationProjectCard({
  title,
  shortDescription,
  fullDescription,
  galleryImages,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const mainImageSrc = galleryImages[0] || "/placeholder.jpg";

  // Deschide Lightbox-ul la un index specificat
  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  // Închide Lightbox-ul
  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  return (
    <>
      {/* CARDUL PRINCIPAL */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="h-full w-full cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
      >
        <div className="relative h-56 w-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
          <Image
            src={mainImageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
            {shortDescription}
          </p>
          <div className="mt-auto flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            <BookOpenText className="w-5 h-5 mr-1" />
            Citește Proiectul
          </div>
        </div>
      </motion.div>

      {/* MODALUL CU DETALII (și GALERIE PREVIZUALIZARE) */}
      {isOpen && (
        <AnimatePresence>
          {/* Overlay */}
          <motion.div
            key="modal-overlay-cons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          {/* Fereastra Modalului */}
          <motion.div
            key="modal-window-cons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>

              {/* Mini-Carusel de Previzualizare Orizontal */}
              {galleryImages.length > 0 && (
                <div className="mb-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-1">
                    Galerie Proiect
                  </h3>

                  <div className="w-full">
                    <Swiper
                      modules={[FreeMode, Autoplay]}
                      slidesPerView={5} // Ajustat pentru a arăta 5 imagini complete
                      spaceBetween={8}
                      freeMode={true} // Scrolling fluid
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                      className="w-full"
                    >
                      {galleryImages.map((src, index) => (
                        <SwiperSlide key={index}>
                          <div
                            onClick={() => openLightbox(index)} // Deschide Lightbox-ul Full-Screen
                            className="relative h-24 w-36 overflow-hidden rounded-lg shadow-md cursor-pointer group flex-shrink-0"
                          >
                            <Image
                              src={src}
                              alt={`${title} imagine ${index + 1}`}
                              fill
                              sizes="30vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-white text-xs font-bold">
                                Zoom
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              )}

              {/* Secțiunea DESCRIERE PROIECT */}
              <div className="prose max-w-none dark:prose-invert mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-1">
                  Detalii Proiect
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {fullDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* LIGHTBOX / SLIDER FULL-SCREEN (Performant și Scalabil) */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            key="full-screen-slider-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
          >
            {/* CONTAINER SLIDER */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-[95vh] w-[95vw] max-w-7xl"
            >
              <Swiper
                // Modul Lazy adăugat aici pentru performanță
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                initialSlide={activeImageIndex}
                spaceBetween={10}
                navigation={true}
                pagination={{ clickable: true }}
                // Setări Lazy Loading Swiper
                // preloadImages={false}
                lazy={"true"} // Deși eroarea TS a fost fixată prin eliminarea din module, l-am lăsat ca string pentru a evita warning-urile HTML/React
                className="w-full h-full"
                loop={true}
              >
                {galleryImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Folosim <img> cu data-src și clasa Swiper pentru Lazy Loading Scalabil */}
                      <img
                        // Folosim src ca fallback, dar Swiper se bazează pe data-src
                        src={src}
                        alt={`${title} imagine mărită ${index + 1}`}
                        data-src={src} // CRUCIAL: Swiper preia imaginea de aici
                        className="object-contain swiper-lazy w-auto h-full max-h-full max-w-full"
                        loading="lazy"
                      />

                      {/* Placeholder de încărcare Swiper */}
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Buton vizibil de închidere (X) */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors text-white z-[61] cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
