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
              <h1 class="text-6xl" data-aos="fade-up" data-aos-duration="1200">Elegance in Every Bite</h1>
              <p class="text-2xl mt-3" data-aos="fade-up" data-aos-duration="1500">Lorem ipsum Dolor</p>
              <div><PinkButton /></div>
            </div>
        </div>
      </div>
      <div class="carousel-controls flex justify-between mt-2">
        <button @click="prevSlide"><span class="material-symbols-outlined arrow-back">arrow_back_ios</span></button>
        <button @click="nextSlide"><span class="material-symbols-outlined arrow-forward">arrow_forward_ios</span></button>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import the CSS

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
    mounted() {
    // Initialize AOS when the component is mounted
    AOS.init();
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
    background-color: #000;
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
  color: white;
  z-index: 2; /* Place the text above the background and overlay */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
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
    font-size: 3rem !important;
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

  </style>