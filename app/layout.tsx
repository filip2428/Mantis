import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

// 1. Definirea Fontului Principal (Titluri & Brand)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Grosimi necesare
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
    <html
      lang="ro"
      className={`${poppins.variable} ${nunito.variable} antialiased`}
    >
      {/* Aplicăm font-sans, care preia Nunito din config */}
      <body className="font-sans">{children}</body>
    </html>
  );
}
