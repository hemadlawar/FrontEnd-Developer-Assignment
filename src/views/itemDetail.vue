<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card v-if="product" class="pa-4">
          <v-img :src="product.image" height="300" contain class="mb-4"></v-img>

          <v-card-title class="text-h6">{{ product.title }}</v-card-title>
          <v-card-subtitle class="text-subtitle-2">
            Category: {{ product.category }}
          </v-card-subtitle>

          <v-card-text>
            <p>{{ product.description }}</p>
            <p class="text-h6 font-weight-bold mt-4">
              Price: ${{ product.price }}
            </p>
          </v-card-text>
        </v-card>

        <v-skeleton-loader
          v-else
          type="card"
          class="mx-auto"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);

onMounted(async () => {
  try {
    const id = route.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    product.value = await res.json();
  } catch (err) {
    console.error("Error fetching product:", err);
  }
});
</script>
