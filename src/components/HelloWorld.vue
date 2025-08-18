<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <v-container class="pa-4" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Welcome to Vuetify</v-card-title>
          <v-card-text>
            <p>Click the button to increase the counter:</p>
            <v-btn color="primary" @click="count++"> Count: {{ count }} </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
