import type { Certificate } from "./model";
import { certificates } from "./data";

export type RepositoryResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export type CertificatesRepository = {
  getCertificates(): Promise<RepositoryResult<Certificate[]>>;
};

export function createCertificatesRepository(): CertificatesRepository {
  return {
    async getCertificates() {
      try {
        if (!Array.isArray(certificates) || certificates.length === 0) {
          return {
            status: "error",
            error: "No certificates are available.",
          };
        }

        return { status: "success", data: certificates };
      } catch (error) {
        return {
          status: "error",
          error:
            error instanceof Error
              ? error.message
              : "Unable to load certificates.",
        };
      }
    },
  };
}
