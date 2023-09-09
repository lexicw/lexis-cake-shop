<template>
  <div class="absolute top-3 left-4 p-4 block lg:hidden uppercase">
    <div :class="['mobile-menu', 'text-xl', { 'mobile-menu-open': isOpen }]">
    <Transition name="slide-fade">
      <ul class="mobile-links list-none text-gray-600" v-if="isOpen">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </Transition>
    </div>

    <button type="button" class="menu-toggle" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  if (isOpen.value) {
    closeMenu();
  } else {
    openMenu();
  }
};

const openMenu = () => {
  // Implement your openMenu logic here
  isOpen.value = true;
  // document.body.classList.add("overflow-hidden")
  useHead({ bodyAttrs: { style: 'overflow: hidden' }});
};

const closeMenu = () => {
  // Implement your closeMenu logic here
  isOpen.value = false;
  useHead({ bodyAttrs: { style: 'overflow: auto' }});
      // document.body.classList.remove("overflow-hidden")
};
</script>

<style scoped>
.mobile-menu {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 5.5rem;
  left: 0;
  background-color: rgba(255,255,255,1);
  overflow-x: hidden;
  transition: all 0.5s;
  text-align: center;
  transform: translate(-100%);
  padding-top: 45px;
}

.mobile-menu-open {
    transform: translate(0%);
    overflow: hidden;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color:  rgb(75 85 99 / 1);
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  display: block;
}

.menu-toggle {
  width: 25px;
  height: 25px;
}

.menu-toggle:hover {
  cursor: pointer;
}

.mobile-menu-open ~ .menu-toggle .bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-open ~ .menu-toggle .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-menu-open ~ .menu-toggle .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu a {
  padding: 16px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid rgba(0,0,0,0.15);
}

.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>