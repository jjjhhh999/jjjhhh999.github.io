import { createApp, nextTick } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import { i18n } from "./i18n";

const app = createApp(App);

app.use(i18n);
app.mount("#app");

void nextTick(() => {
  AOS.init({
    once: true,
    duration: 500,
  });
});
