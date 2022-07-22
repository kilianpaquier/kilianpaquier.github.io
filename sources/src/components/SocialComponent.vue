<template>
    <v-row no-gutters>
        <!-- Socials links -->
        <v-col cols="auto" v-for="(social, index) in socials" v-bind:key="'social' + index">
            <v-tooltip top v-bind:color="social.color">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon v-bind:color="social.color" v-bind:href="social.link" target="_blank"
                        v-bind="attrs" v-on="on">
                        <v-icon v-bind:size="iconSize">
                            {{ social.icon }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>{{ social.social }}</span>
            </v-tooltip>
        </v-col>

        <!-- Resume link -->
        <v-col cols="auto">
            <v-tooltip top color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon color="primary" v-bind:href="downloadResume" target="_blank" download
                           v-bind="attrs" v-on="on">
                        <v-icon v-bind:size="iconSize">
                            {{ downloadIcon }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>{{ $t("resume") }}</span>
            </v-tooltip>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mdiDownloadCircleOutline, mdiGithub, mdiGitlab, mdiLinkedin} from "@mdi/js";
import i18n from "../plugins/i18n";

export default defineComponent({
    name: "SocialComponent",

    computed: {
        downloadResume(): string {
            return i18n.locale === "fr" ? "/pdf/CV_Kilian_PAQUIER.pdf" : "/pdf/Resume_Kilian_PAQUIER.pdf"
        }
    },

    data() {
        return {
            downloadIcon: mdiDownloadCircleOutline,
            iconSize: "30",
            socials: [
                {
                    social: "GitHub",
                    icon: mdiGithub,
                    link: "https://github.com/kilian-paquier",
                    color: "black",
                },
                {
                    social: "GitLab",
                    icon: mdiGitlab,
                    link: "https://gitlab.com/kilian-paquier",
                    color: "red",
                },
                {
                    social: "Linkedin",
                    icon: mdiLinkedin,
                    link: "https://www.linkedin.com/in/kilian-paquier",
                    color: "primary",
                }
            ]
        }
    }
});
</script>

<style scoped>

</style>
