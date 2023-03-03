import type {I18n} from "vue-i18n";
import {createVuetify} from "vuetify";
import {createVueI18nAdapter} from "vuetify/locale/adapters/vue-i18n";
import {useI18n} from "vue-i18n";
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";

export const clientVuetify = (i18n: I18n) => {
    return createVuetify({
        locale: {
            adapter: createVueI18nAdapter({i18n, useI18n})
        },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi
            }
        }
    });
}