import { createI18n } from "vue-i18n";
import { createApp } from "vue";
import App from "./App.vue";

const i18n = createI18n({
  legacy: false,
  messages: {
    nl: {
      error: {
        not_found: "Items niet gevonden",
      },
    },
    en: {
      error: {
        not_found: "Items not found",
      },
    },
  },
});

createApp(App).use(i18n).mount("#app");
