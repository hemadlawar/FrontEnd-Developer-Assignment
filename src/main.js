// main.js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// ✅ Import Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import router from "./router";
// ✅ Import Material Design Icons
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// ✅ Create the Vue app instance
const app = createApp(App);

// ✅ Register plugins
app.use(vuetify);
app.use(router);

// ✅ Mount app
app.mount("#app");
