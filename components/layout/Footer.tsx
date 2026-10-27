"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "";
const CONTACT_EMAIL = "";
const INSTAGRAM_URL = "";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Journey", href: "#journey" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = 2026;

  return (
    <footer className="overflow-hidden bg-[#242824] px-5 pb-6 pt-12 text-white sm:px-8 sm:pb-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 sm:gap-12 sm:pb-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:gap-16"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="Back to homepage"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-[#B7D99B]/40 bg-[#B7D99B]/10 text-[#B7D99B] transition-colors duration-300 group-hover:bg-[#B7D99B] group-hover:text-[#242824]">
                <span className="text-xs font-bold tracking-tight">TF</span>
              </span>

              <span>
                <span className="block text-sm font-semibold tracking-tight">
                  Tarek Al Ferekh
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.17em] text-white/45">
                  Nutrition & Fitness
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Supporting healthier habits and stronger foundations through
              nutrition and fitness guidance.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#B7D99B] transition-colors hover:text-white"
            >
              Let&apos;s connect
              <MoveUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#B7D99B]"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact and social links */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              Have a question about nutrition coaching, workout programming, or
              private training?
            </p>

            <div className="mt-5 space-y-4">
              {WHATSAPP_NUMBER ? (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="flex w-fit items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#B7D99B]"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              ) : (
                <span
                  aria-label="WhatsApp contact unavailable"
                  className="flex w-fit cursor-default items-center gap-3 text-sm text-white/35"
                >
                  <MessageCircle size={16} />
                  WhatsApp — demo unavailable
                </span>
              )}

              {CONTACT_EMAIL ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Contact via email"
                  className="flex w-fit items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#B7D99B]"
                >
                  <Mail size={16} />
                  Email
                </a>
              ) : (
                <span
                  aria-label="Email contact unavailable"
                  className="flex w-fit cursor-default items-center gap-3 text-sm text-white/35"
                >
                  <Mail size={16} />
                  Email — demo unavailable
                </span>
              )}

              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="flex w-fit items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#B7D99B]"
                >
                  <Camera size={16} />
                  Instagram
                </a>
              ) : (
                <span
                  aria-label="Instagram profile unavailable"
                  className="flex w-fit cursor-default items-center gap-3 text-sm text-white/35"
                >
                  <Camera size={16} />
                  Instagram — demo unavailable
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col gap-4 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p>© {currentYear} Tarek Al Ferekh. All rights reserved.</p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-3 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center border border-white/15 transition-colors group-hover:border-[#B7D99B]/60 group-hover:text-[#B7D99B]">
              <MoveUpRight size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
