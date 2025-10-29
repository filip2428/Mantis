"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileAccordion,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import SocialBar from "./SocialBar";

export default function NavbarSite({
  children,
}: {
  children?: React.ReactNode;
}) {
  const navItems = [
    {
      name: "Acasă",
      link: "/",
      children: [
        { name: "Acasă", link: "/" },
        { name: "Despre noi", link: "/#despre" },
      ],
    },
    {
      name: "Educație",
      link: "/programe-educationale",
      children: [
        { name: "Programe educaționale", link: "/programe-educationale" },
        {
          name: "Centrul educațional Mantis",
          link: "/centrul-educational-mantis",
        },
        // { name: "Resurse profesori", link: "#resurse" },
      ],
    },
    {
      name: "Conservare",
      link: "/conservare",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-gradient-to-b from-mantis-cream/95 via-mantis-cream/80 to-transparent">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div> */}

          <SocialBar />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => {
              const hasChildren = !!item.children?.length;
              if (!hasChildren) {
                return (
                  <Link
                    key={`m-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-md px-2 py-2 text-left text-mantis-green-700 transition-colors hover:bg-mantis-cream/80 hover:text-mantis-green-800 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
                  >
                    {item.name}
                  </Link>
                );
              }

              // Accordion
              return (
                <MobileAccordion
                  key={`m-${idx}`}
                  item={item}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              );
            })}

            <div className="mt-4 flex w-full justify-start">
              <SocialBar />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}
    </div>
  );
}
