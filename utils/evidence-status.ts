export const EvidenceStatus = {
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutral',
} as const

export type EvidenceStatus = (typeof EvidenceStatus)[keyof typeof EvidenceStatus]
