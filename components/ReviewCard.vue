<template>
    <div class="review-card mb-3 w-full lg:mx-auto sm:mb-0 border border-gray-200 text-center relative shadow-lg bg-white">
      <div class="review-stars text-yellow-500 flex justify-center mt-4 lg:mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill inline-flex m-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill inline-flex m-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill inline-flex m-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill inline-flex m-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill inline-flex m-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </div>
      <div class="review-card-content absolute top-0 inset-0 flex flex-col justify-center items-center p-4">
        <h4 class="text-pink-400 text-3xl font-bold my-1 lg:my-3 px-4 lg:px-12">"{{ title }}"</h4>
        <div class="px-4 lg:px-12 text-lg text-gray-600">{{ content }}</div>
      </div>
      <div class="text-xl  absolute bottom-0 inset-0 flex flex-col justify-end items-center font-bold py-6 text-gray-600">{{ reviewer }}</div>
    </div>
  </template>

<script setup>
import { defineProps } from 'vue';

const { title, content } = defineProps({
  title: String,
  content: String,
  reviewer: String
});
</script>

<style scoped>
.review-card {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
}

.review-card:hover .review-card-content {
  background-color: rgba(0, 0, 0, 0);
}

.review-card-content {
  color: #000;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  transition: all 0.5s ease;
}

.review-card svg:hover {
  transform: scale(1.1);
}

.star {
    color: #ecc94b;
}
</style>