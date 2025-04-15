<script setup lang="ts">
import { EvidenceStatus } from '~/model/evidence-status.enum'
import { evidences } from '~/assets/ghost-evidences-data.json'
import { useEvidencesStore } from '~/stores/evidences.store'

const evidencesStore = useEvidencesStore()
</script>

<template>
  <div class="wrapper">
    <button
      v-for="evidence in evidences"
      :class="['evidence', evidencesStore.evidences[evidence]]"
      @click="
        evidencesStore.$patch((state) => {
          state.evidences[evidence] =
            state.evidences[evidence] !== EvidenceStatus.positive
              ? EvidenceStatus.positive
              : EvidenceStatus.neutral
        })
      "
      @contextmenu.prevent="
        evidencesStore.$patch((state) => {
          state.evidences[evidence] =
            state.evidences[evidence] !== EvidenceStatus.negative
              ? EvidenceStatus.negative
              : EvidenceStatus.neutral
        })
      "
      :key="evidence"
    >
      {{ evidence }}
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2px;

  padding: 4px;
}

.evidence {
  cursor: pointer;
  user-select: none;

  padding: 12px;
  border: none;

  background-color: #ffffff80;
  background-image: linear-gradient(
    to left top,
    transparent 25%,
    var(--glare-color) 50%,
    transparent 75%
  );

  transition-duration: 0.3s;
  transition-property: --glare-color, background-color;

  &.positive {
    background-color: #00ff0080;
  }

  &.negative {
    background-color: #ff606080;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --glare-color: white;
    }
  }
}
</style>
