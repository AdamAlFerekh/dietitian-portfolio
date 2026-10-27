import type { Service } from "./model";
import { expertiseServices } from "./data";

export type RepositoryResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export type ExpertiseRepository = {
  getServices(): Promise<RepositoryResult<Service[]>>;
};

export function createExpertiseRepository(): ExpertiseRepository {
  return {
    async getServices() {
      try {
        if (
          !Array.isArray(expertiseServices) ||
          expertiseServices.length === 0
        ) {
          return {
            status: "error",
            error: "No expertise services are available.",
          };
        }

        return { status: "success", data: expertiseServices };
      } catch (error) {
        return {
          status: "error",
          error:
            error instanceof Error
              ? error.message
              : "Unable to load expertise services.",
        };
      }
    },
  };
}
