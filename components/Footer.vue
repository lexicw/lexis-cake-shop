<template>
<footer class="bg-zinc-900 text-white text-lg p-4 lg:p-12">
    <div class="container mx-auto">
        <div class="flex flex-row flex-wrap">
            <div class="w-full md:w-1/4 flex flex-col items-center text-center p-4 mx-auto">
                <div class="logo">
                    <img src="/images/cakeshop-logo.svg" class="w-52 saturate-0 mx-auto mb-4" alt="Logo">
                </div>
                <div>
                    <div>123 Main St</div>
                    <div>Awesome, CA 25845</div>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 items-center p-4 hidden lg:flex flex-col">
                <h3 class="font-bold">Store Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                Saturday: 10:00 AM - 4:00 PM<br>
                Sunday: Closed</p>
            </div>
            <div class="w-full md:w-1/4 flex flex-col py-4 px-6 lg:px-12 text-center md:text-left">
                <h3 class="font-bold">Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <h3 class="font-bold mt-5">Social Media</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
            <div class="w-full md:w-1/4 flex flex-col items-center p-4">
                <h3 class="font-bold">Subscribe to our Newsletter</h3>
                <form class="subscribe-form">
                    <input type="email" placeholder="Email" class="border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-pink-400 text-black">
                    <PinkButton text="Subscribe" />
                </form>
            </div>
        </div>
    </div>
</footer>
</template>

  <script>
  import PinkButton from '@/components/PinkButton.vue';

  export default {
    components: {
      PinkButton
    }
  };
  </script>

<style scoped>

</style>