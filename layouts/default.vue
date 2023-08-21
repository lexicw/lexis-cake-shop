<template>
    <body class="bg-gray-100">
      <nav class="bg-white fixed top-0 left-0 shadow-md px-4 py-0 flex justify-center items-center z-10 w-full h-32 overflow-hidden">
        <ul class="flex items-center space-x-4 lg:space-x-20 ml-6 lg:text-xl">
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center">Menu</a>
          </li>
          <li>
            <a href="#" class="">
              <img src="/images/cakeshop-logo.svg" alt="Logo" class="w-48 h-48 my-2" style="visibility: hidden;" />
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-800 items-center">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="logo-div bg-transparent fixed top-0 left-500 z-20">
        <a href="#" class="flex items-center">
              <img src="/images/cakeshop-logo.svg" alt="Logo" class="w-56 h-52 rounded-full p-2 select-none" />
            </a>
      </div>
      <main>
        <slot />
      </main>
    </body>
</template>

<style>
 body {
    padding-top: 45px;
 }

 .logo-div {
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translate(-50%, -50%);
 }
</style>