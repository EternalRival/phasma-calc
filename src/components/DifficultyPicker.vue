<script setup lang="ts">
import { difficulties } from '~/assets/ghost-evidences-data.json'
import { useEvidencesStore } from '~/stores/evidences.store'

const evidencesStore = useEvidencesStore()
</script>

<template>
  <div class="wrapper">
    <div class="label">Выберите сложность</div>
    <div class="diff-list">
      <button
        v-for="difficulty in difficulties"
        :class="['diff-button', evidencesStore.difficulty === difficulty && 'selected']"
        :key="difficulty"
        @click="evidencesStore.$patch({ difficulty })"
      >
        {{ difficulty }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 4px;
}

.label {
  user-select: none;

  padding: 8px;

  font-size: large;
  font-weight: 600;
  text-align: center;
}

.diff-list {
  display: flex;
  gap: 8px;
}

.diff-button {
  cursor: pointer;
  user-select: none;

  padding: 8px;
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

  &.selected {
    background-color: #00ff0080;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --glare-color: white;
    }
  }
}
</style>
