<script setup lang="ts">
import type { Measures } from "@/enums/Measures";

const props = defineProps<{
  value: number;
  measure: Measures;
}>();
</script>

<template>
  <div class="measure">
    <h1>{{ props.value }}</h1>
    <h2>{{ props.measure }}</h2>
  </div>
</template>

<style lang="scss">
.measure {
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    margin: 0 !important;
    font-size: 22px;
    font-weight: normal;
  }

  h2 {
    margin: 12px 0 0 0 !important;
    margin-top: 12px !important;
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
