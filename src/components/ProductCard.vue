<template>
  <v-card class="product-card" @click="goToProduct">
    <v-img :src="product.image" height="200px" cover />
    <v-card-title class="text-truncate">{{ product.title }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

function goToProduct() {
  router.push(`/item/${props.product.id}`);
}
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
