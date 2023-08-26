<template>
  <div class="btn-container">
    <button
      class="btn bg-pink-300 hover:bg-pink-200 active:bg-pink-200 ease-in duration-200 text-gray-800 hover:text-black tracking-wider font-extrabold text-md py-3 lg:py-4 px-8 lg:px-12 mt-3 uppercase w-full"
      @keypress="handleClick"
      @click="handleClick"
    >
      {{ text }}
      <span v-if="showRipple" class="ripple" :style="rippleStyle"></span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showRipple = ref(false);
const rippleStyle = ref({});

const handleClick = (event) => {
  if (showRipple.value) {
    return;
  }

  const buttonRect = event.currentTarget.getBoundingClientRect();
  const rippleSize = Math.max(buttonRect.width, buttonRect.height);

  rippleStyle.value = {
    width: `${rippleSize}px`,
    height: `${rippleSize}px`,
    left: `${event.clientX - buttonRect.left - rippleSize / 2}px`,
    top: `${event.clientY - buttonRect.top - rippleSize / 2}px`,
  };

  showRipple.value = true;

  setTimeout(() => {
    showRipple.value = false;
  }, 800);
};

const props = defineProps({
  text: String
});
</script>

<style scoped>
.btn {
  white-space: normal;
  overflow: hidden;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: relative; /* Ensure that the ripple is positioned relative to the button */
  -webkit-tap-highlight-color: transparent;
}

.ripple {
  background: radial-gradient(circle, rgba(255, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: animate 1s linear;
}

@keyframes animate {
  0% {
    transform: scale(0);
    opacity: 0.4;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>