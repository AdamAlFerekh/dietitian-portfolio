"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTimelineViewModel } from "./timeline/viewModel";

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  const { entries } = useTimelineViewModel();

  return (
    <section
      id="journey"
      className="scroll-mt-24 overflow-hidden bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#9BCB63]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737971] sm:text-xs">
              The professional journey
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#242824] sm:text-5xl lg:text-6xl">
            Built on knowledge.
            <span className="mt-1 block font-normal text-[#789F3D]">
              Driven by progress.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#737971] sm:text-base sm:leading-8">
            This sample timeline presents a fictional nutrition and fitness profile
            designed for portfolio demo purposes.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
          {/* Neutral timeline track */}
          <div className="absolute bottom-8 left-[15px] top-5 w-px bg-[#D9DDD6] sm:left-1/2 sm:-translate-x-1/2" />

          {/* Animated lime progress line */}
          <motion.div
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.2,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-8 left-[15px] top-5 w-px bg-[#9BCB63] sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-8 sm:space-y-12">
            {entries.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={milestone.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className={`relative pl-11 sm:w-1/2 sm:pl-0 ${
                    isLeft ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* Timeline marker */}
                  <div
                    className={`absolute top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#B7D99B] bg-white text-[#789F3D] ${
                      isLeft
                        ? "left-0 sm:left-auto sm:right-0 sm:translate-x-1/2"
                        : "left-0 sm:left-0 sm:-translate-x-1/2"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.7} />
                  </div>
                  <div className="border border-[#E7E9E5] bg-white p-5 transition-colors duration-300 hover:border-[#B7D99B] sm:p-7">
                    <div
                      className={`flex flex-wrap items-center justify-between gap-2 sm:justify-start ${
                        isLeft ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#789F3D] sm:text-xs">
                        {milestone.category}
                      </span>

                      <span className="text-xs text-[#92988F]">
                        {milestone.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#242824] sm:text-xl">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#737971]">
                      {milestone.description}
                    </p>

                    <div
                      className={`mt-5 flex items-center gap-2 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      <span className="h-px w-5 bg-[#B7D99B]" />
                      <span className="text-[10px] font-medium tracking-[0.16em] text-[#92988F]">
                        {milestone.number} / 04
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
