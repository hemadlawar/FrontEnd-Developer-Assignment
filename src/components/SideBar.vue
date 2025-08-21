<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

// Cart count
const cartCount = ref(3);

// Detect screen size
const { mobile } = useDisplay();

// Sidebar state
const drawer = ref(!mobile.value); // open on desktop, closed on mobile

// Assets
import chatLogo from "../assets/Chat.png";
import favoritesLogo from "../assets/Favorites.png";
import walletLogo from "../assets/Wallet.png";
import bagLogo from "../assets/shopping-basket-svgrepo-com.png";
import InvestLogo from "../assets/Invest.png";
import HomeLogo from "../assets/Home.png";
import SettingLogo from "../assets/Settings.png";
import GroupImg from "../assets/GroupImg.png";
</script>

<template>
  <v-app>
    <!-- ✅ TOP NAVIGATION BAR -->
    <v-app-bar app flat color="white" class="px-4">
      <!-- Sidebar toggle on mobile -->
      <v-btn icon class="mr-2" v-if="mobile" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Show logo only on desktop -->
      <!-- ✅ Always show logo (desktop, tablet, mobile) -->
      <v-img :src="GroupImg" max-width="90" class="ml-2 logo-img"></v-img>

      <!-- Left Links -->
      <v-btn v-if="!mobile" variant="text" class="ml-16 small-link"
        >How It Works?</v-btn
      >
      <v-btn v-if="!mobile" variant="text" class="ml-2 small-link"
        >Help & Support</v-btn
      >

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
      <span class="ml-2" v-if="!mobile">M. Khalid Saied</span>
    </v-app-bar>

    <!-- ✅ SIDEBAR -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :permanent="!mobile"
      :temporary="mobile"
      :width="80"
      :class="{ 'mobile-drawer': mobile }"
    >
      <v-list
        color="transparent"
        class="d-flex flex-column align-center sidebar-list"
      >
        <!-- Logo on mobile -->
        <v-img v-if="mobile" :src="GroupImg" max-width="60" class="mb-4 mt-2" />

        <!-- Place Ad -->
        <v-btn class="mb-2 place-ad-btn" variant="text" min-width="0">
          <img
            :src="InvestLogo"
            alt="Invest"
            style="width: 40px; height: 40px; object-fit: contain"
          />
        </v-btn>
        <span class="place-ad-text">Place<br />Ad</span>

        <!-- Other Icons -->
        <v-btn icon class="mb-3 custom-icon-btn" :to="'/home'" router>
          <img :src="HomeLogo" alt="Home" />
        </v-btn>

        <v-btn icon class="mb-3 custom-icon-btn" :to="'/favorite'" router>
          <img :src="favoritesLogo" alt="Favorites" />
        </v-btn>

        <v-btn icon class="mb-3 custom-icon-btn" :to="'/cart'" router>
          <img :src="bagLogo" alt="Bag" />
        </v-btn>

        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="walletLogo" alt="Wallet" />
        </v-btn>
        <v-btn icon class="mb-3 custom-icon-btn">
          <img :src="chatLogo" alt="Chat" />
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

    <!-- ✅ MAIN CONTENT -->
    <v-main>
      <div class="pa-4">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
/* 📱 Mobile: sidebar starts BELOW the app bar */
.mobile-drawer {
  top: 56px !important; /* mobile app-bar height */
  height: calc(100% - 56px) !important;
}

/* 💻 Desktop: sidebar starts BELOW larger app bar */
@media (min-width: 600px) {
  .mobile-drawer {
    top: 64px !important; /* desktop app-bar height */
    height: calc(100% - 64px) !important;
  }
}

/* Push sidebar items down on mobile */
.mobile-drawer .sidebar-list {
  padding-top: 20px;
}

/* Cart badge styling */
.cart-badge {
  --v-badge-offset-x: 8px;
  --v-badge-offset-y: -8px;
}

.cart-badge .v-badge__badge {
  font-size: 12px;
  min-width: 16px;
  height: 16px;
  padding: 0;
  border-radius: 50%;
}

.cart-btn {
  padding: 0 !important;
  margin: 0 !important;
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
.logo-img {
  max-height: 40px;
}

/* Tablet */
@media (max-width: 960px) {
  .logo-img {
    max-width: 70px;
    max-height: 36px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .logo-img {
    max-width: 60px;
    max-height: 32px;
  }
}
</style>
