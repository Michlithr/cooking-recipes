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
    <h1 @click="returnHome">Cooking recipes!</h1>
    <hr />
    <button>Sign in / Sign up</button>
    <h2>Navigation</h2>
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
  background: $white__bg;

  h1 {
    margin: 60px 0;
    color: $primary;
  }

  button {
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 20px;
    border: none;
    background: $accent;
    color: $font-light;
    font-size: 16px;
    font-weight: bold;
  }

  .navigation-menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin: 6px 0;
      font-size: 16px;
    }
  }
}
</style>
