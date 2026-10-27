"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "";

const message =
  "Hello, I'd like to learn more about your nutrition and fitness services.";

export default function FloatingWhatsApp() {
  const reduceMotion = useReducedMotion();

  if (!WHATSAPP_NUMBER) {
    return null;
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact via WhatsApp"
      title="Chat on WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: 0.5 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#286342] text-white shadow-xl shadow-[#202820]/20 transition-colors hover:bg-[#193e2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#286342] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <FaWhatsapp size={30} className="text-white" />

      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#a8d96c]" />
    </motion.a>
  );
}
