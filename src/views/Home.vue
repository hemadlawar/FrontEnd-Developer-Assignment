<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Slider Component -->
        <Slider />

        <!-- Filter Bar -->
        <v-row class="align-center mt-6 filter-bar" no-gutters>
          <!-- Search -->
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="search"
              placeholder="Search Item or Brand .."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              density="comfortable"
              clearable
              hide-details
              class="filter-input"
            />
          </v-col>

          <!-- Category -->
          <v-col cols="12" sm="1">
            <v-select
              v-model="selectedCategory"
              :items="categories"
              placeholder="Category"
              variant="outlined"
              density="comfortable"
              hide-details
              clearable
              class="filter-input category-select"
            />
          </v-col>

          <!-- Brand -->
          <v-col cols="12" sm="1">
            <v-select
              v-model="selectedBrand"
              :items="brands"
              placeholder="Brand"
              variant="outlined"
              density="comfortable"
              hide-details
              clearable
              class="filter-input"
            />
          </v-col>

          <!-- Price Range -->
          <v-col cols="12" sm="1">
            <v-select
              v-model="selectedPrice"
              :items="priceRanges"
              placeholder="Price"
              variant="outlined"
              density="comfortable"
              hide-details
              clearable
              class="filter-input"
            />
          </v-col>

          <!-- Express Toggle -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-icon class="mr-1">mdi-truck-delivery</v-icon>
            <span class="mr-2">Express</span>
            <v-switch v-model="express" hide-details density="compact" inset />
          </v-col>

          <!-- Sort Dropdown -->
          <v-col cols="12" sm="2">
            <v-select
              v-model="sortBy"
              :items="sortOptions"
              placeholder="Sort by"
              variant="outlined"
              density="comfortable"
              hide-details
              class="filter-input"
            />
          </v-col>

          <!-- Filter Button -->
          <v-col cols="12" sm="1" class="d-flex justify-center">
            <v-btn icon variant="outlined" class="filter-btn">
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import Slider from "../components/Sliders.vue";

const search = ref("");
const selectedCategory = ref(null);
const selectedBrand = ref(null);
const selectedPrice = ref(null);
const express = ref(false);
const sortBy = ref(null);

const categories = ["All", "Electronics", "Clothing", "Books"];
const brands = ["Apple", "Samsung", "Nike", "Adidas"];
const priceRanges = ["$0 - $50", "$50 - $100", "$100 - $500", "$500+"];
const sortOptions = [
  "Popular",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];
</script>
<style scoped>
/* Keep row in one line */
.filter-bar {
  flex-wrap: nowrap !important;
  gap: 12px;
  overflow-x: auto; /* scroll on small screens */
}

/* Inputs/Selects container */
.filter-input {
  border-radius: 12px;
  font-size: 14px;
}

/* Text color -> black */
.filter-input :deep(.v-field-label),
.filter-input :deep(.v-field__placeholder),
.filter-input :deep(.v-field__input) {
  color: #000 !important;
  opacity: 1 !important;
}
.filter-input :deep(input::placeholder) {
  color: #000 !important;
  opacity: 1 !important;
}

/* ===================== ONLY CATEGORY FIX ===================== */
/* Give the Category input enough space so text never hits icons */
.category-select :deep(.v-field__input) {
  padding-right: 72px !important; /* space for clear (x) + arrow */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Ensure arrow/clear keep Vuetify defaults & stay clickable */
.category-select :deep(.v-field__append-inner),
.category-select :deep(.v-field__clearable) {
  position: static !important; /* reset any earlier absolute rules */
  right: auto !important;
  top: auto !important;
  transform: none !important;
  pointer-events: auto !important; /* arrow remains clickable */
}

/* Optional: tiny safety min-width so sm=1 doesn't crush completely */
.category-select {
  min-width: 110px; /* adjust or remove if you like */
}
/* ============================================================= */

/* Remove any old rules that targeted a non-existent class */
.filter-input :deep(.v-select__menu-icon) {
  all: unset;
}
.filter-input :deep(.v-select .v-select__menu-icon) {
  all: unset;
}

/* Filter button */
.filter-btn {
  border-radius: 50%;
  transition: 0.3s;
}
.filter-btn:hover {
  background-color: #f5f5f5;
}
</style>
