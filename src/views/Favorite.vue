<template>
  <div class="favorites-page">
    <h1>Favorite Page</h1>
    <div v-if="favouritesStore.items.length === 0" class="empty">
      No favorite products yet.
    </div>
    <div class="favorites-grid">
      <ProductCard
        v-for="product in favouritesStore.items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "../stores/favoriteStore";
import ProductCard from "../components/ProductCard.vue";

const favouritesStore = useFavoritesStore();
</script>

<style scoped>
.favorites-page {
  padding: 24px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.empty {
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
  color: gray;
}
</style>
