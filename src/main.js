import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "@/router/index.js";
import "./assets/css/tailwindcss.css";
import "galmuri/dist/galmuri.css";
import { startAuthStateListener } from "@/Plugins/sessionHandler.js";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
pinia.use(piniaPluginPersistedstate);
startAuthStateListener();
app.mount("#app");
