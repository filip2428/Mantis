"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileAccordion,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
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
    },
    {
      name: "Educație",
      link: "/programe-educationale",
      children: [
        { name: "Programe școli", link: "/programe-educationale" },
        { name: "Ateliere weekend", link: "/ateliere" },
        { name: "Resurse profesori", link: "/resurse" },
      ],
    },
    {
      name: "Conservare",
      link: "#conservare",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
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

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const hasChildren = !!item.children?.length;
              if (!hasChildren) {
                return (
                  <a
                    key={`m-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-md px-2 py-2 text-left text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    {item.name}
                  </a>
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
