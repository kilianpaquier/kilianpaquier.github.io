<template>
    <v-row :no-gutters="true">
        <v-col cols="12">
            <h2 class="mb-3">
                {{ $t("experiences_title") }}
            </h2>
        </v-col>
        <v-col cols="12">
            <v-expansion-panels :model-value="[0]" mandatory>
                <v-expansion-panel v-for="(experience, e_index) in experiences" :key="'experience_' + e_index">
                    <v-expansion-panel-title hide-actions>
                        <v-list class="bg-transparent py-0">
                            <v-list-item :title="experience.title" class="py-0 ps-1">
                                <template #prepend>
                                    <v-avatar>
                                        <v-img :eager="true" :sizes="sizes" :src="experience.src" :srcset="experience.srcset" />
                                    </v-avatar>
                                </template>

                                <v-list-item-subtitle v-for="(subtitle, s_index) in experience.subtitles" :key="'experience_subtitle' + s_index" :class="{ 'mt-1': s_index > 0 }">
                                    {{ $t(subtitle) }}
                                </v-list-item-subtitle>

                                <v-row :no-gutters="true" class="mt-1">
                                    <v-col v-for="(skill, s_index) in experience.skills" :key="'experience_skill' + s_index" :class="{ 'me-2': s_index < experience.skills.length - 1 }" class="my-1" cols="auto">
                                        <v-tooltip :text="skill.name" location="bottom">
                                            <template #activator="{props}">
                                                <component :is="skill.icon" class="mx-auto no-outline" v-bind="props" width="25" />
                                            </template>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list class="bg-transparent text-body-2">
                            <v-list-item v-for="(mission, m_index) in experience.missions" :key="'experience_mission_' + m_index">
                                {{ $t(mission) }}
                            </v-list-item>
                        </v-list>

                        <v-row v-if="experience.captions" :no-gutters="true" class="text-end">
                            <v-col v-for="(caption, c_index) in experience.captions" :key="'experience_caption' + c_index" class="text-caption" cols="12">
                                {{ $t(caption) }}
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-title hide-actions>
                        <span class="my-1 ms-3">
                            {{ $t("old_experiences_title") }}
                        </span>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                        <v-list class="bg-transparent">
                            <v-list-item v-for="(experience, e_index) in old_experiences.experiences" :key="'old_experience_' + e_index" :title="experience.title" class="ps-2" :class="{ 'mt-2': e_index > 0 }">
                                <template #prepend>
                                    <v-avatar>
                                        <v-img :sizes="sizes" :src="experience.src" :srcset="experience.srcset" />
                                    </v-avatar>
                                </template>

                                <v-list-item-subtitle v-for="(subtitle, s_index) in experience.subtitles" :key="'old_experience_subtitle' + s_index" :class="{ 'mt-1': s_index > 0 }">
                                    {{ $t(subtitle) }}
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-list>

                        <v-row :no-gutters="true" class="text-end">
                            <v-col v-for="(caption, c_index) in old_experiences.captions" :key="'old_experience_caption' + c_index" class="text-caption" cols="12">
                                {{ $t(caption) }}
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {experiences, old_experiences} from "@/data/experiences";

export default defineComponent({
    name: "ExpComponent",

    setup: () => ({
        sizes: "10vw",
        experiences,
        old_experiences
    })
});
</script>