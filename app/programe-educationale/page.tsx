import NavbarSite from "@/components/NavBar";
import ProgramEducational from "@/components/ProgramEducational";
import Footer from "@/components/Footer";
import App from "@/components/Cards";
import { CardHoverEffectDemo } from "@/components/demo";

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
              {/* CARD 1 */}
              <ProgramEducational
                imgSrc="paul-hac.JPEG"
                title="Programul 1"
                altName="Program 1 - Biologie & Conservare"
              >
                Acesta este un program educațional destinat elevilor de liceu,
                axat pe biologie și conservare. HSfasjfhajsfjak safasf
              </ProgramEducational>

              {/* CARD 2 */}
              <ProgramEducational
                imgSrc="paul-hac.JPEG"
                title="Programul 2"
                altName="Program 2 - Ecologie & Mediu"
              >
                Acesta este un program educațional destinat elevilor de
                gimnaziu, axat pe ecologie și mediu.
              </ProgramEducational>

              {/* CARD 3 */}
              <ProgramEducational
                imgSrc="paul-hac.JPEG"
                title="Programul 3"
                altName="Program 3 - Natură & Biodiversitate"
              >
                Acesta este un program educațional destinat elevilor de școală
                primară, axat pe natură și biodiversitate.
              </ProgramEducational>
              {/* Poți adăuga mai multe carduri aici dacă este necesar */}
              <ProgramEducational
                imgSrc="paul-hac.JPEG"
                title="Programul 4"
                altName="Program 4 - Explorare Urbană"
              >
                Acesta este un program educațional destinat tuturor vârstelor,
                axat pe explorarea mediului înconjurător.
              </ProgramEducational>
            </div>
            <CardHoverEffectDemo />
          </div>
        </div>
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.jpg" />
    </>
  );
}
