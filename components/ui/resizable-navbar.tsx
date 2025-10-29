"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";

type NavChild = { name: string; link: string };
type NavItem = { name: string; link?: string; children?: NavChild[] };

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible &&
          "bg-mantis-cream/95 shadow-mantis-soft backdrop-blur-md dark:bg-[#102a1b]/90",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: {
    name: string;
    link?: string;
    children?: { name: string; link: string }[];
  }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "hidden lg:flex flex-1 items-center justify-center gap-2 text-sm font-medium text-mantis-green-700",
        className
      )}
    >
      {items.map((item, idx) => {
        const hasChildren = !!item.children?.length;

        return (
          <div
            key={idx}
            className="relative"
            onPointerEnter={() => setOpen(idx)}
            onPointerLeave={(e) => {
              // dacă ai părăsit COMPLET wrapperul, închide
              if (!e.currentTarget.contains(e.relatedTarget as Node))
                setOpen(null);
            }}
          >
            {/* Trigger */}
            {hasChildren ? (
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open === idx}
                className="group relative z-20 flex items-center gap-1.5 rounded-full px-4 py-2 text-mantis-green-700 transition-colors hover:bg-mantis-cream/80 hover:text-mantis-green-800 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
                onFocus={() => setOpen(idx)}
              >
                <span>{item.name}</span>
                <IconChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    open === idx ? "rotate-180" : "rotate-0"
                  )}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Link
                href={item.link}
                onClick={onItemClick}
                className="relative z-20 rounded-full px-4 py-2 text-mantis-green-700 transition-colors hover:bg-mantis-cream/80 hover:text-mantis-green-800 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown */}
            {hasChildren && open === idx && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.16, ease: [0.25, 1, 0.5, 1] }}
                role="menu"
                className={cn(
                  // poziționare + hover-bridge (elimină “golul”)
                  "absolute left-1/2 top-full z-[200] w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-mantis-green-100/70 bg-white p-1.5 shadow-xl shadow-mantis-card/40 dark:border-[#1b3525] dark:bg-[#102a1b] pointer-events-auto",
                  // creează o zonă invizibilă de 8px deasupra, ca să nu se închidă când treci de pe buton pe meniu
                  "before:absolute before:-top-2 before:left-0 before:h-2 before:w-full before:content-['']"
                )}
                onPointerEnter={() => setOpen(idx)} // rămâne deschis când ești pe meniu
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node))
                    setOpen(null);
                }}
              >
                {item.children!.map((child, cIdx) => (
                  <Link
                    key={cIdx}
                    href={child.link}
                    role="menuitem"
                    onClick={(e) => {
                      onItemClick?.();
                      e.currentTarget.blur();
                      setOpen(null);
                    }}
                    className="block rounded-md px-3 py-2 text-sm text-mantis-green-700 hover:bg-mantis-cream/70 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
                  >
                    {child.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible &&
          "bg-mantis-cream/95 shadow-mantis-soft backdrop-blur-md dark:bg-[#102a1b]/90",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};
export const MobileAccordion = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-mantis-green-700 transition-colors hover:bg-mantis-cream/80 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
      >
        <span>{item.name}</span>
        <svg
          className={cn("h-4 w-4 transition", open ? "rotate-180" : "rotate-0")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden pl-3"
          >
            <div className="mt-1 flex flex-col gap-1">
              {item.children!.map((child, i) => (
                <Link
                  key={i}
                  href={child.link}
                  onClick={onClose}
                  className="block rounded-md px-2 py-1.5 text-sm text-mantis-green-700 hover:bg-mantis-cream/80 dark:text-neutral-200 dark:hover:bg-[#1b3525]"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white px-4 py-8 shadow-mantis-card dark:bg-[#102a1b]",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-mantis-bark dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-mantis-bark dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-2 flex items-center space-x-3 px-6 py-1 text-sm font-semibold text-mantis-bark"
    >
      <img
        src="/SiglaMantisVerde.png"
        alt="logo"
        width={62}
        height={62}
        className="drop-shadow-[0_12px_20px_rgba(47,109,71,0.25)]"
      />
      {/* <span className="hidden text-base font-heading tracking-tight text-mantis-green-700 sm:inline">
        Asociația Mantis
      </span> */}
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full border border-mantis-green-200 bg-mantis-cream text-mantis-green-700 text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-mantis-green-600 text-white shadow-mantis-soft border-transparent hover:bg-mantis-green-700",
    secondary:
      "bg-transparent text-mantis-green-700 shadow-none hover:bg-mantis-cream/70",
    dark: "bg-mantis-bark text-white shadow-mantis-soft",
    gradient:
      "bg-gradient-to-b from-mantis-leaf-300 to-mantis-leaf-500 text-mantis-bark shadow-[0px_2px_0px_0px_rgba(255,255,255,0.4)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
