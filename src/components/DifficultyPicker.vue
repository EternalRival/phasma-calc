<script setup lang="ts">
import { difficulties } from '~/assets/ghost-evidences-data.json'
import { useEvidencesStore } from '~/stores/evidences.store'

const evidencesStore = useEvidencesStore()
</script>

<template>
  <div>
    <div class="label">Сложность</div>
    <div class="diff-list">
      <button
        v-for="(difficulty, i) in difficulties"
        :class="['diff-button', evidencesStore.difficulty === difficulty && 'selected']"
        @click="evidencesStore.$patch({ difficulty })"
        :disabled="i > 2"
        :key="difficulty"
      >
        {{ difficulty }}
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

.diff-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;

  @media (width >= 425px) {
    gap: 4px;
  }
}

.diff-button {
  cursor: pointer;
  user-select: none;

  padding: 12px 6px;
  border: none;

  font-size: 9px;

  background-color: #ffffff80;
  background-image: linear-gradient(
    to left top,
    transparent 25%,
    var(--glare-color) 50%,
    transparent 75%
  );

  transition-duration: 0.3s;
  transition-property: --glare-color, background-color;

  &.selected {
    background-color: #00ff0080;
  }

  &:disabled {
    pointer-events: none;
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
