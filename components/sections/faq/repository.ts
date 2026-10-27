import type { FaqItem } from "./model";
import { faqItems } from "./data";

export type RepositoryResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export type FaqRepository = {
  getItems(): Promise<RepositoryResult<FaqItem[]>>;
};

export function createFaqRepository(): FaqRepository {
  return {
    async getItems() {
      try {
        if (!Array.isArray(faqItems) || faqItems.length === 0) {
          return {
            status: "error",
            error: "No FAQ items are available.",
          };
        }

        return { status: "success", data: faqItems };
      } catch (error) {
        return {
          status: "error",
          error:
            error instanceof Error
              ? error.message
              : "Unable to load FAQ items.",
        };
      }
    },
  };
}
