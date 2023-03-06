<template>
    <v-col cols="12">
        <v-row :no-gutters="true">
            <v-col cols="12">
                <h2 class="mb-3">
                    {{ $t("softs_title") }}
                </h2>
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
                <h2 class="mb-3">
                    {{ $t("tools_title") }}
                </h2>
            </v-col>
            <v-col cols="12">
                <v-row :no-gutters="true">
                    <v-col v-for="(skill, index) in tools" :key="'tool' + index" :class="{ 'me-2': index < tools.length - 1 }" class="my-1" cols="auto">
                        <v-tooltip :text="skill.name" location="bottom">
                            <template #activator="{props}">
                                <component :is="skill.icon" class="mx-auto no-outline" v-bind="props" width="25" />
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
import {bash, dbeaver, devicon, insomnia, jetbrains, jira, maven, npm, postman, uml, vscode, yarn} from "@/plugins/devicon";

export default defineComponent({
    name: "SkillsComponent",

    setup: () => ({
        softs: [
            "softs[0]",
            "softs[1]"
        ],

        tools: [
            {icon: bash, name: "Bash"},
            {icon: dbeaver, name: "DBeaver"},
            {icon: devicon, name: "Devicon"}, 
            {icon: insomnia, name: "Insomnia"},
            {icon: jetbrains, name: "JetBrains"},
            {icon: jira, name: "Jira"},
            {icon: maven, name: "Maven"},
            {icon: npm, name: "npm"},
            {icon: postman, name: "Postman"},
            {icon: uml, name: "UML"},
            {icon: vscode, name: "VSCode"},
            {icon: yarn, name: "Yarn"},
        ]
    })
});
</script>