<template>
  <div>
    <h3>Product details for {{ id }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut quae blanditiis distinctio rem laboriosam
      officia animi ex? Facere nisi laborum enim incidunt. Fuga a cum dolorem illum eaque nam.</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped>

</style>