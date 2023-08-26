<template>
  
    <div>
      <nav :class="[
      'main-menu',
      'bg-white',
      'top-0',
      'left-0',
      'shadow-md',
      'px-4',
      'py-0',
      'flex',
      'justify-center',
      'items-center',
      'z-10',
      'w-full',
      'overflow-hidden',
      { 'shrunk': isMenuShrunk }
    ]">
    <MobileMenu />
        <ul class="nav-items hidden lg:flex flex items-center space-x-4 lg:space-x-20 ml-6 lg:text-md" :class="{ 'shrunk': isMenuShrunk }">
          <li>
            <a href="#" class="text-gray-600 hover:text-black items-center uppercase">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black items-center uppercase">Menu</a>
          </li>
          <li>
            <span class="">
              <img src="/images/cakeshop-logo.svg" alt="Logo" class="w-48 h-0 my-2" style="visibility: hidden;" />
            </span>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black items-center uppercase">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black items-center uppercase">Contact</a>
          </li>
        </ul>
        <a href="#" class="absolute top-3 lg:top-5 right-4 p-4"><span class="material-symbols-outlined search-icon">search</span></a>
      </nav>

<div class="logo-div bg-transparent fixed top-75 left-1/2 z-20" :class="{ 'shrunk': isMenuShrunk }" ref="logoDiv">
  <a href="#" class="flex items-center" tabindex="-1">
    <img
      src="/images/cakeshop-logo.svg"
      alt="Logo"
      :class="[
        'fixed-logo',
        'rounded-full',
        'p-2',
        'select-none',
        { 'shrunk': isMenuShrunk }
      ]"
    />
  </a>
</div>
      <main>
        <slot />
      </main>
    </div>
    <Footer />
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuShrunk = ref(false);
const prevScrollY = ref(0);
const scrollTimeout = ref(null);

const handleScroll = () => {
  clearTimeout(scrollTimeout.value); // Clear previous timeout

  scrollTimeout.value = setTimeout(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY !== prevScrollY.value) {
      if (currentScrollY > 100) {
        isMenuShrunk.value = true;
      } else {
        isMenuShrunk.value = false;
      }

      prevScrollY.value = currentScrollY;
    }
  }, 50); // Adjust the debounce time as needed
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  AOS.init();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
 body {
    font-family: 'PT Sans', sans-serif;
    padding: 0;
    padding-top: 5.6rem;
    margin: 0;
 }

 .main-menu {
  position: fixed;
}

.nav-items {
  padding-top: 50px;
  padding-bottom: 50px;
  transition: all 0.6s ease;
}

.nav-items.shrunk {
  padding-top: 34px;
  padding-bottom: 34px;
  transition: all 0.6s ease;
}


.fixed-logo {
  width: 14rem;
  transition: all 0.6s ease; /* Add a smooth transition */
  overflow: hidden;
  overflow-anchor: none;
}

.fixed-logo.shrunk {
    transform: scale(0.7);
    transition: all 0.6s ease;
}

 .fancy-font {
  font-family: 'Caveat', sans-serif;
  }

 .logo-div {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease; 
 }

  .logo-div.shrunk {
    top: 60px;
 }

.nav-items a {
  position: relative;
  text-decoration: none;
}


.nav-items a::before,
.nav-items a::after {
  content: '';
  position: absolute;
  background-color: #f9a8d4;
  transition: transform 0.6s ease;
  transform: scale(0, 1);
}

.nav-items a::before {
  top: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  transform-origin: left;
}

.nav-items a::after {
  bottom: -5px;
  right: 0;
  width: 100%;
  height: 2px;
  transform-origin: right;
}

.nav-items a:hover::before,
.nav-items a:hover::after {
  transform: scale(1);
}

.material-symbols-outlined {
  color: #FFF;
}

.material-symbols-outlined.search-icon {
  font-size: 2rem;
  color: rgb(75 85 99 / 1);
}

.material-symbols-outlined.hamburger-menu {
  font-size: 2rem;
  color: rgb(75 85 99 / 1);
}

@media screen and (max-width: 950px) {
body {
  padding-top: 5.6rem;
}

.main-menu {
  height: 5.7rem;
  position: fixed;
}

.fixed-logo {
    width: 11rem;
    height: 7.5rem;
}

.fixed-logo.shrunk {
  transform: none;
  transition: all 0.6s ease;

}

  .logo-div {
    top: 60px;
 }

}
</style>