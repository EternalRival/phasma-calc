import { EvidenceStatus } from '#imports'

export function getPossibleGhosts(
  ghostEvidencesEntries: Iterable<[string, string[]]>,
  evidencesEntries: Iterable<[string, EvidenceStatus]>
): string[] {
  const possibleGhostsMap = new Map(ghostEvidencesEntries)

  for (const [evidence, evidenceStatus] of evidencesEntries) {
    for (const [ghost, evidences] of possibleGhostsMap) {
      const hasEvidence = evidences.includes(evidence)

      if (evidenceStatus === EvidenceStatus[hasEvidence ? 'negative' : 'positive']) {
        possibleGhostsMap.delete(ghost)
      }
    }
  }

  return Array.from(possibleGhostsMap.keys())
}
