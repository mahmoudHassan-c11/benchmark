"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Logo } from "./ui/logo";
import Image from "next/image";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about-us", key: "about" },
  { href: "/our-services", key: "services" },
  { href: "/contact-us", key: "contact" },
  { href: "/materials", key: "materials" },
  { href: "/knowledge", key: "knowledge" },
];

export function NavLinks() {
  const t = useTranslations("links");
  const tButtons = useTranslations("buttons");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container relative flex items-center justify-between gap-4 py-6 lg:py-8 z-50">
      {/* Logo */}
      <div className="logo shrink-0">
        {/* <Logo /> */}
        <Image
          src="/images/logo.png"
          alt="Benchmark"
          width={180}
          height={60}
          priority
          className="logo"
        />
      </div>

      {/* Desktop Links */}
      <div className="links hidden xl:block">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="text-white text-base hover:text-[#BF925E] transition-colors"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden xl:flex items-center gap-4">
        <div className="flex items-center gap-1 rounded-[5px] bg-[#101B1D] px-4 py-3 border border-white/10">
          <svg
            className="w-4 h-4 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
            />
          </svg>

          <Link
            href={pathname}
            locale="en"
            className="text-white text-sm hover:text-[#BF925E] transition-colors"
          >
            English
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href={pathname}
            locale="ar"
            className="text-white text-sm hover:text-[#BF925E] transition-colors"
          >
            العربية
          </Link>
        </div>

        <Link
          className="btn group flex items-center gap-1.5 bg-[#BF925E] text-white px-6 py-3 rounded-[5px] hover:bg-[#A87B4A] transition-colors"
          href="/our-services"
        >
          <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
          {tButtons("book")}
        </Link>
      </div>

      {/* Mobile / Tablet Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden text-white p-2 z-50 cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile / Tablet Menu */}
      <div
        className={`fixed inset-0 bg-[#101B1D] flex flex-col items-center justify-center gap-8 transition-all duration-300 xl:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:text-[#BF925E] transition-colors"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 rounded-[5px] bg-white/5 px-4 py-3 border border-white/10">
          <Link
            href={pathname}
            locale="en"
            onClick={() => setIsOpen(false)}
            className="text-white text-sm hover:text-[#BF925E] transition-colors"
          >
            English
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href={pathname}
            locale="ar"
            onClick={() => setIsOpen(false)}
            className="text-white text-sm hover:text-[#BF925E] transition-colors"
          >
            العربية
          </Link>
        </div>

        <Link
          onClick={() => setIsOpen(false)}
          className="btn group flex items-center gap-1.5 bg-[#BF925E] text-white px-6 py-3 rounded-[5px] hover:bg-[#A87B4A] transition-colors"
          href="/our-services"
        >
          <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
          {tButtons("book")}
        </Link>
      </div>
    </div>
  );
}
