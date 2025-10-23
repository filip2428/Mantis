import NavbarSite from "@/components/NavBar";
import Hero from "@/components/Hero";
import { TextReveal } from "@/components/magicui/text-reveal";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <NavbarSite>
        <Hero />
        <TextReveal>Pasiune pentru cunoaștere</TextReveal>
        <AboutUs />
      </NavbarSite>
    </>
  );
}
