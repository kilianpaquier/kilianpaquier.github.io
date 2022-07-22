<template>
    <k-row title="educations_title">
        <!-- Education timeline -->
        <v-timeline dense clipped>
            <v-timeline-item v-for="(education, index) in educations" :key="'edu' + index" large>
                <!-- Avatar part of the timeline item -->
                <template v-slot:icon>
                    <v-avatar class="bg-white">
                        <v-img v-bind:src="education.img" class="bg-white" eager/>
                    </v-avatar>
                </template>

                <!-- Card part of the timeline item -->
                <v-card>
                    <v-list>
                        <k-list-item v-bind:title="education.title" v-bind:lines="3">
                            <v-list-item-subtitle>
                                {{ $t(education.dates) }}
                            </v-list-item-subtitle>

                            <v-list-item-subtitle>
                                {{ $t(education.diploma) }}
                            </v-list-item-subtitle>

                            <v-list-item-subtitle class="pt-2" v-if="education.skills">
                                <v-row no-gutters>
                                    <v-col cols="auto" class="pe-2 py-1" v-for="(skill, index) in education.skills" v-bind:key="'exp_skill' + index">
                                        <k-skill v-bind:icon="skill.icon" v-bind:title="skill.name"></k-skill>
                                    </v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </k-list-item>
                    </v-list>

                    <!-- Captions if needed -->
                    <v-card-actions class="caption" v-if="education.caption">
                        <v-spacer></v-spacer>
                        <span v-text="education.caption"/>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </k-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KRow from "../common/KRow.vue";
import KSkill from "../common/KSkill.vue";
import psmi from "../../assets/educations/psmi.svg";
import uqac from "../../assets/educations/uqac.jpg";
import polytech from "../../assets/educations/polytechtours.jpg";
import {
    bootstrap,
    c,
    cplusplus,
    hibernate,
    java,
    javascript,
    php,
    python,
    spring,
    qt, jquery, html5, perforce, unity, csharp, dotnet, android, moleculer
} from "../../plugins/devicon";
import KListItem from "../common/KListItem.vue";

export default defineComponent({
    name: "EduComponent",
    components: {
        KListItem,
        KSkill,
        KRow
    },

    data() {
        return {
            educations: [
                {
                    title: "PSM I",
                    dates: "educations[0].dates",
                    img: psmi,
                    diploma: "educations[0].diploma",
                },
                {
                    title: "UQAC¹",
                    dates: "educations[1].dates",
                    img: uqac,
                    diploma: "educations[1].diploma",
                    caption: "¹ Université du Québec à Chicoutimi",
                    skills: [
                        { icon: java, name: "Java" },
                        { icon: spring, name: "Spring" },
                        { icon: hibernate, name: "Hibernate" },
                        { icon: android, name: "Android" },

                        { icon: javascript, name: "Javascript" },
                        { icon: moleculer, name: "Moleculer" },

                        { icon: html5, name: "HTML" },
                        { icon: bootstrap, name: "Bootstrap" },

                        { icon: csharp, name: "C#" },
                        { icon: dotnet, name: ".NET Framework" },

                        { icon: perforce, name: "Perforce" },
                        { icon: unity, name: "Unity" },
                    ]
                },
                {
                    title: "Polytech Tours",
                    dates: "educations[2].dates",
                    img: polytech,
                    diploma: "educations[2].diploma",
                    skills: [
                        { icon: java, name: "Java" },
                        { icon: hibernate, name: "Hibernate" },

                        { icon: html5, name: "HTML" },
                        { icon: bootstrap, name: "Bootstrap" },

                        { icon: javascript, name: "Javascript" },
                        { icon: jquery, name: "JQuery" },

                        { icon: python, name: "Python" },
                        { icon: php, name: "PHP" },

                        { icon: c, name: "C" },
                        { icon: cplusplus, name: "C++" },
                        { icon: qt, name: "Qt" },
                    ],
                },
            ]
        }
    }
});
</script>

<style scoped>

</style>
