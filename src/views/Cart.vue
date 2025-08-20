<template>
  <v-container class="py-8">
    <h1 class="text-h5 mb-6 font-weight-bold">Your Cart</h1>

    <!-- Empty cart -->
    <div v-if="cart.items.length === 0" class="text-center py-10">
      <p class="mb-4 text-grey-darken-1">Your cart is empty</p>
      <v-btn color="primary" rounded to="/">Continue Shopping</v-btn>
    </div>

    <!-- Cart items -->
    <v-row v-else>
      <!-- Cart products -->
      <v-col cols="12" md="8">
        <v-card
          v-for="item in cart.items"
          :key="item.id"
          class="mb-4 pa-4 d-flex align-center justify-space-between rounded-lg"
          elevation="2"
        >
          <!-- Product info -->
          <div class="d-flex align-center">
            <v-img
              :src="item.image"
              width="80"
              height="80"
              class="rounded-lg mr-4"
              cover
            />

            <div>
              <h3 class="text-subtitle-1 font-weight-medium">
                {{ item.title }}
              </h3>
              <p class="text-body-2 text-grey-darken-1">${{ item.price }}</p>
            </div>
          </div>

          <!-- Quantity controls -->
          <div class="d-flex align-center">
            <v-btn size="small" variant="outlined" @click="decreaseQty(item)"
              >-</v-btn
            >
            <span class="px-3 font-weight-medium">{{ item.quantity }}</span>
            <v-btn size="small" variant="outlined" @click="increaseQty(item)"
              >+</v-btn
            >
          </div>

          <!-- Price + remove -->
          <div class="text-right">
            <p class="text-body-1 font-weight-bold">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
            <v-btn icon color="error" variant="text" @click="remove(item.id)">
              <v-icon small>mdi-trash-can-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Cart summary -->
      <v-col cols="12" md="4">
        <v-card class="pa-6 rounded-xl" elevation="3">
          <h3 class="text-h6 mb-4 font-weight-bold">Order Summary</h3>
          <p class="mb-2">Total Items: {{ cart.cartCount }}</p>
          <p class="mb-2">Total Price: ${{ cart.cartTotal.toFixed(2) }}</p>
          <v-btn
            block
            class="mt-4 py-3 rounded-lg"
            style="background-color: #0da4a2; color: white"
          >
            Checkout
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { useCartStore } from "../stores/cartStore";

const cart = useCartStore();
console.log("the cart is", cart);
onMounted(() => {
  cart.fetchCart(3); // Fetch user cart
});

const increaseQty = (item) => {
  cart.updateQuantity(item.id, item.quantity + 1);
};

const decreaseQty = (item) => {
  if (item.quantity > 1) {
    cart.updateQuantity(item.id, item.quantity - 1);
  }
};

const remove = (id) => {
  cart.removeFromCart(id);
};
</script>
