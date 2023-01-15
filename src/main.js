import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { store } from "@/store";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import axios from "axios";
import VueAxios from "vue-axios";
import autoLogin from "@/plugins/auto-login.js";
import axiosConfig from "@/plugins/axios.js";
axios.defaults.baseURL = "https://dev.aiarnob.com/wp-rest-api/wp-json";

import "./assets/main.css";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(autoLogin);
app.use(axiosConfig);
app.use(store);
app.use(ToastPlugin, {
    position: "top-right",
    duration: 5000,
});

app.mount("#app");
