<script setup lang="ts">
import { ghosts } from '~/assets/ghost-evidences-data.json'
import { useEvidencesStore } from '~/stores/evidences.store'

const evidenceState = useEvidencesStore()
</script>

<template>
  <div>
    <div class="label">Призраки</div>
    <div class="ghosts">
      <div
        v-for="ghost in ghosts"
        :key="ghost"
        :class="['ghost', !evidenceState.possibleGhosts.includes(ghost) && 'transparent']"
      >
        {{ ghost }}
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
