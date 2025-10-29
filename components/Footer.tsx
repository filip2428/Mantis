import React from "react";
import Link from "next/link";
import { Mail, Facebook, Instagram, MapPin } from "lucide-react";

interface FooterProps {
  logoSrc: string;
  brandName: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc, brandName }) => {
  const currentYear = new Date().getFullYear();

  const NAV_LINKS = [
    { name: "Acasă", href: "/" },
    { name: "Programe", href: "/programe-educationale" },
    { name: "Centrul Mantis", href: "/centrul-educational-mantis" },
    { name: "Conservare", href: "/conservare" },
    { name: "Contact", href: "/contact" },
  ];

  const SOCIAL_LINKS = [
    { icon: Facebook, href: "https://facebook.com/mantis", name: "Facebook" },
    {
      icon: Instagram,
      href: "https://instagram.com/mantis",
      name: "Instagram",
    },
  ];

  return (
    <footer className="mt-20 border-t border-mantis-green-900/40 bg-gradient-to-br from-mantis-green-700 via-mantis-green-600 to-mantis-green-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* GRILA PRINCIPALĂ */}
        <div className="grid grid-cols-2 gap-12 border-b border-white/20 pb-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Coloana 1: Logo și Viziune Scurtă */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-white/70  shadow-lg shadow-black/30 ring-1 ring-white/15 backdrop-blur"
            >
              <img
                className="h-50 w-auto"
                src={logoSrc}
                alt={`${brandName} Logo`}
              />
            </Link>
            {/* <p className="max-w-xs pt-2 text-sm text-white/85 font-sans">
              Mantis: Cultivăm curiozitatea și caracterul prin experiențe reale
              în natură.
            </p> */}
          </div>

          {/* Coloana 2: Link-uri Rapide (Navigație) */}
          <div className="col-span-1">
            <h3 className="mb-4 text-base font-heading font-semibold text-white/95">
              Navigare Rapidă
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-white/80 transition-colors hover:text-white/100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coloana 3: Social Media & Contact rapid */}
          <div className="col-span-1">
            <h3 className="mb-4 text-base font-heading font-semibold text-white/95">
              Conectează-te
            </h3>

            {/* Link-uri Social Media */}
            <div className="mb-4 flex space-x-4 text-white/95">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // APLICARE TEMA: Text verde
                  className="transition-colors hover:text-mantis-leaf-100"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Adresă/Contact rapid */}
            <div className="space-y-2 text-white/85">
              <div className="flex items-center text-sm font-sans">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-mantis-leaf-100" />
                <span>Șiștarovăț, Arad</span>
              </div>
              <div className="flex items-center text-sm font-sans">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0 text-mantis-leaf-100" />
                <a
                  href="mailto:contact@mantis.ro"
                  className="transition-colors hover:text-mantis-leaf-100"
                >
                  contact@mantis.ro
                </a>
              </div>
            </div>
          </div>

          {/* Coloana 4: Contact/Rezervare */}
          <div className="col-span-2 space-y-4 lg:col-span-1">
            <h3 className="mb-4 text-base font-heading font-semibold text-white/95">
              Rezervă-ți Locul!
            </h3>
            <p className="text-sm font-sans text-white/85">
              Înscrie un grup și combină învățarea în natură cu distracția!
            </p>
            <Link
              href="/contact"
              // APLICARE TEMA: Buton CTA verde
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-mantis-green-700 shadow-sm transition duration-300 hover:bg-mantis-leaf-100/80"
            >
              Contactează-ne
            </Link>
          </div>
        </div>

        {/* Secțiunea Copyright */}
        <div className="flex flex-col items-center justify-between space-y-3 pt-8 font-sans text-sm text-white/80 md:flex-row md:space-y-0">
          <p>
            {/* APLICARE TEMA: Textul de brand folosește culoarea Mantis Green */}
            <span className="font-semibold text-white">Mantis</span>, pasiune
            pentru cunoaștere.
          </p>
          <p>
            &copy; {currentYear} {brandName}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
