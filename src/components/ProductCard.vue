<template>
  <v-card class="product-card" @click="goToProduct">
    <div class="image-wrapper">
      <v-img :src="product.image" height="200px" contain />

      <!-- New Logo (left) -->
      <img :src="Newlogo" alt="New" class="icon-left" />

      <!-- Like Logo (right) -->
      <img :src="Likelogo" alt="Like" class="icon-right" />
    </div>

    <v-card-title class="text-truncate">
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import Newlogo from "../assets/New.png"; // ✅ import image here
import Likelogo from "../assets/Like.png"; // ✅ import image here

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

.image-wrapper {
  position: relative;
}

.icon-left,
.icon-right {
  position: absolute;
  top: 12px;
  width: 40px; /* ⬅️ bigger size */
  height: 40px; /* ⬅️ bigger size */
  background: white;
  border-radius: 50%;
  padding: 6px; /* ⬅️ slightly more padding */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.icon-left {
  left: 12px;
}

.icon-right {
  right: 12px;
}
</style>
