<template>
  <v-container fluid>
    <!-- Projects title -->
    <h2
      class="font-weight-bold mb-3"
      v-text="$vuetify.lang.t(`$vuetify.projects-title`)"
    />

    <v-list>
      <!-- One item per lang -->
      <v-list-item v-for="(project, i) in projects" :key="i">
        <!-- Project img -->
        <v-list-item-avatar>
          <v-img
            :src="require(`@/assets/projects/list/${project.img}`)"
            eager
          />
        </v-list-item-avatar>

        <!-- Project name -->
        <v-list-item-content>
          <v-list-item-title v-text="project.title" />
          <v-list-item-subtitle
            v-text="$vuetify.lang.t(`$vuetify.${project.subtitle}`)"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Project } from "@/model/entities";
import Component from "vue-class-component";

@Component
export default class PrintProjectsComponent extends Vue {
  projects: Project[] = [
      {
          title: "For The Berry",
          subtitle: "projects.fortheberry.subtitle",
          img: "fortheberry.png",
      },
      {
          title: "Share Your Fit",
          subtitle: "projects.shareyourfit.subtitle",
          img: "shareyourfit.png",
      },
      {
          title: "Gestion EPI",
          subtitle: "projects.gestionepi.subtitle",
          img: "gestionepi.png",
      },
      {
          title: "T.A.GEDOFIS",
          subtitle: "projects.tagedofis.subtitle",
          img: "tagedofis.png",
      },
  ];
}
</script>
