<template>
    <k-row title="projects_title">
        <!-- Window component with all the projects -->
        <v-window class="elevation-1" continuous horizontal show-arrows show-arrows-on-hover>
            <!-- Previous arrow -->
            <template v-slot:prev="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" color="white">
                    <v-icon>
                        {{ mdiChevronLeft }}
                    </v-icon>
                </v-btn>
            </template>

            <!-- Next arrow -->
            <template v-slot:next="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" color="white">
                    <v-icon>
                        {{ mdiChevronRight }}
                    </v-icon>
                </v-btn>
            </template>

            <!-- Window item per project -->
            <v-window-item v-for="(project, index) in projects" :key="'project' + index" eager>
                <v-card>
                    <!-- Main component, the img -->
                    <v-img v-bind:src="project.img" eager @click="sectionShowing = !sectionShowing"
                           class="align-end cursor-pointer">

                        <!-- Project title if needed -->
                        <v-card-title v-if="project.title" v-bind:class="project.titleColor">
                            {{ project.title }}
                        </v-card-title>
                    </v-img>

                    <!-- Expansion panel with a summary of the project -->
                    <v-expand-transition>
                        <div v-show="sectionShowing">
                            <v-card-text>
                                <!-- Showing multiple paragraphs -->
                                <v-row>
                                    <v-col cols="12" v-for="(text, index) in project.text" v-bind:key="'project_text' + index"
                                           class="text-center">
                                        {{ $t(text) }}
                                    </v-col>

                                    <!-- Img or Icon for the git link -->
                                    <v-col cols="12" class="text-center pt-0">
                                        <v-img v-bind:src="project.codeImg" contain class="mx-auto cursor-pointer small-img" @click="redirectTo(project.codeLink)" eager/>
                                    </v-col>
                                </v-row>

                                <!-- Captions if needed -->
                                <v-row class="text-right mt-5" no-gutters v-if="project.captions">
                                    <v-col cols="12" class="caption text-right" v-for="(caption, index) in project.captions" v-bind:key="'project_caption' + index">
                                        {{ $t(caption) }}
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-window-item>
        </v-window>
    </k-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KRow from "../common/KRow.vue";
import {mdiChevronLeft, mdiChevronRight, mdiRecord} from "@mdi/js";
import fortheberry from "../../assets/projects/fortheberry.png";
import shareyourfit from "../../assets/projects/shareyourfit.png";
import gestionepi from "../../assets/projects/gestionepi.png";
import tagedofis from "../../assets/projects/tagedofis.png";
import {gitlab, itchio} from "../../plugins/devicon";

export default defineComponent({
    name: "ProjectsComponent",
    components: {
        KRow
    },

    methods: {
        redirectTo(link: string): void {
            window.open(link);
        }
    },

    data() {
        return {
            sectionShowing: false,
            mdiChevronLeft,
            mdiChevronRight,
            mdiRecord,

            projects: [
                {
                    titleColor: "secondary--text",
                    img: fortheberry,
                    arrowsColor: "white",

                    text: [
                        "projects[0].text[0]",
                        "projects[0].text[1]"
                    ],
                    captions: [
                        "projects[0].captions[0]",
                        "projects[0].captions[1]"
                    ],

                    codeImg: itchio,
                    codeLink: "https://rogue888.itch.io/for-the-berry",
                },
                {
                    titleColor: "secondary--text",
                    img: shareyourfit,
                    arrowsColor: "white",

                    text: [
                        "projects[1].text[0]",
                        "projects[1].text[1]"
                    ],

                    codeImg: gitlab,
                    codeLink: "https://gitlab.com/kilian-paquier/share-your-fit",
                },
                {
                    titleColor: "secondary--text",
                    img: gestionepi,
                    arrowsColor: "white",

                    text: [
                        "projects[2].text[0]",
                        "projects[2].text[1]"
                    ],
                    captions: [
                        "projects[2].captions[0]",
                        "projects[2].captions[1]"
                    ],

                    codeImg: gitlab,
                    codeLink: "https://gitlab.com/kilian-paquier/gestion-epi",
                },
                {
                    title: "T.A.GEDOFIS",
                    titleColor: "secondary--text",
                    img: tagedofis,
                    arrowsColor: "secondary",

                    text: [
                        "projects[3].text[0]",
                        "projects[3].text[1]"
                    ],
                    captions: [
                        "projects[3].captions[0]"
                    ],

                    codeImg: gitlab,
                    codeLink: "https://gitlab.com/kilian-paquier/tagedofis",
                },
            ]
        }
    }
});
</script>

<style lang="scss" scoped>
.small-icon {
    font-size: 1.75rem;
}

$skill-icon-size: 40px;
.small-img {
    max-height: $skill-icon-size;
    min-height: $skill-icon-size;
    //max-width: $skill-icon-size;
    //min-width: $skill-icon-size;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
