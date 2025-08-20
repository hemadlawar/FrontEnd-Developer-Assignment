<template>
  <v-card class="product-card">
    <!-- Image section with top icons -->
    <div class="image-wrapper">
      <v-img :src="product.image" height="200px" contain @click="goToProduct" />

      <!-- New tag -->
      <div class="badge-left">New</div>

      <!-- New logo (click here adds to favourites) -->
      <div class="badge-center">
        <img :src="Newlogo" alt="Add to favourite" class="icon-img" />
      </div>

      <!-- Like button -->
      <div class="badge-right" @click.stop="addToFavourites(product)">
        <img :src="Likelogo" alt="Like" class="icon-img" />
      </div>
    </div>

    <!-- Product title and price -->
    <v-card-title class="text-truncate">
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle> ${{ product.price }} </v-card-subtitle>

    <!-- Seller & Rating section -->
    <div class="seller-rating">
      <img :src="UserIcon" alt="Seller" class="seller-avatar" />
      <span class="seller-name">Khalid S.</span>
      <v-icon color="green" small>mdi-check-decagram</v-icon>

      <!-- Rating -->
      <div class="rating">
        <v-icon color="yellow darken-2" small>mdi-star</v-icon>
        <span>{{ product.rating.rate }}</span>
        <span class="count">({{ product.rating.count }})</span>
      </div>
    </div>

    <!-- Static Size -->
    <div class="size-tag">Size: Medium</div>

    <!-- ✅ Snackbar Toast -->
    <v-snackbar
      v-model="showToast"
      color="green"
      timeout="3000"
      location="bottom right"
    >
      ✅ Added to favourites! Go to your favorites page to see it.
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFavoritesStore } from "../stores/favoriteStore";
import Newlogo from "../assets/New.png";
import Likelogo from "../assets/Like.png";

const UserIcon = "https://randomuser.me/api/portraits/men/32.jpg";

const router = useRouter();
const favouritesStore = useFavoritesStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// ✅ Toast state
const showToast = ref(false);

function goToProduct() {
  router.push(`/item/${props.product.id}`);
}

function addToFavourites(product) {
  favouritesStore.toggleFavorite(product);
  console.log("Added to favourites:", product.title);

  // Show snackbar
  showToast.value = true;
}
</script>

<style scoped>
.product-card {
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  padding-bottom: 8px;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  position: relative;
}

.badge-left,
.badge-center,
.badge-right {
  position: absolute;
  top: 12px;
  background: white;
  border-radius: 50px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.badge-left {
  left: 10px;
}

.badge-center {
  left: 60px;
}

.badge-right {
  right: 10px;
}

.icon-img {
  width: 24px;
  height: 24px;
}

.seller-rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 0 12px;
}

.seller-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.seller-name {
  font-weight: 600;
  font-size: 14px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  font-size: 14px;
}

.rating .count {
  color: gray;
  font-size: 13px;
}

.size-tag {
  margin: 8px 12px;
  padding: 4px 8px;
  border-radius: 8px;
  background: #f3f3f3;
  font-size: 13px;
  display: inline-block;
}
</style>
