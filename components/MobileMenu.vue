<template>
  <div class="absolute top-3 left-4 p-4 block lg:hidden">
    <div :class="['mobile-menu', { 'mobile-menu-open': isOpen }]">
      <a href="#" class="closebtn" @click="closeMenu">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <span class="material-symbols-outlined hamburger-menu" @click="openMenu">menu</span>
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
  width: 0%;
  position: fixed;
  z-index: 1;
  top: 5.5rem;
  left: 0;
  background-color: #FFF;
  overflow-x: hidden;
  transition: all 0.5s;
  padding-top: 60px;
  text-align: center;
  tranform: translateY(-500px);
}

.mobile-menu-open {
    width: 100%;
}

.mobile-menu a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #000;
  display: block;
  transition: 0.3s;
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