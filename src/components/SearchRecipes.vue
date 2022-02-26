<script setup lang="ts">
import { ref } from "vue";

const searchPhrase = ref("");
</script>

<template>
  <div class="input-container">
    <FontAwesomeIcon class="icon" icon="search" />
    <input v-model="searchPhrase" placeholder="write your search phrase here" />
  </div>
</template>

<style lang="scss">
.input-container {
  max-width: 500px;
  margin: 60px 0;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid grey;
  border-radius: 20px;
  font-size: 32px;
  background: $white__bg;
  box-shadow: 1px grey;

  .icon {
    margin: 8px;
  }

  input {
    margin: 8px;
    width: 300px;
    border: none;
  }

  input:focus {
    outline: none;
  }
}
</style>
