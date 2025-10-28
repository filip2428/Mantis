"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";
import type { ReactNode } from "react";

type ItemProps = {
  href: string;
  children: ReactNode;
};

const Item = ({ href, children }: ItemProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex size-10 items-center justify-center rounded-full border border-mantis-green-200 bg-white text-mantis-green-600 shadow-sm transition-colors hover:bg-mantis-cream/80 hover:text-mantis-green-700"
    whileHover={{ scale: 1.08, rotate: 2 }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
  >
    {children}
  </motion.a>
);

export default function SocialBar() {
  return (
    <div className="flex gap-3 text-mantis-green-600">
      <Item href="https://facebook.com/mantis">
        <Facebook className="size-5" />
      </Item>
      <Item href="https://instagram.com/mantis">
        <Instagram className="size-5" />
      </Item>
      <Item href="https://youtube.com/@mantis">
        <Youtube className="size-5" />
      </Item>
    </div>
  );
}
