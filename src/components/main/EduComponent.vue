<template>
    <v-row :no-gutters="true">
        <v-col cols="12">
            <h2 class="mb-3">{{ $t("educations_title") }}</h2>
        </v-col>
        <v-col cols="12">
            <v-timeline side="end" density="comfortable">
                <v-timeline-item v-for="(education, index) in educations" :key="'education_' + index" :fill-dot="true" size="large" width="100%">
                    <template #icon>
                        <v-avatar class="h-100 w-100">
                            <v-img :cover="true" :eager="true" :sizes="sizes" :src="education.src" :srcset="education.srcset" class="w-100 h-100" />
                        </v-avatar>
                    </template>

                    <v-card :title="education.title">
                        <v-card-subtitle>{{ $t(education.dates) }}</v-card-subtitle>
                        <v-card-subtitle>{{ $t(education.diploma) }}</v-card-subtitle>

                        <v-card-text :class="{ 'pb-0': !education.skills || education.caption }" class="pt-3">
                            <v-row v-if="education.skills" :no-gutters="true">
                                <v-col v-for="(skill, index) in education.skills" :key="'experience_skill' + index" :class="{ 'me-2': index < education.skills.length - 1 }" class="my-1" cols="auto">
                                    <v-tooltip :text="skill.name" location="bottom">
                                        <template #activator="{props}">
                                            <component :is="skill.icon" class="mx-auto no-outline" v-bind="props" width="25" />
                                        </template>
                                    </v-tooltip>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions v-if="education.caption" class="text-caption">
                            <v-spacer />
                            <span>
                                {{ education.caption }}
                            </span>
                        </v-card-actions>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import educations from "@/data/educations";

export default defineComponent({
    name: "EduComponent",

    setup: () => ({
        sizes: "10vw",
        educations
    })
});
</script>