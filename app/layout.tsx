import type { Metadata } from "next";
// Am păstrat Geist doar ca referință sau dacă este necesar în altă parte,
// dar am adăugat fonturile Mantis
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

// 1. Definirea Fontului Principal (Titluri & Brand)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Grosimi necesare pentru brand
  variable: "--font-poppins",
});

// 2. Definirea Fontului de Bază (Corp text & Slogan)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Mantis",
  description: "Programe educaționale pentru copii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplicăm noile clase de variabile pe tag-ul <html>
    <html
      lang="ro"
      className={`${poppins.variable} ${nunito.variable} antialiased`}
    >
      <body className="font-sans">
        {/* Fontul Nunito este aplicat implicit de font-sans în CSS, 
            dar pentru siguranță, putem aplica font-sans (sau font-nunito) pe body. */}
        {children}
      </body>
    </html>
  );
}
