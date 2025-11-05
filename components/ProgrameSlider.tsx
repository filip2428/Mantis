"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProgramEducational from "@/components/ProgramEducational";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation"; // <-- 1. Importă useRouter

export default function ProgrameSlider() {
  const router = useRouter(); // <-- 2. Inițializează routerul

  // Funcție utilitară pentru redirecționare, dacă vrei să o refolosești
  const handleRedirect = (path: string) => {
    // Navigarea se face aici
    router.push(path);
  };
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <Swiper
        spaceBetween={24} // Spațiu ușor redus între carduri
        slidesPerView={1.2} // Începem cu 1.2 slide-uri vizibile pe telefoane
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Adăugat pentru UX
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} // CLASE NOI: Am schimbat înălțimea fixă la h-auto
        className="w-full h-auto py-12 mySwiper swiper-nav-white" // Setări Responsive (pentru a afișa mai multe carduri)
        breakpoints={{
          768: {
            // ecrane medii (tablete)
            slidesPerView: 2.2, // Arată 2 carduri întregi + o mică parte din al treilea
            spaceBetween: 30,
          },
          1024: {
            // ecrane mari (desktop)
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          <ProgramEducational
            title="P1: Biodivers - Exploratorii lumii vii"
            description="Program axat pe studiul ecosistemelor locale, metode practice de conservare și monitorizarea faunei."
            fullDescription="Participanții vor învăța tehnici de monitorizare a faunei, vor lua parte la expediții de teren în arii protejate și vor dezvolta proiecte de reîmpădurire. Ideal pentru viitorii biologi și ecologi."
            imageSrc="/logo-programe/P1-copy.png"
            details={{
              duration: "1/2/3 zile",
              targetAudience: "Elevi de gimnaziu și liceu",
            }}
            // contactMessage="Bună ziua! Aș dori să rezerv programul „P1: Biodivers - Exploratorii lumii vii” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          <ProgramEducational
            title="P2: Viața în inele - Tainele copacilor"
            description="Program dedicat înțelegerii rolului copacilor în ecosisteme, tehnici de plantare și îngrijire a pădurilor."
            fullDescription="Participanții vor învăța despre importanța copacilor, vor participa la sesiuni practice de plantare și vor dezvolta proiecte de conservare a pădurilor. Ideal pentru pasionații de natură și viitorii silvicultori."
            imageSrc="/logo-programe/P2-copy.png"
            details={{
              duration: "1/2/3 zile",
              targetAudience: "Elevi de gimnaziu și liceu",
            }}
            // contactMessage="Bună ziua! Aș dori să rezerv programul „P2: Viața în inele - Tainele copacilor” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          <ProgramEducational
            title="P3: Drumul sevei și al sângelui - Circulația care susține viața"
            description="Program care explorează conexiunea dintre plante și animale, rolul lor în ecosisteme și metode de conservare integrate."
            fullDescription="Participanții vor învăța despre interdependența dintre plante și animale, vor lua parte la activități de teren și vor dezvolta proiecte de conservare holistică. Ideal pentru cei interesați de ecologie și biologie. "
            imageSrc="/logo-programe/P3-copy.png"
            details={{
              duration: "1/2/3 zile",
              targetAudience: "Elevi de gimnaziu și liceu",
            }}
            // contactMessage="Bună ziua! Aș dori să rezerv programul „P3: Drumul sevei și al sângelui” pentru un grup de elevi. Mă puteți ajuta cu disponibilitatea pentru următoarea perioadă de (X) zile și cu pașii de înscriere?"
            disableModal={true}
          />
        </SwiperSlide>

        {/* Vă recomand să adăugați mai multe slide-uri pentru a vedea efectul de carusel */}
      </Swiper>
    </div>
  );
}
