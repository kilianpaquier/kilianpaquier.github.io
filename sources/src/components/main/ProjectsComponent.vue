<template>
  <v-container fluid>
    <!-- Projects title -->
    <h2
      class="font-weight-bold mb-3"
      v-text="$vuetify.lang.t(`$vuetify.projects-title`)"
    />

    <!-- Window component with all the projects -->
    <v-window
      v-model="window"
      class="elevation-1"
      continuous
      horizontal
      show-arrows
      show-arrows-on-hover
    >
      <!-- Previous arrow -->
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="white" icon v-bind="attrs" v-on="on">
          <v-icon v-text="mdiChevronLeft" />
        </v-btn>
      </template>

      <!-- Next arrow -->
      <template v-slot:next="{ on, attrs }">
        <v-btn color="white" icon v-bind="attrs" v-on="on">
          <v-icon v-text="mdiChevronRight" />
        </v-btn>
      </template>

      <!-- Window item per project -->
      <v-window-item v-for="(project, i) in projects" :key="i" eager>
        <v-card>
          <!-- Main component, the img -->
          <v-img
            :src="require(`@/assets/projects/${project.img}`)"
            class="align-end cursor-pointer"
            eager
            @click="sectionShowing = !sectionShowing"
          >
            <!-- Project title if needed -->
            <v-card-title
              v-if="project.title"
              :class="project.titleColor"
              v-text="project.title"
            />

            <!-- Row with X buttons to change the selected project -->
            <v-row class="pb-1">
              <v-col class="d-flex" cols="12">
                <div class="mx-auto d-none d-sm-block">
                  <v-item-group v-model="window" mandatory>
                    <v-item
                      v-for="(list, i) in projects"
                      :key="i"
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        :color="project.arrowsColor"
                        :input-value="active"
                        icon
                        @click.stop="toggle"
                      >
                        <v-icon v-text="mdiRecord" />
                      </v-btn>
                    </v-item>
                  </v-item-group>
                </div>
              </v-col>
            </v-row>
          </v-img>

          <!-- Expansion panel with a summary of the project -->
          <v-expand-transition>
            <div v-show="sectionShowing">
              <v-card-text>
                <!-- Showing multiple paragraphs -->
                <v-row>
                  <v-col
                    cols="12"
                    class="py-2"
                    v-for="(text, i) in project.text"
                    :key="i"
                    v-text="$vuetify.lang.t(`$vuetify.${text}`)"
                  />
                </v-row>

                <v-row>
                  <!-- Img or Icon for the git link -->
                  <v-col
                    cols="12"
                    class="text-center py-2"
                    :class="{ 'mb-4': project.captions }"
                  >
                    <v-img
                      v-if="project.codeImg"
                      :src="require(`@/assets/projects/${project.codeImg}`)"
                      class="mx-auto cursor-pointer"
                      width="50"
                      @click="redirectTo(project.codeLink)"
                      eager
                    />

                    <a
                      v-if="project.codeIcon"
                      @click="redirectTo(project.codeLink)"
                    >
                      <em
                        :class="project.codeIcon"
                        class="colored skill-icon"
                      />
                    </a>
                  </v-col>
                </v-row>

                <!-- Captions if needed -->
                <v-row class="text-right" no-gutters v-if="project.captions">
                  <v-col
                    cols="12"
                    class="caption"
                    v-for="(caption, i) in project.captions"
                    :key="i"
                    v-text="$vuetify.lang.t(`$vuetify.${caption}`)"
                  />
                </v-row>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight, mdiRecord } from "@mdi/js";
import Vue from "vue";
import { Project } from "@/model/entities";
import Component from "vue-class-component";

@Component
export default class ProjectsComponent extends Vue {
  mdiChevronRight = mdiChevronRight;
  mdiChevronLeft = mdiChevronLeft;
  mdiRecord = mdiRecord;

  window = 0;
  sectionShowing = false;

  projects: Project[] = [
      {
          titleColor: "secondary--text",
          img: "fortheberry.png",
          arrowsColor: "white",

          text: ["projects.fortheberry.story", "projects.fortheberry.context"],

          codeImg: "itchio.png",
          codeLink: "https://rogue888.itch.io/for-the-berry",

          captions: ["projects.fortheberry.ide", "projects.fortheberry.mvp"],
      },
      {
          titleColor: "secondary--text",
          img: "shareyourfit.png",
          arrowsColor: "white",

          text: ["projects.shareyourfit.story", "projects.shareyourfit.context"],

          codeIcon: "devicon-gitlab-plain",
          codeLink: "https://gitlab.com/kilian-paquier/share-your-fit",
      },
      {
          titleColor: "secondary--text",
          img: "gestionepi.png",
          arrowsColor: "white",

          text: ["projects.gestionepi.story", "projects.gestionepi.context"],

          codeIcon: "devicon-gitlab-plain",
          codeLink: "https://gitlab.com/kilian-paquier/gestion-epi",

          captions: ["projects.gestionepi.epi", "projects.gestionepi.mvp"],
      },
      {
          title: "T.A.GEDOFIS",
          titleColor: "secondary--text",
          img: "tagedofis.png",
          arrowsColor: "secondary",

          text: ["projects.tagedofis.story", "projects.tagedofis.context"],

          codeIcon: "devicon-gitlab-plain",
          codeLink: "https://gitlab.com/kilian-paquier/tagedofis",

          captions: ["projects.tagedofis.ddt"],
      },
  ];

  redirectTo(url: string): void {
      window.open(url);
  }
}
</script>

<style lang="sass" scoped>
.skill-icon
    font-size: 2.25rem

a
    text-decoration: none

.cursor-pointer
    cursor: pointer
</style>
