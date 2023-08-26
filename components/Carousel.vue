<template>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <div class="carousel-container">
      <div class="carousel">
        <div class="carousel-overlay"></div>
        <div class="carousel-item">
          <transition name="fade" mode="out-in">
            <div
              :key="currentIndex"
              class="carousel-background"
              :style="{ backgroundImage: `url('${items[currentIndex].image}')` }"
            ></div>
          </transition>
          <div class="overlay-text">
              <h1 class="text-4xl lg:text-8xl font-bold fancy-font" data-aos="fade-up" data-aos-duration="1200">Elegance in Every Bite</h1>
              <p class="text-xl lg:text-2xl mt-1 lg:mt-3" data-aos="fade-up" data-aos-duration="1500">Lorem ipsum Dolor</p>
              <div class="w-2/3 lg:w-1/3"><PinkButton text="Learn More" /></div>
            </div>
        </div>
      </div>
      <div class="carousel-controls flex justify-between">
        <button @click="prevSlide"><span class="material-symbols-outlined arrow-back">arrow_back_ios</span></button>
        <button @click="nextSlide"><span class="material-symbols-outlined arrow-forward">arrow_forward_ios</span></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import PinkButton from '@/components/PinkButton.vue';
  import { ref } from 'vue';
  
  const items = ref([
    { id: 1, image: '/images/wedding-cake.webp' },
    { id: 2, image: '/images/misc-cupcakes.webp' },
  ]);
  
  const currentIndex = ref(0);
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
  };
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative; /* Ensure relative positioning for the container */
  }
  
  .carousel {
    position: relative; /* Ensure relative positioning for the carousel */
    background-color: #FFF;
  }
  
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

 .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(249,168,212,0) 50%, rgba(249,168,212,0.5) 100%);
    pointer-events: none;
    z-index: 1; 
 }

 .overlay-text {
  position: absolute;
  bottom: 4%;
  left: 10%;
  transform: translate(-0%, -50%);
  color: white;
  z-index: 2; /* Place the text above the background and overlay */
}

  .carousel-background {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 16 / 7;
  width: 100%;
}
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-in-out;
  }

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
  .fade-enter-to {
    opacity: 1;
  }

  .carousel-controls {
    z-index: 2;
  }
  
  .carousel-controls button {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
  }

  .arrow-back, .arrow-forward {
    font-size: 3rem;
    position: absolute;
    top: 50%;
    opacity: 0;
    transition: all .2s ease-in-out;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }


  .carousel-container:hover .arrow-back, .carousel-container:hover .arrow-forward  {
    opacity: 1;
    transform: translateY(-50%);
  }

  .arrow-back {
    left: 5%;
  }

  .arrow-forward {
    right: 5%;
  }

  @media screen and (max-width: 1700px) {
    .carousel-background {
        aspect-ratio: 15 / 7;
    }
  }

  @media screen and (max-width: 1300px) {
    .carousel-background {
        aspect-ratio: 3 / 2;
    }
  }

@media screen and (max-width: 950px) {
    .carousel-item {
    justify-content: bottom;
    align-items: bottom;
  }
  .carousel-background {
    background-attachment: scroll;
    aspect-ratio: 4 / 3;
    background-position: bottom;
}
 .overlay-text {
  bottom: 0%;
  left: 12%;
  transform: translate(-0%, -10%);
  }
    .arrow-back, .arrow-forward {
    font-size: 2rem;
    opacity: 1;
    transform: translateY(-50%);
    top: 45%;
  }
    .arrow-back {
    left: 3%;
  }

  .arrow-forward {
    right: 3%;
  }
}
  </style>