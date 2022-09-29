<template>
    <v-row :no-gutters="true">
        <v-col cols="12">
            <h2 class="mb-3">{{ $t("projects_title") }}</h2>
        </v-col>
        <v-col cols="12">
            <v-list class="bg-transparent">
                <v-list-item v-for="(project, index) in projects" :key="'project_' + index" :subtitle="$t(project.subtitle)" :title="project.title">
                    <template #prepend>
                        <v-avatar class="rounded-circle">
                            <v-img :src="project.icon" :eager="true" class="w-100 h-100" :cover="true" />
                        </v-avatar>
                    </template>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {print_projects} from "@/data/projects";

export default defineComponent({
    name: "PrintProjectsComponent",

    data: () => ({
        projects: print_projects
    })
});
</script>