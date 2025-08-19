<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Slider Component -->
        <Slider />

        <!-- Filter Bar Component -->
        <FilterBar />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Slider from "../components/Sliders.vue";
import FilterBar from "../components/FilterBar.vue";
</script>
