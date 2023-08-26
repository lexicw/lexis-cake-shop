<template>
  <div class="btn-container">
    <button
      class="btn bg-white ease-in duration-200 text-gray-800 hover:text-black font-extrabold tracking-wider text-lg py-3 lg:py-4 px-8 lg:px-12 mt-3 uppercase"
      @keypress="handleClick"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props from parent component
const props = defineProps({
  text: String
});
</script>