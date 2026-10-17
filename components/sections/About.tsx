"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const highlights = [
  "An approach built around individual goals",
  "Nutrition and training working together",
  "Practical guidance for everyday life",
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Portrait */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative mx-auto w-full max-w-[500px] lg:mx-0"
        >
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[#9BCB63] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

          <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F7F8F6]">
            {/* Replace with his real portrait when available. */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7F8F6] via-[#ECEEE9] to-[#DDE2D9]" />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#242824]/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#626860]">
                Beyond the plan
              </span>
              <p className="mt-3 max-w-xs text-2xl font-medium leading-tight tracking-tight text-[#242824] sm:text-3xl">
                Knowledge. Purpose. Progress.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-[#9BCB63] sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-28" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="lg:py-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#9BCB63]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737971] sm:text-xs">
              A little about me
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#242824] sm:text-5xl lg:text-6xl">
            Better habits.
            <span className="mt-1 block font-normal text-[#789F3D]">
              Stronger foundations.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#737971] sm:mt-7 sm:text-lg sm:leading-9">
            Nutrition and fitness are about more than following a plan. They
            involve understanding your goals, finding a realistic approach, and
            building habits that fit your life.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#737971] sm:text-base sm:leading-8">
            This introduction will be personalized with his real story,
            education, professional experience, and philosophy once those
            details are confirmed.
          </p>

          <div className="mt-8 border-y border-[#E7E9E5] py-5">
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className={`flex items-start gap-3 py-2.5 ${
                  index !== highlights.length - 1
                    ? "border-b border-[#E7E9E5]"
                    : ""
                }`}
              >
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-1 shrink-0 text-[#789F3D]"
                />
                <p className="text-sm leading-6 text-[#424840] sm:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#qualifications"
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#B7D99B] pb-2 text-sm font-semibold text-[#242824] transition-colors hover:text-[#789F3D]"
          >
            Explore professional background
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
