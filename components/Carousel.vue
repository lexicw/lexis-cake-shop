<template>
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
              <h1 class="text-6xl">Lorem Ipsum</h1>
              <p class="text-2xl mt-3">Here's some content over the image.</p>
            </div>
        </div>
      </div>
      <div class="carousel-controls flex justify-between mt-2">
        <button @click="prevSlide" class="text-2xl">&lt;</button>
        <button @click="nextSlide" class="text-2xl">&gt;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, image: '/images/elegant-cake.webp' },
          { id: 2, image: '/images/misc-cupcakes.webp' },
          { id: 3, image: '/images/yummy-cake.webp' },
          // Add more items as needed
        ],
        currentIndex: 0,
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
    },
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
background: linear-gradient(180deg, rgba(249,168,212,0) 50%, rgba(249,168,212,0.4) 100%);
  pointer-events: none;
  z-index: 1; 
 }

 .overlay-text {
  position: absolute;
  bottom: 10%;
  left: 10%;
  transform: translate(-0%, -50%);
  text-align: center;
  color: white;
  z-index: 2; /* Place the text above the background and overlay */
}

  .carousel-background {
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
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
  
  .carousel-controls button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }


  </style>