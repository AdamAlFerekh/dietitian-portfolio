"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Award, ExternalLink, X } from "lucide-react";
import { useCertificatesViewModel } from "./certificates/viewModel";

export default function Certificates() {
  const {
    certificates,
    selectedCertificate,
    selectedIndex,
    openCertificate,
    closeCertificate,
    showPrevious,
    showNext,
  } = useCertificatesViewModel();
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    const triggerButton = triggerButtonRef.current;

    closeCertificate();

    requestAnimationFrame(() => {
      triggerButton?.focus();
    });
  }, [closeCertificate]);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableSelector = [
        "button:not([disabled])",
        "[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(", ");

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter(
        (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1,
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (activeElement === firstElement || !dialogRef.current.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }

        return;
      }

      if (activeElement === lastElement || !dialogRef.current.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeModal, selectedIndex, showNext, showPrevious]);

  return (
    <section
      id="qualifications"
      className="scroll-mt-24 overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
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
              Demo portfolio
            </span>
            <span className="h-px w-9 bg-[#9BCB63]" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#242824] sm:text-5xl lg:text-6xl">
            Sample credentials
            <span className="mt-1 block font-normal text-[#789F3D]">
              for a fictional profile.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#737971] sm:text-base sm:leading-8">
            These cards are illustrative demo content for a fictional portfolio and
            are not real qualifications, institutions, or award records.
          </p>
        </motion.div>

        {/* Certificate cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.id}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              onClick={(event) => {
                triggerButtonRef.current = event.currentTarget;
                openCertificate(index);
              }}
              aria-label={`View details for ${certificate.title}`}
              className="group overflow-hidden border border-[#E7E9E5] bg-white text-left transition-colors duration-300 hover:border-[#B7D99B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789F3D]"
            >
              {/* Preview */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#F7F8F6] p-5 sm:p-7">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`Preview of ${certificate.title}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <>
                    <div className="absolute inset-4 border border-dashed border-[#D9DDD6]" />

                    <div className="relative flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center border border-[#E7E9E5] bg-white text-[#789F3D] transition-colors duration-300 group-hover:border-[#B7D99B]">
                        <Award size={27} strokeWidth={1.4} />
                      </div>

                      <p className="mt-4 text-sm font-medium text-[#242824]">
                        Demo preview
                      </p>
                      <p className="mt-1 text-xs text-[#92988F]">
                        Sample material only
                      </p>
                    </div>
                  </>
                )}

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-[#E7E9E5] bg-white text-[#242824] transition-colors duration-300 group-hover:border-[#789F3D] group-hover:bg-[#789F3D] group-hover:text-white">
                  <ExternalLink size={15} />
                </span>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9BCB63] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Card information */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="border border-[#E7E9E5] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789F3D]">
                    {certificate.category}
                  </span>

                  <span className="text-xs text-[#92988F]">
                    {certificate.year}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#242824] sm:text-xl">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#737971]">
                  {certificate.issuer}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#789F3D]">
                  View details
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-6 text-[#92988F]">
          This section uses sample portfolio content only. It does not represent
          real certificates, institutions, or verified credentials.
        </p>
      </div>

      {/* Certificate lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            key="certificate-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171C17]/75 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
          >
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              initial={
                reduceMotion ? false : { opacity: 0, y: 16, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#E7E9E5] bg-white p-5 shadow-2xl sm:p-8"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label="Close certificate details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-[#E7E9E5] bg-white text-[#242824] transition-colors hover:bg-[#F7F8F6]"
              >
                <X size={19} />
              </button>

              <div className="border-b border-[#E7E9E5] pb-5 pr-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#789F3D]">
                  {selectedCertificate.category}
                </span>

                <h3
                  id="certificate-dialog-title"
                  className="mt-3 text-2xl font-semibold tracking-tight text-[#242824] sm:text-3xl"
                >
                  {selectedCertificate.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#737971]">
                  {selectedCertificate.issuer} · {selectedCertificate.year}
                </p>
              </div>

              <div className="mt-6 flex min-h-56 items-center justify-center overflow-hidden border border-[#E7E9E5] bg-[#F7F8F6] p-5 sm:min-h-72">
                {selectedCertificate.image ? (
                  <Image
                    src={selectedCertificate.image}
                    alt={`Full preview of ${selectedCertificate.title}`}
                    width={1200}
                    height={900}
                    sizes="(max-width: 672px) 100vw, 672px"
                    className="max-h-[50vh] w-full object-contain"
                  />
                ) : (
                  <div className="max-w-sm text-center">
                    <Award
                      size={40}
                      strokeWidth={1.4}
                      className="mx-auto text-[#789F3D]"
                    />
                    <p className="mt-4 font-medium text-[#242824]">
                      Demo image placeholder
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#737971]">
                      This preview is illustrative and not associated with a real
                      credential document.
                    </p>
                  </div>
                )}
              </div>

              <p className="mt-5 text-sm leading-7 text-[#737971]">
                {selectedCertificate.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#E7E9E5] pt-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous certificate"
                  className="inline-flex items-center gap-2 border border-[#E7E9E5] px-4 py-3 text-sm font-medium text-[#242824] transition-colors hover:bg-[#F7F8F6]"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <span className="text-xs tabular-nums text-[#737971]">
                  {(selectedIndex ?? 0) + 1} / {certificates.length}
                </span>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next certificate"
                  className="inline-flex items-center gap-2 border border-[#E7E9E5] px-4 py-3 text-sm font-medium text-[#242824] transition-colors hover:bg-[#F7F8F6]"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
