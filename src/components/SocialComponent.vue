<template>
        <v-row :no-gutters="true">
            <v-col class="d-print-none" cols="auto">
                <v-tooltip location="top">
                    <template #activator="{props}">
                        <v-btn :icon="icons.mdiThemeLightDark" size="large" v-bind="props" variant="text" @click="changeTheme" />
                    </template>
                    <span>{{ $t("theme") }}</span>
                </v-tooltip>
            </v-col>

            <v-col v-for="(social, index) in socials" :key="'socials_' + index" cols="auto">
                <v-tooltip location="top">
                    <template #activator="{props}">
                        <v-btn :color="social.color" :href="social.link" :icon="social.icon" size="large" target="_blank" v-bind="props" variant="text" />
                    </template>
                    <span>{{ social.title }}</span>
                </v-tooltip>
            </v-col>

            <v-col class="d-print-none" cols="auto">
                <v-tooltip location="top">
                    <template #activator="{props}">
                        <v-btn :href="resume()" :icon="icons.mdiDownloadCircleOutline" color="primary" download size="large" target="_blank" v-bind="props" variant="text" />
                    </template>
                    <span>{{ $t("resume") }}</span>
                </v-tooltip>
            </v-col>
        </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mdiDownloadCircleOutline, mdiGithub, mdiGitlab, mdiLinkedin, mdiThemeLightDark} from "@mdi/js";
import {useLocale, useTheme} from "vuetify";

export default defineComponent({
    name: "SocialComponent",

    setup: () => {
        const {current} = useLocale();
        const theme = useTheme();

        return {
            changeTheme: () => theme.global.name.value = theme.global.current.value.dark ? "light" : "dark",
            resume: () => current.value.includes("fr") ? "/pdf/CV_Kilian_PAQUIER.pdf" : "/pdf/Resume_Kilian_PAQUIER.pdf",
            icons: {
                mdiDownloadCircleOutline,
                mdiThemeLightDark
            },
            socials: [
                {
                    title: "GitHub",
                    icon: mdiGithub,
                    link: "https://github.com/kilianpaquier",
                    color: undefined
                },
                {
                    title: "GitLab",
                    icon: mdiGitlab,
                    link: "https://gitlab.com/kilianpaquier",
                    color: "red",
                },
                {
                    title: "Linkedin",
                    icon: mdiLinkedin,
                    link: "https://www.linkedin.com/in/kilianpaquier",
                    color: "blue",
                }
            ]
        }
    }
});
</script>