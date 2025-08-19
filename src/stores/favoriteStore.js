import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [], // list of favorited products
  }),
  actions: {
    toggleFavorite(product) {
      const exists = this.items.find((p) => p.id === product.id);
      if (exists) {
        // remove if already in favorites
        this.items = this.items.filter((p) => p.id !== product.id);
      } else {
        // add to favorites
        this.items.push(product);
      }
    },
    isFavorite(id) {
      return this.items.some((p) => p.id === id);
    },
  },
});
