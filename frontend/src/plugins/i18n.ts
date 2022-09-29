import {createI18n} from "vue-i18n";
import fr from "@/locales/fr";
import en from "@/locales/en";
import type {App, Ref} from "vue";

export const initializeI18n = (app: App, languages: Ref<readonly string[]>) => {
    const i18n = createI18n({
        legacy: false,
        allowComposition: true,
        locale: languages.value[0],
        fallbackLocale: "en",
        messages: {fr, en}
    });
    app.use(i18n);
    return i18n;
}