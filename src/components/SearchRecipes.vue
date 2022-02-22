<template>
  <div class="recipes-container">
    <div class="input-container">
      <FontAwesomeIcon class="icon" icon="search" />
      <input
        v-model="searchPhrase"
        placeholder="write your search phrase here"
      />
    </div>
    <p></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchPhrase = ref("");
</script>

<style lang="scss">
.recipes-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: $main__bg;
}

.input-container {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  border-radius: 20px;
  font-size: 32px;
  background: $white__bg;

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
