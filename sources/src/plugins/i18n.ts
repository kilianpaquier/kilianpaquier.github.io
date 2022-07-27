import VueI18n from "vue-i18n";
import Vue from "vue";
import fr from "./i18n/fr";
import en from "./i18n/en";

Vue.use(VueI18n);

export default new VueI18n({
    locale: navigator.language?.includes("en") ? "en" : "fr",
    fallbackLocale: "fr",
    messages: {
        fr,
        en
    }
});
