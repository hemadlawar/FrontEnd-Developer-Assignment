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
            md="7"
            class="d-flex flex-column justify-center text-left"
          >
            <h4 class="font-weight-bold mb-2">{{ product.brand }}</h4>
            <p class="mb-1">{{ product.name }}</p>
            <h3 class="font-weight-bold mb-2">{{ product.price }}</h3>
            <div>
              <span v-for="size in product.sizes" :key="size" class="mr-2">
                {{ size }}
              </span>
            </div>
          </v-col>

          <!-- Right side (Image) -->
          <v-col
            cols="12"
            md="5"
            class="d-flex justify-center align-center mt-3 mt-md-0"
          >
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
    image: "https://m.media-amazon.com/images/I/71NSrCsNoUL._UY350_.jpg",
    bgColor: "#f18875",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://m.media-amazon.com/images/I/71NSrCsNoUL._UY350_.jpg",
    bgColor: "#4E4E4E",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://m.media-amazon.com/images/I/71NSrCsNoUL._UY350_.jpg",
    bgColor: "#00A88F",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://m.media-amazon.com/images/I/71NSrCsNoUL._UY350_.jpg",
    bgColor: "#ca19a8",
  },
  {
    brand: "American Eagle",
    name: "Crossbody Bucket Bag",
    price: "IQD 2,900",
    sizes: ["M", "L", "XL"],
    image: "https://m.media-amazon.com/images/I/71NSrCsNoUL._UY350_.jpg",
    bgColor: "#4E4E4E",
  },
];
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 14px;
}

/* Default Image */
.product-image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
}

/* Desktop */
@media (min-width: 960px) {
  .product-card {
    max-width: 460px;
    border-radius: 18px;
    padding: 18px;
  }
  .product-image {
    width: 140px;
    height: 140px;
  }
}

/* Tablet */
@media (min-width: 600px) and (max-width: 959px) {
  .product-card {
    max-width: 380px;
    margin: auto;
    padding: 14px;
  }
  .product-image {
    width: 110px;
    height: 110px;
  }
}

/* Mobile */
@media (max-width: 599px) {
  .product-card {
    width: 85% !important;
    max-width: 90% !important;
    border-radius: 10px !important;
    margin: 0 auto 12px auto;
    padding: 10px;
  }
  .product-image {
    width: 70px;
    height: 70px;
    border-radius: 6px;
  }

  /* Shrink fonts */
  .product-card h4 {
    font-size: 12px;
    margin-bottom: 2px;
  }
  .product-card p {
    font-size: 11px;
    margin-bottom: 2px;
  }
  .product-card h3 {
    font-size: 13px;
    margin-bottom: 4px;
  }
  .product-card span {
    font-size: 11px;
  }
}
</style>
