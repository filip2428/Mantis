import NavbarSite from "@/components/NavBar";
import ProgramEducational from "@/components/ProgramEducational";
import Footer from "@/components/Footer";

export default function ProgrameEducaționale() {
  return (
    <>
      <NavbarSite>
        {/* Container principal: eliminăm centrul strict vertical și adăugăm padding consistent */}
        <div className="min-h-screen p-8 md:p-16">
          {/* Secțiunea de Antet: Centrată și cu spațiere adăugată */}
          <header className="text-center mb-16 max-w-3xl mx-auto">
            {/* Titlu: Mai vizibil și cu o culoare mai bogată */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
              Programe Educaționale
            </h1>
            {/* Paragraf: Text mai mare și culoare gri subtilă */}
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Aici vei găsi informații despre programele educaționale oferite de
              Mantis. Explorează opțiunile noastre pentru a descoperi noi
              orizonturi!
            </p>
          </header>

          {/* Secțiunea de Carduri: Am înlocuit Flexbox cu Grid responsiv */}
          <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.jpg" />
    </>
  );
}
