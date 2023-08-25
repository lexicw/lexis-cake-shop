<template>
  <div>
    <Carousel />
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center mt-3 lg:mt-16">
        <Card title="Cakes" imageUrl="/images/cake.jpg" />
        <Card title="Cupcakes" imageUrl="/images/cupcakes.jpg" />
        <Card title="Other Treats" imageUrl="/images/othersweets.jpg" />
      </div>
    </div>
    <StripeSection />

  </div>

  <hr class="border-t-2 my-8" />
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  }
};
</script>


