import NavbarSite from "@/components/NavBar";
import { SocialIcon } from "react-social-icons";
import SocialBar from "@/components/SocialBar";

export default function ProgrameEducaționale() {
  return (
    <NavbarSite>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold">Programe Educaționale</h1>
        <p className="mt-4 text-lg text-center">
          Aici vei găsi informații despre programele educaționale oferite de
          Mantis.
        </p>
        <SocialIcon url="https://www.facebook.com" className="mt-4" />
        <SocialBar />
        {/* Adaugă mai multe detalii despre programe aici */}
      </div>
    </NavbarSite>
  );
}
