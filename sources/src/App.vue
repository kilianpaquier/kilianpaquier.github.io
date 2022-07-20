<template>
  <v-app>
    <v-main>
        <v-container class="fluid select-none">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-container fluid>
                        <v-img
                            :src="'/img/about/profile.jpg'"
                            class="rounded-circle"
                            contain
                            eager
                            width="175"
                        />
                    </v-container>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                    <lang-component></lang-component>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="12">
                    <social-component></social-component>
                </v-col>
                <v-col cols="12">
                    <about-component></about-component>
                </v-col>

                <v-col cols="12" md="8" lg="7" xl="8">
                    <v-row no-gutters>
                        <v-col cols="12" xl="6">
                            <exp-component></exp-component>
                        </v-col>
                        <v-col cols="12" xl="6">
                            <v-row no-gutters>
                                <!-- <v-col cols="12">
                                    <edu-component></edu-component>
                                </v-col> -->
                                <v-col
                                    cols="12"
                                    class="d-block d-lg-none d-xl-block d-print-none"
                                >
                                    <projects-component></projects-component>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" md="4" lg="5" xl="4">
                    <v-row no-gutters>
                        <v-col cols="12">
                            <!-- <skill-component></skill-component> -->
                            <edu-component></edu-component>
                        </v-col>
                        <v-col cols="12">
                            <interests-component></interests-component>
                        </v-col>
                        <v-col cols="12" class="d-none d-lg-block d-xl-none d-print-none">
                            <projects-component></projects-component>
                        </v-col>
                        <v-col cols="12" class="d-none d-print-block">
                            <print-projects-component></print-projects-component>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ExpComponent from "@/components/main/ExpComponent.vue";
import EduComponent from "@/components/main/EduComponent.vue";
import ProjectsComponent from "@/components/main/ProjectsComponent.vue";
import SkillComponent from "@/components/side/SkillComponent.vue";
import LangComponent from "@/components/side/LangComponent.vue";
import AboutComponent from "@/components/main/AboutComponent.vue";
import InterestsComponent from "@/components/side/InterestsComponent.vue";
import SocialComponent from "@/components/main/SocialComponent.vue";
import PrintProjectsComponent from "@/components/side/PrintProjectsComponent.vue";

export default Vue.extend({
    name: "App",
    components: {
        PrintProjectsComponent,
        SocialComponent,
        ExpComponent,
        EduComponent,
        ProjectsComponent,
        // SkillComponent,
        LangComponent,
        AboutComponent,
        InterestsComponent,
    },
});
</script>

<style lang="sass">
@import "~devicon/devicon.min.css"

@media print
    .fluid
        max-width: 100%

.select-none
    user-select: none
    -moz-user-select: none
    -ms-user-select: none
    -webkit-user-select: none
</style>
