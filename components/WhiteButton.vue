<template>
  <div class="btn-container">
    <button
      class="btn bg-white ease-in duration-200 text-black font-extrabold text-lg py-3 lg:py-4 px-8 lg:px-12 mt-3 uppercase"
      @keypress="handleClick"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
    export default {
      props: {
        text: String
      },
    };
</script>