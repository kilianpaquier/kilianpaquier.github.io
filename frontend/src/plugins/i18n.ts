import {createI18n} from "vue-i18n";
import fr from "@/locales/fr";
import en from "@/locales/en";
import type {Ref} from "vue";

export const clientI18n = (languages: Ref<readonly string[]>) => {
    return createI18n({
        legacy: false,
        allowComposition: true,
        locale: languages.value[0].includes("fr") ? "fr" : "en",
        fallbackLocale: "en",
        messages: {fr, en}
    });
}