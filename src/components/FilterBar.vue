<template>
  <v-row class="align-center mt-6 filter-bar" no-gutters>
    <!-- Search -->
    <v-col cols="12" sm="6" md="4" lg="3">
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
    <v-select
      v-model="selectedCategory"
      :items="['All', ...categoryStore.categories]"
      placeholder="Category"
      variant="outlined"
      density="comfortable"
      hide-details
      clearable
      class="filter-input category-select"
    />

    <!-- Brand -->
    <v-col cols="12" sm="6" md="2" lg="1" class="brand-col">
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
    <v-col cols="12" sm="6" md="2" lg="1">
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
    <v-col cols="12" sm="6" md="3" lg="2" class="d-flex align-center">
      <v-icon class="mr-1">mdi-truck-delivery</v-icon>
      <span class="mr-2">Express</span>
      <v-switch v-model="express" hide-details density="compact" inset />
    </v-col>

    <!-- Sort Dropdown -->
    <v-col cols="12" sm="6" md="3" lg="2">
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
    <v-col cols="12" sm="6" md="2" lg="1" class="d-flex justify-center">
      <v-btn icon variant="outlined" class="filter-btn">
        <v-icon>mdi-filter-variant</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "../stores/categoryStore";

const search = ref("");
const selectedCategory = ref(null);
const selectedBrand = ref(null);
const selectedPrice = ref(null);
const express = ref(false);
const sortBy = ref(null);

const brands = ["Apple", "Samsung", "Nike", "Adidas"];
const priceRanges = ["$0 - $50", "$50 - $100", "$100 - $500", "$500+"];
const sortOptions = ["Asc", "Desc"];

// Use Pinia store
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<style scoped>
/* Filter bar layout */
.filter-bar {
  flex-wrap: nowrap !important;
  gap: 12px;
  overflow-x: auto; /* scroll on small screens */
}

/* Extra spacing only between Category & Brand */
.category-col {
  margin-right: 16px; /* add custom gap */
}

/* Responsive: on tablets & mobile reset to normal stacking */
@media (max-width: 1024px) {
  .filter-bar {
    flex-wrap: wrap !important;
    gap: 12px;
  }
  .category-col {
    margin-right: 0;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .filter-bar {
    flex-wrap: wrap !important;
    gap: 16px;
  }
  .category-col {
    margin-right: 0;
  }
}

/* Inputs/Selects */
.filter-input {
  border-radius: 12px;
  font-size: 14px;
}

/* Placeholder/text color black */
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

/* Category input arrow fix */
.category-select :deep(.v-field__input) {
  padding-right: 72px !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.category-select :deep(.v-field__append-inner),
.category-select :deep(.v-field__clearable) {
  position: static !important;
  right: auto !important;
  top: auto !important;
  transform: none !important;
  pointer-events: auto !important;
}
.category-select {
  min-width: 110px;
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
