"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useFaqViewModel } from "./faq/viewModel";

export default function FAQ() {
  const reduceMotion = useReducedMotion();
  const { items, openIndex, isLoading, error, toggleItem } = useFaqViewModel();

  if (isLoading) {
    return (
      <section
        id="faq"
        className="scroll-mt-24 bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm text-[#737971]">Loading questions...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="faq"
        className="scroll-mt-24 bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm text-[#737971]">Unable to load questions.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Introduction */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#9BCB63]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737971] sm:text-xs">
              Frequently asked questions
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#242824] sm:text-5xl lg:text-6xl">
            Good questions.
            <span className="mt-1 block font-normal text-[#789F3D]">
              Clear answers.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#737971] sm:text-base sm:leading-8">
            A few things worth knowing before taking the next step toward your
            nutrition and fitness goals.
          </p>

          <a
            href="#contact"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#789F3D] transition-colors hover:text-[#526F2B]"
          >
            Still have a question?
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Accordion */}
        <div className="border-y border-[#DDE1DA]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="border-b border-[#DDE1DA] last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span
                    className={`text-sm font-semibold leading-7 transition-colors sm:text-base ${
                      isOpen ? "text-[#789F3D]" : "text-[#242824]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#789F3D] bg-[#789F3D] text-white"
                        : "border-[#DDE1DA] bg-white text-[#737971]"
                    }`}
                  >
                    <Plus size={16} strokeWidth={1.7} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      key="answer"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#737971] sm:leading-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
