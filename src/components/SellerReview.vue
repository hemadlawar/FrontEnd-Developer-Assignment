<template>
  <h4>Seller Says</h4>
  <v-card class="pa-4 rounded-xl" elevation="2" max-width="400">
    <v-row align="center" justify="space-between">
      <!-- Avatar + Name -->
      <v-row align="center" no-gutters>
        <v-avatar size="40">
          <v-img src="https://randomuser.me/api/portraits/men/32.jpg" />
        </v-avatar>
        <div class="ml-3">
          <div class="font-medium">John Doe</div>
          <div class="text-caption text-grey">1 month ago</div>
        </div>
      </v-row>

      <!-- Rating -->
      <v-rating
        v-model="rating"
        color="amber"
        dense
        readonly
        size="18"
      ></v-rating>
    </v-row>

    <!-- Comment -->
    <v-card-text class="mt-2 text-body-2 text-grey-darken-1">
      Excellent seller! The item arrived quickly and exactly as described. Will
      definitely buy again.
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const rating = ref(4.5); // Example rating
</script>
