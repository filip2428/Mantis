"use client";

import { useEffect, useState } from "react";
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

  const shouldLockScroll = isOpen || activeImageIndex !== null;

  useEffect(() => {
    if (!shouldLockScroll) {
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
  }, [shouldLockScroll]);

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
        className="h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-mantis-card transition-shadow hover:shadow-mantis-soft dark:bg-[#143921] flex flex-col border border-mantis-green-100/60"
      >
        <div className="relative h-56 w-full overflow-hidden bg-mantis-cream flex-shrink-0">
          <Image
            src={mainImageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-grow flex-col p-6">
          <h3 className="mb-3 text-2xl font-bold text-mantis-bark dark:text-white">
            {title}
          </h3>
          <p className="mb-4 flex-grow text-mantis-bark/80 dark:text-gray-200 line-clamp-3">
            {shortDescription}
          </p>
          <div className="mt-auto flex items-center text-mantis-green-600 font-semibold">
            <BookOpenText className="mr-1 h-5 w-5" />
            Citește Proiectul
          </div>
        </div>
      </motion.div>

      {/* MODALUL CU DETALII (și GALERIE PREVIZUALIZARE) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="modal-overlay-cons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            />
            {/* Fereastra Modalului */}
            <motion.div
              key="modal-window-cons"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 z-[210] flex flex-col overflow-hidden rounded-3xl bg-mantis-cream shadow-mantis-soft dark:bg-[#143921] md:inset-auto md:left-1/2 md:top-1/2 md:m-auto md:h-auto md:w-full md:max-h-[90vh] md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2"
            >
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-mantis-bark shadow-sm transition-colors hover:bg-white dark:bg-[#102a1b]/80 dark:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <h2 className="mb-4 text-3xl font-heading font-bold text-mantis-bark md:text-4xl dark:text-white">
                  {title}
                </h2>

                {/* Mini-Carusel de Previzualizare Orizontal */}
                {galleryImages.length > 0 && (
                  <div className="mb-8 space-y-4">
                    <h3 className="border-b pb-1 text-2xl font-semibold text-mantis-bark dark:text-gray-200">
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
                              className="group relative h-24 w-36 cursor-pointer overflow-hidden rounded-lg shadow-md flex-shrink-0"
                            >
                              <Image
                                src={src}
                                alt={`${title} imagine ${index + 1}`}
                                fill
                                sizes="30vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                                <span className="text-xs font-bold text-white">
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
                <div className="prose mt-8 max-w-none text-mantis-bark/80 prose-headings:text-mantis-bark dark:prose-invert">
                  <h3 className="border-b pb-1 text-2xl font-semibold text-mantis-bark dark:text-gray-200">
                    Detalii Proiect
                  </h3>
                  <p className="whitespace-pre-line text-lg">
                    {fullDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* LIGHTBOX / SLIDER FULL-SCREEN (Performant și Scalabil) */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            key="full-screen-slider-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[220] flex items-center justify-center bg-black/95"
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
                // lazy={"true"} // Deși eroarea TS a fost fixată prin eliminarea din module, l-am lăsat ca string pentru a evita warning-urile HTML/React
                className="w-full h-full"
                loop={true}
                // arrowkeys={true}
                // color="green"
              >
                {galleryImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative flex h-full w-full items-center justify-center">
                      <Image
                        src={src}
                        alt={`${title} imagine mărită ${index + 1}`}
                        fill
                        sizes="100vw"
                        className="h-full w-full max-h-full max-w-full object-contain"
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
