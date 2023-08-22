<template>
    <body>
      <nav :class="[
      'main-menu',
      'bg-white',
      'fixed',
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
    <a href="#" class="absolute top-3 left-4 lg:hidden p-4"><span class="material-symbols-outlined hamburger-menu">menu</span></a>
        <ul class="nav-items hidden lg:flex flex items-center space-x-4 lg:space-x-20 ml-6 lg:text-lg">
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center uppercase">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center uppercase">Menu</a>
          </li>
          <li>
            <a href="#" class="">
              <img src="/images/cakeshop-logo.svg" alt="Logo" class="w-48 h-48 my-2" style="visibility: hidden;" />
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center uppercase">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center uppercase">Contact</a>
          </li>
        </ul>
        <a href="#" class="absolute top-4 right-3 p-4"><span class="material-symbols-outlined search-icon">search</span></a>
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
    </body>
</template>

<script>
export default {
  data() {
    return {
      isMenuShrunk: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isMenuShrunk = true;
      } else {
        this.isMenuShrunk = false;
      }
    },
  },
};
</script>

<style>
.main-menu {
  height: 7.6rem;
  transition: height 0.6s ease; /* Add a smooth transition */
}

.main-menu.shrunk {
  height: 5.6rem;
}

.fixed-logo {
  width: 14rem;
  height: 13rem;
  transition: height 0.6s ease; /* Add a smooth transition */
}

.fixed-logo.shrunk {
    width: 11rem;
    height: 8rem;
}
 body {
    padding-top: 45px;
 }

 .logo-div {
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease; 
 }

  .logo-div.shrunk {
    top: 55px;
 }

.nav-items a {
  position: relative;
  text-decoration: none;
  color: #333; /* Adjust the color as needed */
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

.material-symbols-outlined.search-icon {
  font-size: 2rem;
}

.material-symbols-outlined.hamburger-menu {
  font-size: 2rem;
}

@media screen and (max-width: 950px) {
.main-menu {
  height: 5.6rem;
}

.fixed-logo {
    width: 11rem;
    height: 8rem;
}

  .logo-div {
    top: 55px;
 }

}
</style>