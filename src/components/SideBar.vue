<script setup lang="ts">
import { ref } from "vue";

// Sidebar state
const drawer = ref(false);
const cartCount = ref(3);

// Toggle sidebar
function toggleDrawer() {
  drawer.value = !drawer.value;
}

// Assets (your icons)
import chatLogo from "../assets/Chat.png";
import favoritesLogo from "../assets/Favorites.png";
import walletLogo from "../assets/Wallet.png";
import bagLogo from "../assets/shopping-basket-svgrepo-com.png";
import placeAdLogo from "../assets/Place_Ad.png";
import InvestLogo from "../assets/Invest.png";
import HomeLogo from "../assets/Home.png";
import SettingLogo from "../assets/Settings.png";
import GroupImg from "../assets/GroupImg.png";
</script>

<template>
  <v-layout>
    <!-- TOP APP BAR -->
    <!-- TOP APP BAR -->
    <v-app-bar app flat color="white" class="px-4">
      <!-- Hamburger (only when sidebar is closed) -->
      <v-app-bar-nav-icon v-if="!drawer" @click="toggleDrawer" />

      <!-- Logo (bigger now) -->
      <v-img :src="GroupImg" max-width="90" class="ml-2 logo-img"></v-img>

      <!-- Left Links (smaller text) -->
      <v-btn variant="text" class="ml-16 small-link">How It Works?</v-btn>
      <v-btn variant="text" class="ml-2 small-link">Help & Support</v-btn>

      <!-- Push rest to right -->
      <v-spacer />

      <!-- Right Icons -->
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>

      <v-badge
        :content="cartCount"
        color="yellow-darken-2"
        overlap
        class="cart-badge"
      >
        <v-btn icon class="cart-btn">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>

      <v-avatar size="36" class="ml-3">
        <v-img src="https://randomuser.me/api/portraits/men/32.jpg" />
      </v-avatar>
      <span class="ml-2">M. Khalid Saied</span>
    </v-app-bar>

    <!-- SIDEBAR (drawer) -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      :width="80"
      @click:outside="drawer = false"
    >
      <v-list color="transparent" class="d-flex flex-column align-center">
        <!-- Place Ad button -->
        <v-btn
          class="mb-2 place-ad-btn"
          variant="text"
          min-width="0"
          elevation="0"
        >
          <img
            :src="InvestLogo"
            alt="Invest"
            style="width: 40px; height: 40px; object-fit: contain"
          />
        </v-btn>
        <span class="place-ad-text">Place<br />Ad</span>

        <!-- Other Icon Buttons -->
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="HomeLogo" alt="Home" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="favoritesLogo" alt="Favorites" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="bagLogo" alt="Bag" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="chatLogo" alt="Chat" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="walletLogo" alt="Wallet" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="SettingLogo" alt="Setting" />
        </v-btn>
      </v-list>

      <!-- Logout at bottom -->
      <template v-slot:append>
        <div class="pa-2 d-flex justify-center">
          <v-btn icon>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- MAIN CONTENT -->
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>
.cart-badge {
  .cart-badge {
    --v-badge-offset-x: 8px; /* move right */
    --v-badge-offset-y: -8px; /* move up */
  }
}

.cart-badge .v-badge__badge {
  font-size: 12px;
  min-width: 16px;
  height: 16px;
  padding: 0;
  border-radius: 50%;
}

.cart-btn {
  padding: 0 !important; /* remove extra button padding */
  margin: 0 !important; /* remove any margin */
}

.custom-icon-btn {
  width: 32px;
  height: 32px;
}

.place-ad-btn {
  padding: 0;
  min-width: 0;
  background: transparent !important;
  box-shadow: none !important;
}

.place-ad-text {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  display: block;
}
.small-link {
  font-size: 13px;
  font-weight: 400;
}
</style>
