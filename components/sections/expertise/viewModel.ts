import { useCallback, useEffect, useMemo, useState } from "react";
import { createExpertiseRepository, type RepositoryResult } from "./repository";
import type { Service } from "./model";

export type ExpertiseViewModel = {
  services: Service[];
  expandedService: number | null;
  isLoading: boolean;
  error: string | null;
  toggleService: (index: number) => void;
};

export function useExpertiseViewModel(): ExpertiseViewModel {
  const [services, setServices] = useState<Service[]>([]);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const repository = createExpertiseRepository();

    const handleResult = (result: RepositoryResult<Service[]>) => {
      if (!isActive) return;

      if (result.status === "success") {
        setServices(result.data);
        setError(null);
      } else {
        setServices([]);
        setError(result.error);
      }

      setIsLoading(false);
    };

    Promise.resolve(repository.getServices())
      .then(handleResult)
      .catch((reason: unknown) => {
        if (!isActive) return;

        setServices([]);
        setError(
          reason instanceof Error
            ? reason.message
            : "Unable to load expertise services.",
        );
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const toggleService = useCallback((index: number) => {
    setExpandedService((current) => (current === index ? null : index));
  }, []);

  return useMemo(
    () => ({
      services,
      expandedService,
      isLoading,
      error,
      toggleService,
    }),
    [services, expandedService, isLoading, error, toggleService],
  );
}
