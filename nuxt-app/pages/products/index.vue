<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <product-card :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
  title: 'Nuxt app | Merch',
  meta: [
    { name: 'description', content: 'Nuxt application Merch page' },
  ],
});

</script>

<style scoped>

</style>