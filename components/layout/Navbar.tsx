"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e9e5] bg-white/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e9e5] text-sm font-bold tracking-tight text-[#242824] transition-colors group-hover:border-[#b7d99b]">
            TF
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#b7d99b]" />
          </span>

          <span>
            <span className="block text-sm font-bold tracking-tight text-[#242824] sm:text-base">
              Tarek Al Ferekh
            </span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#737971] sm:text-[10px]">
              Nutrition & Fitness
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-2 text-[13px] font-medium text-[#626860] transition-colors hover:text-[#242824]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#b7d99b] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border-b border-[#242824] pb-1.5 text-[13px] font-semibold text-[#242824] transition-colors hover:border-[#b7d99b] hover:text-[#4e6652]"
          >
            Get in touch
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e9e5] text-[#242824] transition-colors hover:border-[#b7d99b] md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#e7e9e5] bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="px-5 py-4 sm:px-8">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[#e7e9e5] py-4 text-sm font-medium text-[#242824] transition-colors hover:text-[#4e6652]"
              style={{ transitionDelay: `${index * 30}ms` }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
              <ArrowUpRight size={15} className="text-[#a0a69d]" />
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-5 flex items-center justify-between py-3 text-sm font-semibold text-[#242824]"
          >
            Get in touch
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b7d99b]">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
