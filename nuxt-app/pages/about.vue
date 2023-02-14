<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia quae consectetur nihil pariatur
      mollitia dignissimos nostrum asperiores corporis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia quae consectetur nihil pariatur
      mollitia dignissimos nostrum asperiores corporis.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = useFetch('/api/ninja?name=Kakasi', {
  method: 'POST',
  body: {
    age: 30
  }
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>