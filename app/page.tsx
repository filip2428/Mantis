import NavbarSite from "@/components/NavBar";
import Hero from "@/components/Hero";
import { TextReveal } from "@/components/magicui/text-reveal";
import AboutUs from "@/components/AboutUs";
import ProgrameSlider from "@/components/ProgrameSlider";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <NavbarSite>
        <Hero />
        <div id="hero-scroll-stop" className="scroll-mt-40">
          <TextReveal>Pasiune pentru cunoaștere</TextReveal>
        </div>
        <AboutUs />
        <ProgrameSlider />
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="SiglaMantis+slogan.png" />
    </>
  );
}
