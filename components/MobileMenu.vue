<template>
  <div class="absolute top-3 left-4 p-4 block lg:hidden uppercase">
    <div :class="['mobile-menu', 'text-xl', { 'mobile-menu-open': isOpen }]">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">About</a>
      <a href="#">Contact</a>


    </div>

    <button type="button" class="menu-toggle" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </div>
</template>


<script>

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    openMenu() {
      // Implement your openMenu logic here
      this.isOpen = true;
      document.body.classList.add("overflow-hidden")
    },
    closeMenu() {
      // Implement your closeMenu logic here
      this.isOpen = false;
      document.body.classList.remove("overflow-hidden")
    }
  }
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
  background-color: rgba(255,255,255,0.9);
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
  background-color: #000;
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
  color: #000;
  display: block;
}

</style>