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
            title="P1: Conservarea Biodiversității"
            description="Program axat pe studiul ecosistemelor locale, metode practice de conservare și monitorizarea faunei."
            fullDescription="Participanții vor învăța tehnici de monitorizare a faunei, vor lua parte la expediții de teren în arii protejate și vor dezvolta proiecte de reîmpădurire. Ideal pentru viitorii biologi și ecologi."
            imageSrc="/poze-mantis/2.JPG"
            details={{
              duration: "6 Săptămâni",
              targetAudience: "Elevi de liceu",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          <ProgramEducational
            title="P2: Ecologia Urbană"
            description="Descoperă natura ascunsă în orașul tău! Program destinat elevilor de gimnaziu, axat pe impactul uman asupra mediului construit."
            fullDescription="Vom explora parcurile urbane, vom analiza calitatea aerului și a apei în zonele locuite și vom învăța cum să creăm spații verzi verticale și grădini comunitare."
            imageSrc="/poze-mantis/4.JPG"
            details={{
              duration: "4 Săptămâni",
              targetAudience: "Elevi de gimnaziu",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          {" "}
          <ProgramEducational
            title="P3: Vânătorii de Insecte"
            description="O introducere distractivă în lumea entomologiei. Participanții de școală primară învață despre rolul vital al micilor viețuitoare."
            fullDescription="Copiii vor învăța despre rolul vital al insectelor, vor construi hoteluri pentru albine și fluturi și vor folosi microscoape simple pentru a studia micro-organismele din sol."
            imageSrc="/poze-mantis/30.JPG"
            details={{
              duration: "8 Sesiuni",
              targetAudience: "Elevi de școală primară",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          {" "}
          <ProgramEducational
            title="P4: Supraviețuire & Munte"
            description="Excursii și ateliere practice de orientare, prim-ajutor și supraviețuire pe termen scurt în medii montane diverse."
            fullDescription="Învață să navighezi fără GPS, să amenajezi un adăpost de urgență și să filtrezi apa. Program intensiv de dezvoltare a abilităților practice și a respectului pentru natură."
            imageSrc="/poze-mantis/31.JPG"
            details={{
              duration: "3 Zile (Weekend)",
              targetAudience: "Elevi de liceu și adulți",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          {" "}
          <ProgramEducational
            title="P5: Explorări Litorale"
            description="Studiul ecosistemelor de coastă, impactul poluării marine și proiecte de protecție a mediului în zona Mării Negre."
            fullDescription="Vom colecta mostre de apă, vom face observații asupra vieții marine și vom participa la acțiuni de curățare a plajelor. Oportunitate de a înțelege fragilitatea ecosistemelor acvatice."
            imageSrc="/poze-mantis/22.JPG"
            details={{
              duration: "5 Zile (Tabără)",
              targetAudience: "Gimnaziu & Liceu",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => handleRedirect("/programe-educationale")}
          className="cursor-pointer"
        >
          {" "}
          <ProgramEducational
            title="P6: Detectivii Pădurii"
            description="Jocuri și activități interactive pentru cei mici, axate pe recunoașterea copacilor, a urmelor de animale și a sunetelor naturii."
            fullDescription="O introducere jucăușă în silvicultură și cunoașterea naturii. Folosim povești și activități practice pentru a stimula curiozitatea copiilor."
            imageSrc="/poze-mantis/11.JPG"
            details={{
              duration: "4 Sesiuni",
              targetAudience: "Elevi de școală primară",
            }}
            disableModal={true}
          />
        </SwiperSlide>
        {/* Vă recomand să adăugați mai multe slide-uri pentru a vedea efectul de carusel */}
      </Swiper>
    </div>
  );
}
