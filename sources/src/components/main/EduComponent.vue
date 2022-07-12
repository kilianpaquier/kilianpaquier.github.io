<template>
  <v-container fluid>
    <!-- Education title -->
    <h2
      class="font-weight-bold mb-3"
      v-text="$vuetify.lang.t(`$vuetify.educations-title`)"
    />

    <!-- Education timeline -->
    <v-timeline dense clipped>
      <v-timeline-item v-for="(edu, i) in educations" :key="i" large>
        <!-- Avatar part of the timeline item -->
        <template v-slot:icon>
          <v-avatar class="bg-white">
            <v-img
              :src="`/img/educations/${edu.img}`"
              class="bg-white"
              eager
            />
          </v-avatar>
        </template>

        <!-- Card part of the timeline item -->
        <v-card>
          <!-- Title, subtitle and text part -->
          <v-card-title v-text="edu.title" />
          <v-card-subtitle
            class="pb-0"
            v-text="$vuetify.lang.t(`$vuetify.${edu.dates}`)"
          />
          <v-card-text
            :class="{ 'py-0': edu.caption, 'pt-0': !edu.caption }"
            v-text="$vuetify.lang.t(`$vuetify.${edu.value}`)"
          />

          <!-- Captions if needed -->
          <v-card-actions class="caption" v-if="edu.caption">
            <v-spacer></v-spacer>
            <span v-text="edu.caption" />
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import { Education } from "@/model/entities";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class EduComponent extends Vue {
  educations: Education[] = [
      {
          title: "PSM I",
          dates: "educations.psm-one.dates",
          img: "psmi.svg",
          value: "educations.psm-one.title",
      },
      {
          title: "UQAC¹",
          dates: "educations.uqac.dates",
          img: "uqac.jpg",
          value: "educations.uqac.title",
          caption: "¹ Université du Québec à Chicoutimi",
      },
      {
          title: "Polytech Tours",
          dates: "educations.polytech.dates",
          img: "polytechtours.jpg",
          value: "educations.polytech.title",
      },
  ];
}
</script>
