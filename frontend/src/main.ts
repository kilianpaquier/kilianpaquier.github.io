import App from "@/App.vue"
import {ViteSSG} from "vite-ssg";
import {routes} from "@/plugins/router";
import {createHead} from "@vueuse/head";
import {usePreferredLanguages} from "@vueuse/core";
import {initializeI18n} from "@/plugins/i18n";
import {initializeVuetify} from "@/plugins/vuetify";

export const createApp = ViteSSG(App, {routes}, (context) => {
    const {app} = context;
    const languages = usePreferredLanguages();

    const head = createHead({
        title: "Kilian PAQUIER",
        htmlAttrs: {lang: languages.value[0]},
        link: [
            {href: "/favicon.png", rel: "icon"}
        ],
        meta: [
            {charset: "UTF-8"},
            {content: "width=device-width, initial-scale=1.0", name: "viewport"}
        ]
    });
    app.use(head);

    const i18n = initializeI18n(app, languages);

    // @ts-ignore i18n.messages malformed
    initializeVuetify(app, i18n);
});
