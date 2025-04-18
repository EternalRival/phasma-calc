<script setup lang="ts">
const { evidences: evidencesOrdered } = getGhostEvidencesData();

const evidences = useEvidences();
</script>

<template>
  <div>
    <div class="label">Улики</div>
    <div class="evidences">
      <button
        v-for="evidence in evidencesOrdered"
        :key="evidence"
        :class="['evidence', evidences[evidence]]"
        @click="
          evidences[evidence] =
            evidences[evidence] !== EvidenceStatus.positive ? EvidenceStatus.positive : EvidenceStatus.neutral
        "
        @contextmenu.prevent="
          evidences[evidence] =
            evidences[evidence] !== EvidenceStatus.negative ? EvidenceStatus.negative : EvidenceStatus.neutral
        "
      >
        {{ evidence }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.label {
  user-select: none;

  padding: 4px;

  font-size: large;
  font-weight: 600;
  text-align: center;
}

.evidences {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2px;
}

.evidence {
  cursor: pointer;
  user-select: none;

  padding: 12px 6px;
  border: none;

  font-size: 9px;

  background-color: #ffffff80;
  background-image: linear-gradient(to left top, transparent 25%, var(--glare-color) 50%, transparent 75%);

  transition-duration: 0.3s;
  transition-property: --glare-color, background-color;

  &.positive {
    background-color: #00ff0080;
  }

  &.negative {
    background-color: #ff606080;
  }

  @media (width >= 375px) {
    font-size: 11px;
  }

  @media (width >= 425px) {
    font-size: 12px;
  }

  @media (width >= 768px) {
    font-size: 16px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --glare-color: white;
    }
  }
}
</style>
