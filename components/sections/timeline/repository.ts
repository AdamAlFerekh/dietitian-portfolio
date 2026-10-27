import type { TimelineEntry } from "./model";
import { timelineEntries } from "./data";

export type RepositoryResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export type TimelineRepository = {
  getEntries(): Promise<RepositoryResult<TimelineEntry[]>>;
};

export function createTimelineRepository(): TimelineRepository {
  return {
    async getEntries() {
      try {
        if (!Array.isArray(timelineEntries) || timelineEntries.length === 0) {
          return {
            status: "error",
            error: "No timeline entries are available.",
          };
        }

        return { status: "success", data: timelineEntries };
      } catch (error) {
        return {
          status: "error",
          error:
            error instanceof Error
              ? error.message
              : "Unable to load timeline entries.",
        };
      }
    },
  };
}
