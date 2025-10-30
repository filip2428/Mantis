import NavbarSite from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactBody from "./components/contact-body"; // Importăm noul "corp" al paginii

// --- Pagina Principală (Server Component) ---
// Aceasta este singura componentă care rulează pe server.
// Este excelentă pentru SEO deoarece încarcă imediat Navbar și Footer.
export default function ContactPage() {
  return (
    <>
      <NavbarSite>
        {/* Întregul conținut al paginii este acum delegat 
            componentei client de mai jos. */}
        <ContactBody />
      </NavbarSite>
      <Footer brandName="Mantis" logoSrc="/SiglaMantis+slogan.png" />
    </>
  );
}
