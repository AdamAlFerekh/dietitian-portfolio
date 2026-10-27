import { useCallback, useEffect, useMemo, useState } from "react";
import type { FaqItem } from "./model";
import { createFaqRepository, type RepositoryResult } from "./repository";

export type FaqViewModel = {
  items: FaqItem[];
  openIndex: number | null;
  isLoading: boolean;
  error: string | null;
  toggleItem: (index: number) => void;
};

export function useFaqViewModel(): FaqViewModel {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const repository = createFaqRepository();

    const handleResult = (result: RepositoryResult<FaqItem[]>) => {
      if (!isActive) return;

      if (result.status === "success") {
        setItems(result.data);
        setError(null);
      } else {
        setItems([]);
        setError(result.error);
      }

      setIsLoading(false);
    };

    Promise.resolve(repository.getItems())
      .then(handleResult)
      .catch((reason: unknown) => {
        if (!isActive) return;

        setItems([]);
        setError(
          reason instanceof Error
            ? reason.message
            : "Unable to load FAQ items.",
        );
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const toggleItem = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return useMemo(
    () => ({
      items,
      openIndex,
      isLoading,
      error,
      toggleItem,
    }),
    [items, openIndex, isLoading, error, toggleItem],
  );
}
