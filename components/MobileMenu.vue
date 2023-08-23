<template>
  <div class="absolute top-3 left-4 p-4 block lg:hidden uppercase">
    <div :class="['mobile-menu', { 'mobile-menu-open': isOpen }]">
      <a href="#" class="closebtn" @click="closeMenu">&times;</a>
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>

    <div class="menu-toggle" @click="openMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
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
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 5.5rem;
  left: 0;
  background-color: #FFF;
  overflow-x: hidden;
  transition: all 0.5s;
  padding-top: 60px;
  text-align: center;
  transform: translate(-100%);
}

.mobile-menu-open {
    transform: translate(0%);
}

.menu-toggle .bar {
  width: 25px;
  height: 2px;
  background-color: #000;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  display: block;
}

.menu-toggle {
  margin-right: 25px;
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
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-open ~ .menu-toggle .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #000;
  display: block;
}

.mobile-menu a:hover {
  color: #f1f1f1;
}

.mobile-menu .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .mobile-menu {
    padding-top: 15px;
  }
  .mobile-menu a {
    font-size: 18px;
  }
}
</style>