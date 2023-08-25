<template>
<div class="stripe-bg mt-16">
    <p class="py-32 py-lg-40 text-center text-6xl lg:text-8xl text-white"><div class="fancy-font font-extrabold" data-aos="zoom-in-up" data-aos-duration="1000">Life is uncertain. Eat Dessert first!</div>
      <WhiteButton text="Our Menu" class="mt-3" />
    </p>
  </div>
</template>

<script>
import WhiteButton from '@/components/WhiteButton.vue';

export default {
  components: {
    WhiteButton
  }
};
</script>


<style scoped>
  .stripe-bg {
    background-image: linear-gradient(90deg, #f077ae 16.67%, #f49ac0 16.67%, #f49ac0 33.33%, #fab1d0 33.33%, #fab1d0 50%, #f077ae 50%, #f077ae 66.67%, #f49ac0 66.67%, #f49ac0 83.33%, #fab1d0 83.33%, #fab1d0 100%);
    background-size: 300.00px 300.00px;
  }

</style>