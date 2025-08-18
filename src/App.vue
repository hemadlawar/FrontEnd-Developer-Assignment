<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <v-app>
    <SideBar>
      <router-view />
    </SideBar>
  </v-app>
</template>
