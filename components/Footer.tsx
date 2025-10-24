import React from "react";

interface FooterProps {
  logoSrc: string; // Sursa fișierului PNG al siglei (ex: "/images/mantis-logo.png")
  brandName: string; // Numele brandului (pentru copyright și alt text)
}

const Footer: React.FC<FooterProps> = ({ logoSrc, brandName }) => {
  const currentYear = new Date().getFullYear();

  return (
    // Păstrăm fundalul, separarea (border) și padding-ul vertical generos
    <footer className="bg-gray-800 dark:bg-gray-900 mt-20 border-t border-gray-700">
      {/* Container Ingust și Centrat */}
      {/* Am schimbat max-w-7xl la max-w-4xl pentru a-l face mai îngust */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Container Flex pentru alinierea Logo-ului și a Copyright-ului */}
        {/* Folosim 'md:flex' pentru a le pune pe aceeași linie doar pe ecrane medii și mari */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* 1. Logo-ul (Aliniat la stânga) */}
          <a href="/" className="inline-flex items-center">
            <img
              // Am mărit înălțimea la h-16 (aprox. 64px) pentru logo-ul mai mare
              className="h-16 w-auto"
              src={logoSrc}
              alt={`${brandName} Full Logo`}
            />
          </a>

          {/* 2. Textul Copyright-ului (Aliniat la stânga pe telefoane, la dreapta/în centru pe desktop) */}
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {currentYear} {brandName}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
