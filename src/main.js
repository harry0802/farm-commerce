import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import "./assets/css/tailwindcss.css";
import "galmuri/dist/galmuri.css";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
pinia.use(piniaPluginPersistedstate);
app.mount("#app");
