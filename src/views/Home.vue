<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Product Cards Slider -->
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(product, i) in products" :key="i">
            <v-card
              class="ma-3 pa-4 d-flex align-center product-card"
              :style="{ backgroundColor: product.bgColor, color: 'white' }"
              rounded="xl"
              elevation="5"
            >
              <v-row no-gutters class="w-100">
                <!-- Left side (Details) -->
                <v-col
                  cols="12"
                  sm="7"
                  class="d-flex flex-column justify-center text-center text-sm-left"
                >
                  <h4 class="font-weight-bold">{{ product.brand }}</h4>
                  <p class="mb-1">{{ product.name }}</p>
                  <h3 class="font-weight-bold">{{ product.price }}</h3>
                  <div>
                    <span
                      v-for="size in product.sizes"
                      :key="size"
                      class="mr-2"
                    >
                      {{ size }}
                    </span>
                  </div>
                </v-col>

                <!-- Right side (Image) -->
                <v-col
                  cols="12"
                  sm="5"
                  class="d-flex justify-center align-center mt-3 mt-sm-0"
                >
                  <v-img
                    :src="product.image"
                    class="rounded-lg product-image"
                    cover
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const products = [
  {
    brand: "Nike",
    name: "Running Shoes",
    price: "IQD 75,000",
    sizes: ["40", "41", "42", "43"],
    image: "https://picsum.photos/id/21/200/200",
    bgColor: "#1976D2",
  },
  {
    brand: "Apple",
    name: "AirPods Pro",
    price: "IQD 285,000",
    sizes: ["—"],
    image: "https://picsum.photos/id/29/200/200",
    bgColor: "#2E7D32",
  },
  {
    brand: "Samsung",
    name: "Galaxy Watch",
    price: "IQD 210,000",
    sizes: ["S", "M", "L"],
    image: "https://picsum.photos/id/1062/200/200",
    bgColor: "#6A1B9A",
  },
  {
    brand: "Gucci",
    name: "Leather Belt",
    price: "IQD 120,000",
    sizes: ["S", "M", "L", "XL"],
    image: "https://picsum.photos/id/1076/200/200",
    bgColor: "#D84315",
  },
  {
    brand: "Zara",
    name: "Denim Jacket",
    price: "IQD 89,000",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1068/200/200",
    bgColor: "#00838F",
  },
];
</script>

<style scoped>
/* Default (Desktop & Tablet) */
.product-card {
  width: 100%;
  max-width: 600px;
  min-width: 280px;
  min-height: 220px; /* slightly taller */
}

/* Image scaling */
.product-image {
  max-width: 130px;
  max-height: 130px;
}

/* Mobile */
@media (max-width: 600px) {
  .product-card {
    max-width: 90% !important; /* only one card visible */
    min-height: 180px; /* smaller height on mobile */
    margin: 0 auto; /* center */
  }

  .product-image {
    max-width: 90px;
    max-height: 90px;
  }
}
</style>
