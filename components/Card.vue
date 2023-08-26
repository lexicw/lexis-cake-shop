<template>
  <a href="#" class="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-6 lg:mx-auto sm:mb-0 border border-gray-500 text-center relative shadow-lg">
    <div class="card-image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
    <div class="card-content absolute inset-0 flex flex-col justify-end items-center p-4">
      <PinkButton :text="title" />
    </div>
  </a>
</template>

<script setup>
import PinkButton from '@/components/PinkButton.vue';
import { defineProps } from 'vue';

const { title, imageUrl } = defineProps({
  title: String,
  imageUrl: String
});
</script>

<style scoped>
.card {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
}

.card:hover .card-image {
  transform: scale(1);
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  transform: scale(1.2);
}

.card:hover .card-content {
  background-color: rgba(0, 0, 0, 0);
}

.card-content {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;
  transition: all 0.5s ease;
}

@media screen and (max-width: 950px) {
  .card-content {
    background-color: rgba(255, 255, 255, 0);
    }
    .card-image {
      transform: scale(1);
    }
}
</style>