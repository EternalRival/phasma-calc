import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { EvidenceStatus } from '~/model/evidence-status.enum'
import {
  difficulties,
  evidences,
  ghostEvidencesMap,
  ghosts,
} from '~/assets/ghost-evidences-data.json'

const ghostEvidences: Record<string, string[]> = ghostEvidencesMap

export const useEvidencesStore = defineStore('evidences', () => {
  const difficulty = ref(difficulties[1])

  const evidencesList = ref<Record<string, EvidenceStatus>>(
    Object.fromEntries(evidences.map((evidence) => [evidence, EvidenceStatus.neutral])),
  )

  const possibleGhosts = computed(() => {
    const possibleGhostsSet = new Set(ghosts)

    Object.entries(evidencesList.value).forEach(([evidence, evidenceStatus]) => {
      possibleGhostsSet.forEach((ghost) => {
        const hasEvidence = ghostEvidences[ghost].includes(evidence)

        if (evidenceStatus === EvidenceStatus[hasEvidence ? 'negative' : 'positive']) {
          possibleGhostsSet.delete(ghost)
        }
      })
    })

    return Array.from(possibleGhostsSet)
  })

  return { difficulty, evidences: evidencesList, possibleGhosts }
})
