// stores/cartStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // {id, title, price, image, quantity}
  }),
  getters: {
    cartCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    async fetchCart(userId = 1) {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/carts/${userId}`
        );
        const products = data.products; // [{productId, quantity}]

        // fetch product details for each
        const fetchedItems = await Promise.all(
          products.map(async (p) => {
            const { data: product } = await axios.get(
              `https://fakestoreapi.com/products/${p.productId}`
            );
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: p.quantity,
            };
          })
        );
        this.items = fetchedItems;
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    },
    addToCart(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter((i) => i.id !== productId);
    },
    updateQuantity(productId, qty) {
      const item = this.items.find((i) => i.id === productId);
      if (item) {
        item.quantity = qty > 0 ? qty : 1;
      }
    },
  },
});
