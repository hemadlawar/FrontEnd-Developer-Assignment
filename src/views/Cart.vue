<template>
  <v-container class="py-6">
    <!-- Header -->
    <div class="d-flex align-center mb-6">
      <v-btn icon variant="text" to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2 class="text-h6 mx-auto">My Cart</h2>
    </div>

    <!-- Empty Cart -->
    <div v-if="cart.items.length === 0" class="text-center py-10">
      <p>Your cart is empty</p>
      <v-btn color="primary" to="/">Continue Shopping</v-btn>
    </div>

    <!-- Cart Items -->
    <div v-else>
      <v-card
        v-for="item in cart.items"
        :key="item.id"
        class="d-flex align-center mb-4 pa-4"
        elevation="1"
      >
        <!-- Item Image -->
        <v-img :src="item.image" max-width="70" class="rounded-lg mr-3" />

        <!-- Item Details -->
        <div class="flex-grow-1">
          <h3 class="text-body-1 font-weight-medium">
            {{ item.title }}
          </h3>
          <p class="text-caption text-grey-darken-1">
            {{ item.seller }}
          </p>
          <p class="text-h6 font-weight-bold mt-1">{{ item.price }} IQD</p>
        </div>

        <!-- Quantity Controls -->
        <div class="d-flex align-center mx-3">
          <v-btn size="small" variant="outlined" @click="decreaseQty(item)"
            >-</v-btn
          >
          <span class="px-3">{{ item.quantity }}</span>
          <v-btn size="small" variant="outlined" @click="increaseQty(item)"
            >+</v-btn
          >
        </div>

        <!-- Remove -->
        <v-btn icon color="error" variant="text" @click="remove(item.id)">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-card>

      <!-- Order Summary -->
      <v-card class="pa-6 rounded-xl mt-6" elevation="2">
        <div class="d-flex justify-space-between mb-2">
          <span>Subtotal</span>
          <span>{{ cart.subtotal }} IQD</span>
        </div>
        <div class="d-flex justify-space-between mb-2">
          <span>Discount</span>
          <span class="text-success">-{{ cart.discount }} IQD</span>
        </div>
        <div class="d-flex justify-space-between mb-2">
          <span>Shipping Fee</span>
          <span>{{ cart.shipping }} IQD</span>
        </div>
        <v-divider class="my-3" />
        <div class="d-flex justify-space-between font-weight-bold text-body-1">
          <span>Total (Tax Inclusive)</span>
          <span>{{ cart.total }} IQD</span>
        </div>
      </v-card>

      <!-- Checkout Button -->
      <v-btn block color="primary" class="mt-6 py-4 rounded-lg" size="large">
        Proceed to Checkout
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useCartStore } from "../stores/cartStore";
import { onMounted } from "vue";

const cart = useCartStore();

onMounted(() => {
  cart.fetchCart(1); // fetch cart for user which its id is 3
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
