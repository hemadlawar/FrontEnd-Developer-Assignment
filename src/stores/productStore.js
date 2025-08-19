// stores/ProductStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [], // list of products for homepage / filtered
    productDetails: null, // single product for details page
    loading: false, // loading state
    error: null, // error state
  }),

  actions: {
    // Fetch all products
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    // Fetch a single product by ID
    async fetchProductDetails(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        this.productDetails = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    // Fetch products sorted by ID (asc or desc)
    async fetchSortedProducts(order = "desc") {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=${order}`
        );
        this.products = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    // Fetch products by category
    async fetchProductsByCategory(category) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        this.products = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
