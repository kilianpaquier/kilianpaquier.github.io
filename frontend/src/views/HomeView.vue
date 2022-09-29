<template>
    <v-container class="fluid select-none">
        <v-row>
            <v-col cols="12">
                <intro-component />
            </v-col>
            <v-col class="py-0" cols="12">
                <social-component />
            </v-col>

            <v-col class="pt-0" cols="12">
                <h1>{{ $t("title") }}</h1>
                <p class="text-justify">{{ $t("about") }}</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="7" xl="8">
                <v-row>
                    <v-col cols="12" xl="6">
                        <exp-component />
                    </v-col>
                    <v-col class="d-block d-md-none d-print-block d-lg-block" cols="12" xl="6">
                        <edu-component />
                    </v-col>
                    <v-col cols="12" class="d-none d-md-block d-print-none d-lg-none">
                        <projects-component />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="5" xl="4">
                <v-row>
                    <v-col class="d-none d-md-block d-print-none d-lg-none" cols="12">
                        <edu-component />
                    </v-col>
                    <skills-component />
                    <v-col cols="12" class="d-block d-md-none d-print-none d-lg-block">
                        <projects-component />
                    </v-col>
                    <v-col cols="12" class="d-none d-print-block">
                        <print-projects-component />
                    </v-col>
                    <v-col cols="12">
                        <interests-component />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import IntroComponent from "@/components/IntroComponent.vue";
import SocialComponent from "@/components/SocialComponent.vue";
import ExpComponent from "@/components/main/ExpComponent.vue";
import EduComponent from "@/components/main/EduComponent.vue";
import ProjectsComponent from "@/components/side/ProjectsComponent.vue";
import SkillsComponent from "@/components/side/SkillsComponent.vue";
import PrintProjectsComponent from "@/components/side/PrintProjectsComponent.vue";
import InterestsComponent from "@/components/side/InterestsComponent.vue";</script>
