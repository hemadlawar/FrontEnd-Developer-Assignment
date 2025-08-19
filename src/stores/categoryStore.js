import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        this.categories = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
