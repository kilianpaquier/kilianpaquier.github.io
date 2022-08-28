<template>
    <v-row no-gutters>
        <v-col cols="auto">
            <v-img v-bind:src="profile" class="rounded-circle" width="175" eager/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
            <v-list rounded class="text-center text-sm-end pe-0" style="background: transparent">
                <v-list-item-group mandatory v-model="currentLang">
                    <v-list-item v-for="(lang, index) in langs" v-bind:key="'lang' + index">

                        <v-list-item-content class="d-none d-sm-flex">
                            <v-list-item-title>{{ $t(lang.text) }}</v-list-item-title>
                            <v-list-item-subtitle>{{ $t(lang.skill) }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar class="mx-auto ms-sm-4">
                            <v-img v-bind:src="lang.icon" eager/>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import i18n from "../plugins/i18n";
import fr from "../assets/flags/fr.svg";
import gb from "../assets/flags/gb.svg";
import profile from "../assets/intro/profile.jpg";

export default defineComponent({
    name: "IntroComponent",

    computed: {
        currentLang: {
            get(): number {
                return i18n.locale === "fr" ? 0 : 1;
            },
            set(lang: number): void {
                i18n.locale = lang === 0 ? "fr" : "en";
            }
        }
    },

    data() {
        return {
            profile,
            langs: [
                {
                    lang: "fr",
                    text: "langs[0].text",
                    icon: fr,
                    skill: "langs[0].skill"
                },
                {
                    lang: "en",
                    text: "langs[1].text",
                    icon: gb,
                    skill: "langs[1].skill"
                }
            ]
        }
    }
});
</script>

<style scoped>

</style>
