import App from "@/App.vue"
import {usePreferredLanguages} from "@vueuse/core";
import {clientI18n} from "@/plugins/i18n";
import {clientVuetify} from "@/plugins/vuetify";
import {ViteSSG} from "vite-ssg/single-page";

export const createApp = ViteSSG(App, (context) => {
    const {app} = context;
    const languages = usePreferredLanguages();

    const i18n = clientI18n(languages);
    app.use(i18n);

    // @ts-ignore i18n.messages malformed
    const vuetify = clientVuetify(i18n);
    app.use(vuetify);
});
