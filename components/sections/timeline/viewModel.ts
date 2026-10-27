import { useEffect, useMemo, useState } from "react";
import type { TimelineEntry } from "./model";
import { createTimelineRepository, type RepositoryResult } from "./repository";

export type TimelineViewModel = {
  entries: TimelineEntry[];
  isLoading: boolean;
  error: string | null;
};

export function useTimelineViewModel(): TimelineViewModel {
  const [entries, setEntries] = useState<TimelineEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const repository = createTimelineRepository();

    const handleResult = (result: RepositoryResult<TimelineEntry[]>) => {
      if (!isActive) return;

      if (result.status === "success") {
        setEntries(result.data);
        setError(null);
      } else {
        setEntries([]);
        setError(result.error);
      }

      setIsLoading(false);
    };

    Promise.resolve(repository.getEntries())
      .then(handleResult)
      .catch((reason: unknown) => {
        if (!isActive) return;

        setEntries([]);
        setError(
          reason instanceof Error
            ? reason.message
            : "Unable to load timeline entries.",
        );
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return useMemo(
    () => ({
      entries,
      isLoading,
      error,
    }),
    [entries, isLoading, error],
  );
}
