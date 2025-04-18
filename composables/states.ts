import type { EvidenceStatus } from '#imports'

export const useDifficulty = () => useState<string>('difficulty')

export const useEvidences = () => useState<Record<string, EvidenceStatus>>('evidences')
