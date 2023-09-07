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
      <div class="flex flex-wrap grid gap-2 lg:gap-12 grid-cols-1 lg:grid-cols-3 items-center py-6 lg:py-16">
        <ReviewCard title="A Slice of Heaven" content="I couldn't resist the temptation and ordered the Red Velvet Delight. It was moist, decadent, and left me craving for more. I have never had any red velvet treat that compares. Thanks for the heavenly treat!" reviewer="Emily" />
        <ReviewCard title="Amazing Quality, Especially for the Price" content="The Chocolate Dream cake I ordered for my birthday was an absolute delight! It was beautifully decorated and tasted like pure perfection. I'm already planning to order another one for my next celebration!" reviewer="David" />
        <ReviewCard title="A Hidden Gem" content="The Lemon Zest cake I had from here was a citrusy explosion of flavor! I was blown away by the freshness and balance of flavors. This place is a hidden gem for dessert lovers." reviewer="Sarah" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Card from '@/components/Card.vue';
</script>


