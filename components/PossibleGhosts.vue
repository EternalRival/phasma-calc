<script setup lang="ts">
const {ghosts} = getGhostEvidencesData();

const evidencesList = useEvidences();

const ghostEvidencesMap = new Map (ghosts.map(ghost=>[ghost.name,ghost.evidences]))

const possibleGhosts = computed(() => {
  const possibleGhostsMap = new Map(ghostEvidencesMap);

  Object.entries(evidencesList.value).forEach(([evidence, evidenceStatus]) => {
    possibleGhostsMap.forEach((evidences, ghost) => {
      const hasEvidence = evidences.includes(evidence);

      if (evidenceStatus === EvidenceStatus[hasEvidence ? 'negative' : 'positive']) {
        possibleGhostsMap.delete(ghost);
      }
    });
  });

  return Array.from(possibleGhostsMap.keys());
});

</script>

<template>
  <div>
    <div class="label">Призраки</div>
    <div class="ghosts">
      <div
        v-for="{ name } in ghosts"
        :key="name"
        :class="['ghost', !possibleGhosts.includes(name) && 'transparent']"
      >
        {{ name }}
      </div>
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

.ghosts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
  justify-content: center;
}

.ghost {
  user-select: none;

  padding: 12px 6px;

  font-size: 9px;
  text-align: center;

  opacity: 1;
  background-color: #ffffff80;
  background-image: linear-gradient(
    to left top,
    transparent 25%,
    var(--glare-color) 50%,
    transparent 75%
  );

  transition-duration: 0.3s;
  transition-property: --glare-color, background-color, opacity;

  &.transparent {
    opacity: 0.25;
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
      --glare-color: #eee;
    }
  }
}
</style>
