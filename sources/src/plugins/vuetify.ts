import Vue from "vue";
import Vuetify from "vuetify";
import VAnimateCss from "v-animate-css";

import fr from "./i18n/fr";
import en from "./i18n/en";

Vue.use(Vuetify);
Vue.use(VAnimateCss);

export default new Vuetify({
    theme: {
        dark: false,
    },
    lang: {
        locales: { fr, en },
        current: navigator.language || "fr",
    },
    icons: {
        iconfont: "mdi",
    },
});
