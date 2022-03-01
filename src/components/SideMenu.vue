<script setup lang="ts">
import { RouteNames } from "@/enums/RouteNames";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function returnHome() {
  if (route.path !== "/") router.replace({ name: RouteNames.Home });
}
</script>

<template>
  <div class="menu-container">
    <h2 @click="returnHome">Cooking recipes!</h2>
    <hr />
    <button>Sign in / Sign up</button>
    <h3>Navigation</h3>
    <nav class="navigation-menu">
      <a>Recipes</a>
      <a>Meal creator</a>
      <a>Account</a>
    </nav>
  </div>
</template>

<style lang="scss">
.menu-container {
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: $header__bg;
  box-shadow: 1px gray;

  button {
    padding: 12px;
    margin: 14px 0;
    border-radius: 20px;
    border: none;
    box-shadow: 2px 2px darkviolet;
    background: blueviolet;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
}

.navigation-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 6px 0;
  }
}
</style>
