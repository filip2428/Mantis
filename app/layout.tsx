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
      <body className="font-sans">
        <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(93, 157, 119, 0.16) 1px, transparent 0)",
                backgroundSize: "46px 46px",
              }}
            />
            <div className="absolute -top-32 -left-28 h-[420px] w-[420px] rounded-full bg-mantis-green-200/20 blur-3xl" />
            <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-mantis-leaf-100/25 blur-3xl" />
          </div>
          <div className="relative z-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
