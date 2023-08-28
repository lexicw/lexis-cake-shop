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
    <div class="bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center py-3 lg:py-16">
        <ReviewCard title="First Card Title" content="First Card Content" />
        <ReviewCard title="Second Card Title" content="Second Card Content" />
        <ReviewCard title="Third Card Title" content="Third Card Content" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Card from '@/components/Card.vue';
</script>


