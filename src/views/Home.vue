<template>
  <v-app>
    <v-main>
      <v-container>
        <h2 class="text-center mb-6">Featured Products</h2>

        <!-- Product Cards Slider -->
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(product, i) in products" :key="i">
            <v-card
              class="ma-3 pa-4 d-flex align-center"
              :style="{ backgroundColor: product.bgColor, color: 'white' }"
              max-width="100%"
              min-width="280"
              rounded="xl"
              elevation="5"
            >
              <v-row no-gutters class="w-100">
                <!-- Left side (Details) -->
                <v-col
                  cols="12"
                  sm="7"
                  class="d-flex flex-column justify-center"
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
                    max-height="120"
                    max-width="120"
                    class="rounded-lg"
                    cover
                  ></v-img>
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
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/180/200/200",
    bgColor: "#4A4A4A", // dark gray
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/250/200/200",
    bgColor: "#F57C73", // coral
  },
  {
    brand: "Nike",
    name: "Running Shoes",
    price: "IQD 75,000",
    sizes: ["40", "41", "42", "43"],
    image: "https://picsum.photos/id/21/200/200",
    bgColor: "#1976D2", // blue
  },
  {
    brand: "Apple",
    name: "AirPods Pro",
    price: "IQD 285,000",
    sizes: ["—"],
    image: "https://picsum.photos/id/29/200/200",
    bgColor: "#2E7D32", // green
  },
  {
    brand: "Samsung",
    name: "Galaxy Watch",
    price: "IQD 210,000",
    sizes: ["S", "M", "L"],
    image: "https://picsum.photos/id/1062/200/200",
    bgColor: "#6A1B9A", // purple
  },
  {
    brand: "Gucci",
    name: "Leather Belt",
    price: "IQD 120,000",
    sizes: ["S", "M", "L", "XL"],
    image: "https://picsum.photos/id/1076/200/200",
    bgColor: "#D84315", // deep orange
  },
  {
    brand: "Zara",
    name: "Denim Jacket",
    price: "IQD 89,000",
    sizes: ["M", "L", "XL"],
    image: "https://picsum.photos/id/1068/200/200",
    bgColor: "#00838F", // teal
  },
];
</script>
