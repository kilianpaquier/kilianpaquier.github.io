<template>
    <v-col cols="12">
        <v-row :no-gutters="true">
            <v-col cols="12">
                <h2 class="mb-3">{{ $t("softs_title") }}</h2>
            </v-col>
            <v-col cols="12">
                <v-row :no-gutters="true">
                    <v-col v-for="(soft, index) in softs" :key="'soft' + index" cols="12">
                        {{ $t(soft) }}
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="12">
        <v-row :no-gutters="true">
            <v-col cols="12">
                <h2 class="mb-3">{{ $t("tools_title") }}</h2>
            </v-col>
            <v-col cols="12">
                <v-row :no-gutters="true">
                    <v-col v-for="(skill, index) in tools" v-bind:key="'tool' + index" :class="{ 'me-2': index < tools.length - 1 }" class="my-1" cols="auto">
                        <v-tooltip :text="skill.name" location="bottom">
                            <template #activator="{props}">
                                <v-img :eager="true" :src="skill.icon" class="mx-auto" v-bind="props" width="25"></v-img>
                            </template>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {bash, dbeaver, devicon, jetbrains, jira, maven, npm, postman, uml, vscode, yarn} from "@/plugins/devicon";

export default defineComponent({
    name: "SkillsComponent",

    data: () => ({
        softs: [
            "softs[0]",
            "softs[1]"
        ],

        tools: [
            {icon: bash, name: "Bash"},

            {icon: jetbrains, name: "JetBrains"},
            {icon: vscode, name: "VSCode"},
            {icon: dbeaver, name: "DBeaver"},

            {icon: uml, name: "UML"},
            {icon: postman, name: "Postman"},

            {icon: yarn, name: "Yarn"},
            {icon: npm, name: "npm"},
            {icon: maven, name: "Maven"},

            {icon: jira, name: "Jira"},
            {icon: devicon, name: "Devicon"}
        ]
    })
});
</script>