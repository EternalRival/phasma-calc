import type { EvidenceStatus } from "~/utils/evidence-status";

export const useDifficulty = () => useState<string>("difficulty");

export const useEvidences = () => useState<Record<string, EvidenceStatus>>("evidences");
