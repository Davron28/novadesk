import { createI18n } from "vue-i18n";
import en from "@/i18n/en.json";
import ru from "@/i18n/ru.json";

const savedLang = localStorage.getItem("lang") || "en";

const i18n = createI18n({
  locale: savedLang,
  fallbackLocale: "en",
  messages: {
    en,
    ru,
  },
});

export default i18n;