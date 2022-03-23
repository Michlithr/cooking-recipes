<script setup lang="ts">
const props = defineProps<{
  directions: string[];
}>();
</script>

<template>
  <h1>Directions</h1>
  <ol>
    <li v-for="(direction, key) in props.directions" :key="key">
      <div class="direction">
        <p>{{ direction }}</p>
      </div>
    </li>
  </ol>
</template>

<style lang="scss">
h1 {
  margin: 12px 0 0 0;
}

ol {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  width: 40vw;

  li {
    font-size: 24px;
    font-weight: bold;
  }

  .direction {
    display: flex;
    margin: 10px 0;
    font-size: 18px;

    p {
      padding: 0;
      margin: 0 6px 0 0;
      font-weight: normal;
    }
  }
}
</style>
