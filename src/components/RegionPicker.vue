<template>
  <div class="region-images-container">
    <div class="image">
      <img src="@/assets/americanFood.jpg" alt="american food image" />
      <p>American Food</p>
    </div>
    <div class="image">
      <img src="@/assets/asianFood.jpg" alt="asian food image" />
      <p>Asian Food</p>
    </div>
    <div class="image">
      <img src="@/assets/englishFood.jpg" alt="english food image" />
      <p>English Food</p>
    </div>
    <div class="image">
      <img src="@/assets/italianFood.jpg" alt="italian food image" />
      <p>Italian Food</p>
    </div>
    <div class="image">
      <img src="@/assets/mexicanFood.jpg" alt="mexican food image" />
      <p>Mexican Food</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.region-images-container {
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;

  .image {
    position: relative;
    text-align: center;
    justify-content: center;

    img {
      width: 140px;
      height: 140px;
      margin: 12px;
      border-radius: 35%;
      filter: brightness(60%);
    }

    p {
      padding: 0;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
    }
  }
}
</style>
