<template>
  <v-container
    class="d-flex flex-column justify-center align-center fill-height"
  >
    <!-- Title -->
    <h3 class="text-h4 font-weight-bold mb-8 text-center">Seller says</h3>

    <!-- Review Cards -->
    <v-row justify="center" align="center" class="w-100" no-gutters>
      <!-- Repeat 3 cards -->
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <v-card class="pa-6 rounded-xl mx-4" elevation="4" max-width="380">
          <!-- Header -->
          <v-row align="center" justify="space-between">
            <v-row align="center" no-gutters>
              <v-avatar size="56">
                <v-img :src="review.avatar" />
              </v-avatar>
              <div class="ml-3">
                <div class="text-h6 font-weight-medium">{{ review.name }}</div>
                <div class="text-caption text-grey">{{ review.time }}</div>
              </div>
            </v-row>

            <v-rating
              v-model="review.rating"
              color="amber"
              dense
              readonly
              size="22"
            />
          </v-row>

          <!-- Comment -->
          <v-card-text class="mt-4 text-body-1 text-grey-darken-1">
            {{ review.comment }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const reviews = ref([
  {
    name: "John Doe",
    time: "1 month ago",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "Excellent seller! The item arrived quickly and exactly as described.",
  },
  {
    name: "Sarah Lee",
    time: "2 weeks ago",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "Fast shipping and good quality. Seller was very responsive.",
  },
  {
    name: "Michael Brown",
    time: "5 days ago",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    comment: "Amazing experience. Highly recommended seller!",
  },
]);
</script>
