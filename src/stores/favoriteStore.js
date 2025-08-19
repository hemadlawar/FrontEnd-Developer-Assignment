import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [], // list of favorited products
  }),
  actions: {
    toggleFavorite(product) {
      const index = this.items.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        // remove if already in favorites (mutate in place)
        this.items.splice(index, 1);
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
