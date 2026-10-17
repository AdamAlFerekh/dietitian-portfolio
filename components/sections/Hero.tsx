"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Text content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="relative z-10 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#b7d99b]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737971] sm:text-xs">
              Nutrition · Training · Wellbeing
            </span>
          </div>
          <h1 className="mt-7 max-w-3xl text-[clamp(2.7rem,6vw,5.8rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#242824]">
            Build a healthier you.
            <span className="mt-2 block font-normal tracking-[-0.055em] text-[#9BCB63]">
              Get stronger with purpose.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#737971] sm:text-lg sm:leading-9">
            A more thoughtful approach to nutrition and fitness, built around
            your goals, your routine, and the person you want to become.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-7">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b border-[#242824] pb-2.5 text-sm font-semibold text-[#242824] transition-colors hover:border-[#b7d99b] hover:text-[#4e6652]"
            >
              Start a conversation
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#expertise"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#737971] transition-colors hover:text-[#242824]"
            >
              Explore services
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#e7e9e5] pt-6 sm:mt-16">
            {[
              "Personalized guidance",
              "Practical habits",
              "Sustainable progress",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-xs text-[#626860]"
              >
                <Check size={13} className="text-[#78936a]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Portrait area */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="relative order-1 mx-auto w-full max-w-[590px] lg:order-2"
        >
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-[#f4f5f2] sm:rounded-[2rem]">
            <Image
              src="/Tarek_Hero.jpg"
              alt="Portrait of your dietitian and fitness coach"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#242824]/35 to-transparent" />

            <div className="absolute inset-x-6 bottom-6 z-20 sm:inset-x-8 sm:bottom-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/95 sm:text-[11px]">
                Your health. Your journey.
              </p>

              <div className="mt-3 flex items-end justify-between gap-4 sm:mt-4">
                <p className="max-w-[280px] text-[1.7rem] font-medium leading-[1.12] tracking-[-0.045em] text-white sm:text-3xl">
                  Progress that fits real life.
                </p>

                <span className="mb-1.5 h-px w-8 shrink-0 bg-[#9BCB63] sm:w-14" />
              </div>
            </div>
          </div>

          {/* Fine accent line */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-2/3 w-2/3 rounded-[1.5rem] border border-[#b7d99b]/70 sm:-bottom-4 sm:-right-4 sm:rounded-[2rem]" />

          <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-xl border border-[#e7e9e5] bg-white px-4 py-3 shadow-sm sm:-left-6 sm:top-12 sm:px-5">
            <span className="h-2 w-2 rounded-full bg-[#b7d99b]" />
            <span className="text-xs font-medium text-[#424840]">
              Nutrition & fitness
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#expertise"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.8 }}
        className="mx-auto mt-16 hidden w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#92988f] lg:flex"
      >
        Discover the approach
        <ArrowDown size={14} className="text-[#78936a]" />
      </motion.a>
    </section>
  );
}
