<script setup lang="ts">
import { getGhostEvidencesData } from "~/composables/get-ghost-evidences-data";
import { EvidenceStatus } from "~/utils/evidence-status";

const difficulty = useDifficulty();
const evidences = useEvidences();

await callOnce(async () => {
  const { difficulties, evidences: evidenceNames } = getGhostEvidencesData();

  difficulty.value = difficulties[1].name;
  evidences.value = Object.fromEntries(evidenceNames.map((evidence) => [evidence, EvidenceStatus.neutral]));
});

useSeoMeta({
  ogImage: "/favicon.ico",
});

useHead({
  htmlAttrs: { lang: "ru" },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <div class="app">
    <main class="main">
      <h1 class="heading">Phasma Calc</h1>
      <div class="content-wrapper">
        <DifficultyPicker />
        <EvidencePicker />
        <PossibleGhosts />
      </div>
    </main>
  </div>
</template>

<style scoped>
@property --glare-color {
  inherits: false;
  initial-value: transparent;
  syntax: "<color>";
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100dvh;
  padding: 4px;

  font-family: Inter, sans-serif;

  background-image: url("~/assets/background.webp");
  background-size: cover;
}

.main {
  background-color: #ffffff80;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 6px 3px #ccc;
}

.heading {
  margin: 8px 0 0;
  padding: 4px;
  text-align: center;
}

.content-wrapper {
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
