<template>
    <v-row no-gutters>
        <!-- Theme switch -->
        <v-col cols="auto" class="d-print-none">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon v-bind:color="btnColor" @click="changeTheme()" v-bind="attrs" v-on="on">
                        <v-icon v-bind:size="iconSize">
                            {{ themeIcon }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>{{ $t("theme") }}</span>
            </v-tooltip>
        </v-col>

        <!-- Socials links -->
        <v-col cols="auto" v-for="(social, index) in socials" v-bind:key="'social' + index">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon v-bind:color="social.color || btnColor" v-bind:href="social.link" target="_blank"
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
        <v-col cols="auto" class="d-print-none">
            <v-tooltip top>
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
import {mdiDownloadCircleOutline, mdiGithub, mdiGitlab, mdiLinkedin, mdiThemeLightDark} from "@mdi/js";
import i18n from "../plugins/i18n";

export default defineComponent({
    name: "SocialComponent",

    computed: {
        downloadResume(): string {
            return i18n.locale === "fr" ? "/pdf/CV_Kilian_PAQUIER.pdf" : "/pdf/Resume_Kilian_PAQUIER.pdf"
        },
        btnColor(): string {
            return this.$vuetify.theme.dark ? "white" : "black";
        }
    },

    methods: {
        changeTheme(): void {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("theme", this.$vuetify.theme.dark);
        }
    },

    data() {
        return {
            downloadIcon: mdiDownloadCircleOutline,
            themeIcon: mdiThemeLightDark,
            iconSize: "30",
            socials: [
                {
                    social: "GitHub",
                    icon: mdiGithub,
                    link: "https://github.com/kilian-paquier",
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
