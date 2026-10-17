"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "";
const CONTACT_EMAIL = "";

const whatsappMessage =
  "Hello, I'd like to learn more about your nutrition and fitness services.";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
    : "#contact";

  const emailHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Nutrition and Fitness Inquiry",
      )}&body=${encodeURIComponent(whatsappMessage)}`
    : "#contact";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative isolate overflow-hidden bg-[#242824] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Subtle decorative details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-white/[0.08] sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full border border-white/[0.08] sm:h-72 sm:w-72"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-[#789F3D]/15 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Introduction */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#9BCB63]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-xs">
                  Your next chapter starts here
                </span>
                <Sparkles
                  size={14}
                  className="text-[#9BCB63]"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                Ready to invest in
                <span className="mt-1 block font-normal text-[#B7D99B]">
                  your wellbeing?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Tell me about your goals, ask a question, or explore which
                nutrition and fitness services may suit your needs.
              </p>
            </div>

            {/* Contact options */}
            <div className="space-y-3">
              <a
                href={whatsappHref}
                target={WHATSAPP_NUMBER ? "_blank" : undefined}
                rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
                aria-disabled={!WHATSAPP_NUMBER}
                onClick={(event) => {
                  if (!WHATSAPP_NUMBER) event.preventDefault();
                }}
                className={`group flex items-center justify-between gap-4 border p-4 transition-colors duration-300 sm:p-5 ${
                  WHATSAPP_NUMBER
                    ? "border-[#B7D99B] bg-[#B7D99B] text-[#242824] hover:bg-[#C9E4B1]"
                    : "cursor-not-allowed border-white/10 bg-[#B7D99B]/50 text-[#242824]/65"
                }`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#242824]/10">
                    <MessageCircle size={21} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold sm:text-base">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-1 block text-xs opacity-70">
                      Start a conversation
                    </span>
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={emailHref}
                aria-disabled={!CONTACT_EMAIL}
                onClick={(event) => {
                  if (!CONTACT_EMAIL) event.preventDefault();
                }}
                className={`group flex items-center justify-between gap-4 border p-4 transition-colors duration-300 sm:p-5 ${
                  CONTACT_EMAIL
                    ? "border-white/20 text-white hover:border-[#B7D99B]/60 hover:bg-white/[0.04]"
                    : "cursor-not-allowed border-white/10 text-white/50"
                }`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold sm:text-base">
                      Send an email
                    </span>
                    <span className="mt-1 block text-xs text-white/50">
                      Questions and inquiries
                    </span>
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {!WHATSAPP_NUMBER && !CONTACT_EMAIL && (
                <p className="pt-2 text-xs leading-6 text-white/45">
                  Contact options will activate when the real contact details
                  are added.
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-5 sm:mt-14 sm:pt-6">
            <p className="max-w-3xl text-xs leading-6 text-white/45">
              Please share only the information needed for your inquiry. Avoid
              sending private medical records or other sensitive personal
              information through these contact channels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
