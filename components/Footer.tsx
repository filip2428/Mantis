import React from "react";
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
    <footer className="bg-gray-800 dark:bg-gray-900 mt-20 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* GRILA PRINCIPALĂ */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-10 border-b border-gray-700/50">
          {/* Coloana 1: Logo și Viziune Scurtă */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col space-y-4">
            <a href="/" className="inline-block">
              <img
                className="h-40 w-auto"
                src={logoSrc}
                alt={`${brandName} Logo`}
              />
            </a>
            <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xs pt-2 font-sans">
              Mantis: Cultivăm curiozitatea și caracterul prin experiențe reale
              în natură.
            </p>
          </div>

          {/* Coloana 2: Link-uri Rapide (Navigație) */}
          <div className="col-span-1">
            <h3 className="text-base font-heading font-semibold text-white mb-4">
              Navigare Rapidă
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-mantis-green-500 transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coloana 3: Social Media & Contact rapid */}
          <div className="col-span-1">
            <h3 className="text-base font-heading font-semibold text-white mb-4">
              Conectează-te
            </h3>

            {/* Link-uri Social Media */}
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // APLICARE TEMA: Text verde
                  className="text-gray-400 hover:text-mantis-green-500 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Adresă/Contact rapid */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400 font-sans">
                {/* APLICARE TEMA: Iconițe verzi */}
                <MapPin className="w-4 h-4 mr-2 text-mantis-green-500 flex-shrink-0" />
                <span>Șiștarovăț, Arad</span>
              </div>
              <div className="flex items-center text-sm text-gray-400 font-sans">
                <Mail className="w-4 h-4 mr-2 text-mantis-green-500 flex-shrink-0" />
                <a
                  href="mailto:contact@mantis.ro"
                  className="hover:text-mantis-green-500"
                >
                  contact@mantis.ro
                </a>
              </div>
            </div>
          </div>

          {/* Coloana 4: Contact/Rezervare */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-base font-heading font-semibold text-white mb-4">
              Rezervă-ți Locul!
            </h3>
            <p className="text-sm text-gray-400 font-sans">
              Înscrie un grup și combină învățarea în natură cu distracția!
            </p>
            <a
              href="/contact"
              // APLICARE TEMA: Buton CTA verde
              className="inline-flex items-center px-4 py-2 bg-mantis-green-600 text-white font-medium text-sm rounded-lg hover:bg-mantis-green-700 transition duration-300"
            >
              Contactează-ne
            </a>
          </div>
        </div>

        {/* Secțiunea Copyright */}
        <div className="flex justify-between items-center pt-8 flex-col md:flex-row space-y-3 md:space-y-0">
          <p className="text-sm text-gray-500 font-sans">
            {/* APLICARE TEMA: Textul de brand folosește culoarea Mantis Green */}
            <span className="text-mantis-green-600">Mantis</span>, dedicată
            conservării și educației.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 font-sans">
            &copy; {currentYear} {brandName}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
