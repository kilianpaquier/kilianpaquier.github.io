<template>
    <v-row :no-gutters="true">
        <v-col cols="auto">
            <v-img :eager="true" :sizes="profile.sizes" :src="profile.src" :srcset="profile.srcset" class="rounded-circle" width="175" />
        </v-col>

        <v-spacer />

        <v-col cols="auto">
            <v-item-group :model-value="currentLang" mandatory selected-class="bg-primary">
                <v-list class="text-end pe-0 bg-transparent" rounded>
                    <v-item v-for="(lang, index) in langs" :key="'langs_' + index" v-slot="{ isSelected, selectedClass, toggle }">
                        <v-list-item :class="selectedClass" class="py-2 my-2" rounded="xl" @click="changeLocale(toggle, lang.key)">
                            <template #append>
                                <v-avatar class="mx-auto ms-sm-4">
                                    <component :is="lang.icon" class="w-100 h-100" />
                                </v-avatar>
                            </template>

                            <v-list-item-title class="d-none d-sm-block">{{ $t(lang.title) }}</v-list-item-title>
                            <v-list-item-subtitle class="d-none d-sm-block">{{ $t(lang.skill) }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-item>
                </v-list>
            </v-item-group>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useLocale} from "vuetify";
import fr from "@/assets/flags/fr.svg";
import en from "@/assets/flags/gb.svg";

export default defineComponent({
    name: "IntroComponent",

    setup: () => {
        const { current } = useLocale();

        return {
            currentLang: current.value.includes("fr") ? 0 : 1,
            changeLocale: (toggle: () => void, locale: string) => {
                toggle();
                current.value = locale;
            },
            profile: {
                src: "/profile.webp",
                srcset: "/profile-large.webp 1000w, /profile.webp 500w, /profile-small.webp 250w",
                sizes: "(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 1000px) 30vw, (min-width: 1001px) 10vw"
            },
            langs: [
                {
                    icon: fr,
                    key: "fr",
                    title: "langs[0].title",
                    skill: "langs[0].skill"
                },
                {
                    icon: en,
                    key: "en",
                    title: "langs[1].title",
                    skill: "langs[1].skill"
                }
            ]
        }
    }
});
</script>