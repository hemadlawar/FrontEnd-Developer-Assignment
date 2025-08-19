<template>
  <v-card class="product-card">
    <v-img :src="product.image" height="200px" cover />
    <v-card-title class="text-truncate">{{ product.title }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
  </v-card>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
</style>
