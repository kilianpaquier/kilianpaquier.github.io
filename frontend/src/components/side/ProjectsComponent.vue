<template>
    <v-row :no-gutters="true">
        <v-col cols="12">
            <h2 class="mb-3">{{ $t("projects_title") }}</h2>
        </v-col>
        <v-col cols="12">
            <v-window :continuous="true" class="elevation-1" show-arrows="hover">
                <v-window-item v-for="(project, index) in projects" :key="'project_' + index" eager>
                    <v-card>
                        <v-img :eager="true" :src="project.icon" class="align-end cursor-pointer" @click="sectionShowing = !sectionShowing">
                            <v-card-title v-if="project.title" :class="project.titleColor">
                                {{ project.title }}
                            </v-card-title>
                        </v-img>

                        <v-expand-transition>
                            <div v-show="sectionShowing">
                                <v-card-text>
                                    <v-row :no-gutters="true">
                                        <v-col v-for="(text, index) in project.text" :key="'project_text' + index" class="text-center my-1" cols="12">
                                            {{ $t(text) }}
                                        </v-col>

                                        <v-col class="text-center my-3" cols="12">
                                            <v-img :eager="true" :src="project.codeImg" class="mx-auto cursor-pointer" height="50" @click="redirect(index)"></v-img>
                                        </v-col>

                                        <template v-if="project.captions">
                                            <v-col v-for="(caption, index) in project.captions" :key="'project_caption' + index" class="text-caption text-end" cols="12">
                                                {{ $t(caption) }}
                                            </v-col>
                                        </template>
                                    </v-row>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {projects} from "@/data/projects";

export default defineComponent({
    name: "ProjectsComponent",

    data: () => ({
        sectionShowing: false
    }),

    setup: () => ({
        projects,
        redirect: (index: number) => window.open(projects[index].codeLink)
    })
});
</script>