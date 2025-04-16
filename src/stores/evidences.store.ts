import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { EvidenceStatus } from '~/model/evidence-status.enum'
import { difficulties, evidences, ghosts } from '~/assets/ghost-evidences-data.json'

const DEFAULT_DIFFICULTY_INDEX = 1

const ghostEvidencesMap = new Map(ghosts.map((ghost) => [ghost.name, ghost.evidences]))

export const useEvidencesStore = defineStore('evidences', () => {
  const difficulty = ref(difficulties[DEFAULT_DIFFICULTY_INDEX])

  const evidencesList = ref<Record<string, EvidenceStatus>>(
    Object.fromEntries(evidences.map((evidence) => [evidence, EvidenceStatus.neutral])),
  )

  const possibleGhosts = computed(() => {
    const possibleGhostsMap = new Map(ghostEvidencesMap)

    Object.entries(evidencesList.value).forEach(([evidence, evidenceStatus]) => {
      possibleGhostsMap.forEach((evidences, ghost) => {
        const hasEvidence = evidences.includes(evidence)

        if (evidenceStatus === EvidenceStatus[hasEvidence ? 'negative' : 'positive']) {
          possibleGhostsMap.delete(ghost)
        }
      })
    })

    return Array.from(possibleGhostsMap.keys())
  })

  return { difficulty, evidences: evidencesList, possibleGhosts }
})
