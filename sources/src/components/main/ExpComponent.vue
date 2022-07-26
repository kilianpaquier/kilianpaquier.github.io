<template>
    <k-row title="experiences_title">
        <v-expansion-panels mandatory>

            <!-- Latest experiences -->
            <v-expansion-panel v-for="(experience, index) in experiences" v-bind:key="'exp' + index">

                <!-- Header -->
                <v-expansion-panel-header class="py-0">
                    <v-list>
                        <k-list-item v-bind:avatar="experience.avatar" v-bind:lines="3"
                                     v-bind:title="experience.title" v-bind:contain-avatar="true" rounded-avatar="0">
                            <!-- Subtitles -->
                            <v-list-item-subtitle
                                v-for="(subtitle, index) in experience.subtitles" v-bind:key="'exp_sub' + index">
                                {{ $t(subtitle) }}
                            </v-list-item-subtitle>

                            <!-- Skills -->
                            <v-list-item-subtitle class="pt-2">
                                <v-row no-gutters>
                                    <v-col cols="auto" class="pe-2 py-1" v-for="(skill, index) in experience.skills" v-bind:key="'exp_skill' + index">
                                        <k-skill v-bind:icon="skill.icon" v-bind:title="skill.name"></k-skill>
                                    </v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </k-list-item>
                    </v-list>
                </v-expansion-panel-header>

                <!-- Content -->
                <v-expansion-panel-content>
                    <v-divider></v-divider>

                    <!-- List of missions -->
                    <v-list class="body-2">
                        <v-list-item v-for="(mission, index) in experience.missions" v-bind:key="'exp_mission' + index">
                            <v-list-item-content>
                                {{ $t(mission) }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <!-- Captions if needed -->
                    <v-row class="text-right" no-gutters v-if="experience.captions">
                        <v-col cols="12" v-for="(caption, index) in experience.captions" v-bind:key="'exp_caption' + index" class="caption">
                            {{ $t(caption) }}
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- Old experiences -->
            <v-expansion-panel>
                <v-expansion-panel-header class="py-0">
                    <v-list>
                        <k-list-item v-bind:title="$t('old_experiences_title').toString()"></k-list-item>
                    </v-list>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <v-divider></v-divider>

                    <v-list>
                        <k-list-item v-for="(experience, index) in old_experiences.experiences"
                                     v-bind:key="'old_exp' + index" v-bind:title="experience.title"
                                     v-bind:avatar="experience.avatar" v-bind:lines="3" v-bind:contain-avatar="true"
                                     rounded-avatar="0">

                            <!-- Subtitles -->
                            <v-list-item-subtitle
                                v-for="(subtitle, index) in experience.subtitles" v-bind:key="'old_exp_sub' + index">
                                {{ $t(subtitle) }}
                            </v-list-item-subtitle>
                        </k-list-item>
                    </v-list>

                    <!-- Captions if needed -->
                    <v-row class="text-right" no-gutters v-if="old_experiences.captions">
                        <v-col cols="12" v-for="(caption, index) in old_experiences.captions" v-bind:key="'old_exp_caption' + index" class="caption">
                            {{ $t(caption) }}
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </k-row>
</template>

<script lang="ts">
import KSkill from "../common/KSkill.vue";
import soprasteria from "../../assets/experiences/soprasteria.png"
import alten from "../../assets/experiences/alten.png";
import eurosys from "../../assets/experiences/eurosys.png";
import ddt from "../../assets/experiences/ddt.png";
import ufcv from "../../assets/experiences/ufcv.png";
import cgcv from "../../assets/experiences/cgcv.png";
import dreal from "../../assets/experiences/dreal.png";
import {
    angular,
    bootstrap, docker, elasticsearch, electron, envoy, flask, gitlab, helm,
    hibernate,
    jasmine,
    java, javascript, jest,
    karatelabs, kubernetes, liquibase,
    nestjs, postgresql, python,
    quarkus,
    spring, traefik,
    typescript
} from "../../plugins/devicon";
import KRow from "../common/KRow.vue";
import KListItem from "../common/KListItem.vue";

export default {
    name: "ExpComponent",
    components: {
        KListItem,
        KRow,
        KSkill
    },
    data() {
        return {
            experiences: [
                {
                    title: "Sopra Steria",
                    avatar: soprasteria,
                    subtitles: [
                        "experiences[0].subtitles[0]",
                        "experiences[0].subtitles[1]"
                    ],
                    missions: [
                        "experiences[0].missions[0]",
                        "experiences[0].missions[1]",
                        "experiences[0].missions[2]"
                    ],
                    captions: [
                        "experiences[0].captions[0]",
                        "experiences[0].captions[1]"
                    ],
                    skills: [
                        { icon: java, name: "Java" },
                        { icon: spring, name: "Spring" },
                        { icon: quarkus, name: "Quarkus" },
                        { icon: hibernate, name: "Hibernate" },

                        { icon: typescript, name: "Typescript" },
                        { icon: angular, name: "Angular" },
                        { icon: bootstrap, name: "Bootstrap" },

                        { icon: karatelabs, name: "Karatelabs" },
                        { icon: jasmine, name: "Jasmine" },

                        { icon: kubernetes, name: "Kubernetes" },
                        { icon: docker, name: "Docker" },
                        { icon: helm, name: "Helm" },
                        { icon: traefik, name: "Traefik proxy" },
                        { icon: envoy, name: "Envoy proxy" },

                        { icon: postgresql, name: "Postgresql" },
                        { icon: liquibase, name: "Liquibase" },

                        { icon: gitlab, name: "GitLab CI/CD" },

                        { icon: elasticsearch, name: "Elasticsearch" },

                        { icon: python, name: "Python" },
                        { icon: flask, name: "Flask" },
                    ]
                },
                {
                    title: "Alten",
                    avatar: alten,
                    subtitles: [
                        "experiences[1].subtitles[0]",
                        "experiences[1].subtitles[1]"
                    ],
                    missions: [
                        "experiences[1].missions[0]",
                        "experiences[1].missions[1]"
                    ],
                    skills: [
                        { icon: typescript, name: "Typescript" },
                        { icon: bootstrap, name: "Bootstrap" },
                        { icon: nestjs, name: "NestJS" },

                        { icon: javascript, name: "Javascript" },
                        { icon: electron, name: "ElectronJS" },
                        { icon: jest, name: "Jest" },
                    ],
                },
            ],

            old_experiences: {
                experiences: [
                    {
                        title: "Eurosys",
                        avatar: eurosys,
                        subtitles: [
                            "experiences[2].subtitles[0]",
                            "experiences[2].subtitles[1]"
                        ]
                    },
                    {
                        title: "DDT¹",
                        avatar: ddt,
                        subtitles: [
                            "experiences[3].subtitles[0]",
                            "experiences[3].subtitles[1]"
                        ]
                    },
                    {
                        title: "UFCV²",
                        avatar: ufcv,
                        subtitles: [
                            "experiences[4].subtitles[0]",
                            "experiences[4].subtitles[1]"
                        ],
                    },
                    {
                        title: "CGCV³",
                        avatar: cgcv,
                        subtitles: [
                            "experiences[5].subtitles[0]",
                            "experiences[5].subtitles[1]"
                        ],
                    },
                    {
                        title: "DREAL⁴",
                        avatar: dreal,
                        subtitles: [
                            "experiences[6].subtitles[0]",
                            "experiences[6].subtitles[1]"
                        ],
                    }
                ],
                captions: [
                    "experiences[3].captions[0]",
                    "experiences[4].captions[0]",
                    "experiences[5].captions[0]",
                    "experiences[6].captions[0]",
                ]
            }
        }
    }
}
</script>
