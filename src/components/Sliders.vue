<template>
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="(product, i) in products" :key="i">
      <v-card
        class="ma-3 pa-4 d-flex align-center product-card"
        :style="{ backgroundColor: product.bgColor, color: 'white' }"
        elevation="3"
      >
        <v-row no-gutters class="w-100">
          <!-- Left side (Details) -->
          <v-col
            cols="12"
            sm="7"
            class="d-flex flex-column justify-center text-left"
          >
            <h4 class="font-weight-bold mb-2">{{ product.brand }}</h4>
            <p class="mb-1">{{ product.name }}</p>
            <h3 class="font-weight-bold mb-2">{{ product.price }}</h3>
            <div>
              <span v-for="size in product.sizes" :key="size" class="mr-2">{{
                size
              }}</span>
            </div>
          </v-col>

          <!-- Right side (Image) -->
          <v-col cols="12" sm="5" class="d-flex justify-center align-center">
            <v-img :src="product.image" class="product-image" cover />
          </v-col>
        </v-row>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
const products = [
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/21/400/300",
    bgColor: "#f18875",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1062/400/300",
    bgColor: "#4E4E4E",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1076/400/300",
    bgColor: "#00A88F",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1062/400/300",
    bgColor: "#4E4E4E",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1062/400/300",
    bgColor: "#4E4E4E",
  },
];
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 420px;
  min-width: 360px;
  height: 180px;
  border-radius: 12px; /* soft rounded corners */
  display: flex;
  align-items: center;
}

.product-image {
  width: 130px;
  height: 130px;
  border-radius: 10px; /* rounded image corners */
  object-fit: cover;
}

/* Desktop */
@media (min-width: 960px) {
  .product-card {
    max-width: 480px;
    height: 200px;
    border-radius: 20px; /* slightly more on bigger screens */
  }
  .product-image {
    width: 150px;
    height: 150px;
    border-radius: 12px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .product-card {
    max-width: 95% !important;
    height: auto;
    border-radius: 10px !important;
  }
  .product-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
}
</style>
