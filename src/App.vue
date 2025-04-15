<script setup lang="ts">
import DifficultyPicker from '~/components/DifficultyPicker.vue'
import EvidencePicker from '~/components/EvidencePicker.vue'
import PossibleGhosts from '~/components/PossibleGhosts.vue'
</script>

<template>
  <main class="main">
    <h1 class="heading">Phasma Calc</h1>
    <div class="app">
      <DifficultyPicker />
      <EvidencePicker />
      <PossibleGhosts />
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: #ffffff80;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 6px 3px #ccc;
}

.heading {
  margin: 0;
  padding: 2px;
  text-align: center;
}

.app {
  display: flex;
  flex-direction: column;
  padding: 2px;

  @media (width >= 425px) {
    gap: 4px;
    padding: 4px;
  }

  @media (width >= 768px) {
    gap: 8px;
    padding: 8px;
  }
}
</style>
