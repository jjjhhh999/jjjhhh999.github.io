import { createApp, nextTick } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

void nextTick(() => {
  AOS.init({
    once: true,
    duration: 500,
  });
});
