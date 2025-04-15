<script setup lang="ts">
import { ghosts } from '~/assets/ghost-evidences-data.json'
import { useEvidencesStore } from '~/stores/evidences.store'

const evidenceState = useEvidencesStore()
</script>

<template>
  <div class="wrapper">
    <div
      v-for="ghost in ghosts"
      :key="ghost"
      :class="['ghost', !evidenceState.possibleGhosts.includes(ghost) && 'transparent']"
    >
      {{ ghost }}
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
  justify-content: center;

  padding: 4px;
}

.ghost {
  user-select: none;

  padding: 8px;

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

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --glare-color: white;
    }
  }
}
</style>
