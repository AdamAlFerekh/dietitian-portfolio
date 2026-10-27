import { useCallback, useEffect, useMemo, useState } from "react";
import type { Certificate } from "./model";
import { createCertificatesRepository, type RepositoryResult } from "./repository";

export type CertificatesViewModel = {
  certificates: Certificate[];
  selectedIndex: number | null;
  selectedCertificate: Certificate | null;
  isLoading: boolean;
  error: string | null;
  openCertificate: (index: number) => void;
  closeCertificate: () => void;
  showPrevious: () => void;
  showNext: () => void;
};

export function useCertificatesViewModel(): CertificatesViewModel {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const repository = createCertificatesRepository();

    const handleResult = (result: RepositoryResult<Certificate[]>) => {
      if (!isActive) return;

      if (result.status === "success") {
        setCertificates(result.data);
        setError(null);
      } else {
        setCertificates([]);
        setError(result.error);
      }

      setIsLoading(false);
    };

    Promise.resolve(repository.getCertificates())
      .then(handleResult)
      .catch((reason: unknown) => {
        if (!isActive) return;

        setCertificates([]);
        setError(
          reason instanceof Error
            ? reason.message
            : "Unable to load certificates.",
        );
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const openCertificate = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeCertificate = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || certificates.length === 0) {
        return current;
      }

      return (current - 1 + certificates.length) % certificates.length;
    });
  }, [certificates.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || certificates.length === 0) {
        return current;
      }

      return (current + 1) % certificates.length;
    });
  }, [certificates.length]);

  const selectedCertificate =
    selectedIndex === null ? null : certificates[selectedIndex] ?? null;

  return useMemo(
    () => ({
      certificates,
      selectedIndex,
      selectedCertificate,
      isLoading,
      error,
      openCertificate,
      closeCertificate,
      showPrevious,
      showNext,
    }),
    [certificates, selectedIndex, selectedCertificate, isLoading, error, openCertificate, closeCertificate, showPrevious, showNext],
  );
}
