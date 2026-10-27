"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Dumbbell,
  Leaf,
  UserRound,
} from "lucide-react";
import { useExpertiseViewModel } from "./expertise/viewModel";

const serviceIcons = {
  leaf: Leaf,
  dumbbell: Dumbbell,
  "user-round": UserRound,
};

export default function Expertise() {
  const reduceMotion = useReducedMotion();
  const { services, expandedService, isLoading, error, toggleService } =
    useExpertiseViewModel();

  if (isLoading) {
    return (
      <section
        id="expertise"
        className="bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="text-sm text-[#737971]">Loading services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="expertise"
        className="bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="text-sm text-[#737971]">Unable to load services.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="expertise"
      className="bg-[#F7F8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#9BCB63]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737971] sm:text-xs">
                How I can help
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-[#242824] sm:text-5xl lg:text-6xl">
              A plan that works
              <span className="block font-normal text-[#789F3D]">
                for your life.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#737971] sm:text-base sm:leading-8">
            Nutrition and training are personal. Explore the services and find
            the support that best fits your goals and routine.
          </p>
        </motion.div>

        <div className="mt-10 grid items-start gap-4 md:mt-12 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const isExpanded = expandedService === index;

            return (
              <motion.article
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative flex flex-col border border-[#E7E9E5] bg-white p-6 transition-colors duration-300 hover:border-[#B7D99B] sm:p-8 lg:p-9"
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9BCB63] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.12em] text-[#92988F]">
                    {service.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center border border-[#E7E9E5] text-[#789F3D] transition-colors duration-300 group-hover:border-[#B7D99B] group-hover:bg-[#F7F8F6]">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-semibold tracking-tight text-[#242824] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#737971]">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-[#E7E9E5] pt-5">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`service-details-${service.number}`}
                    onClick={() => toggleService(index)}
                    className="flex w-full items-center justify-between gap-3 text-left text-sm font-semibold text-[#242824] transition-colors hover:text-[#789F3D]"
                  >
                    <span>{isExpanded ? "Show less" : "Explore service"}</span>

                    {isExpanded ? (
                      <ArrowUpRight size={17} />
                    ) : (
                      <ArrowDownRight size={17} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`service-details-${service.number}`}
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5">
                          <p className="text-sm leading-6 text-[#737971]">
                            {service.audience}
                          </p>

                          <ul className="mt-4 space-y-3">
                            {service.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2.5 text-sm leading-6 text-[#424840]"
                              >
                                <Check
                                  size={15}
                                  className="mt-1 shrink-0 text-[#789F3D]"
                                />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 border-b border-[#B7D99B] pb-1.5 text-sm font-semibold text-[#242824] transition-colors hover:text-[#789F3D]"
                          >
                            Ask about this service
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.2 }}
          className="mt-8 text-xs leading-6 text-[#92988F]"
        >
          Services and specific inclusions should be confirmed with the
          practitioner before publication.
        </motion.p>
      </div>
    </section>
  );
}
