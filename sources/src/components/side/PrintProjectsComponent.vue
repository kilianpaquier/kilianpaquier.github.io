<template>
    <k-row title="projects_title">
        <v-list>
            <k-list-item v-bind:title="project.title" v-bind:avatar="project.img" v-bind:eager-avatar="true"
                         v-for="(project, index) in projects" :key="'print_projects' + index">
                <v-list-item-subtitle>
                    {{ $t(project.subtitle) }}
                </v-list-item-subtitle>
            </k-list-item>
        </v-list>
    </k-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KRow from "../common/KRow.vue";
import fortheberry from "../../assets/projects/list/fortheberry.png";
import shareyourfit from "../../assets/projects/list/shareyourfit.png";
import gestionepi from "../../assets/projects/list/gestionepi.png";
import tagedofis from "../../assets/projects/list/tagedofis.png";
import KListItem from "../common/KListItem.vue";

export default defineComponent({
    name: "PrintProjectsComponent",
    components: {KListItem, KRow},
    data() {
        return {
            projects: [
                {
                    title: "For The Berry",
                    subtitle: "projects[0].subtitle",
                    img: fortheberry,
                },
                {
                    title: "Share Your Fit",
                    subtitle: "projects[1].subtitle",
                    img: shareyourfit,
                },
                {
                    title: "Gestion EPI",
                    subtitle: "projects[2].subtitle",
                    img: gestionepi,
                },
                {
                    title: "T.A.GEDOFIS",
                    subtitle: "projects[3].subtitle",
                    img: tagedofis,
                }
            ]
        }
    }
});
</script>
