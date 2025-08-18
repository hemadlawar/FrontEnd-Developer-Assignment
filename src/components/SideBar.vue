<script setup>
import { defineSlots } from "vue";
import chatLogo from "../assets/Chat.png";
import favoritesLogo from "../assets/Favorites.png";
import walletLogo from "../assets/Wallet.png";
import bagLogo from "../assets/shopping-basket-svgrepo-com.png";
import placeAdLogo from "../assets/Place_Ad.png";
import InvestLogo from "../assets/Invest.png";
import HomeLogo from "../assets/Home.png";
import SettingLogo from "../assets/Settings.png";
</script>

<template>
  <v-layout>
    <!-- Sidebar -->
    <v-navigation-drawer permanent :width="80">
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
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="HomeLogo" alt="Home"
        /></v-btn>
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="favoritesLogo" alt="Favorites"
        /></v-btn>
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="bagLogo" alt="Bag"
        /></v-btn>
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="chatLogo" alt="Chat"
        /></v-btn>
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="walletLogo" alt="Wallet"
        /></v-btn>
        <v-btn icon class="mb-3 custom-icon-btn"
          ><img :src="SettingLogo" alt="Setting"
        /></v-btn>
      </v-list>

      <!-- Logout button at bottom -->
      <template v-slot:append>
        <div class="pa-2 d-flex justify-center">
          <v-btn icon>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Page content -->
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>
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
</style>
