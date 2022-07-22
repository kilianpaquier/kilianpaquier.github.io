<template>
  <v-app>
      <v-main>
          <v-container class="fluid select-none">
              <v-row>
                  <v-col cols="12">
                      <intro-component></intro-component>
                  </v-col>

                  <v-col cols="12" class="py-0">
                      <social-component></social-component>
                  </v-col>

                  <v-col cols="12" class="py-0">
                      <h1>{{ $t("title") }}</h1>
                      <p class="text-justify">{{ $t("about") }}</p>
                  </v-col>
              </v-row>

              <v-row class="mt-0">
                  <v-col cols="12" md="7" lg="7" xl="8">
                      <v-row>
                          <v-col cols="12" xl="6">
                              <exp-component></exp-component>
                          </v-col>
                          <v-col cols="12" xl="6" class="d-block d-md-none d-print-block d-lg-block">
                              <edu-component></edu-component>
                          </v-col>
                          <v-col cols="12" class="d-none d-md-block d-print-none d-lg-none">
                              <projects-component></projects-component>
                          </v-col>
                      </v-row>
                  </v-col>
                  <v-col cols="12" md="5" lg="5" xl="4">
                      <v-row>
                          <v-col cols="12" class="d-none d-md-block d-print-none d-lg-none">
                              <edu-component></edu-component>
                          </v-col>
                          <v-col cols="12">
                              <k-row title="softs_title">
                                  <v-row no-gutters>
                                      <v-col cols="12" v-for="(soft, index) in softs" v-bind:key="'soft' + index">
                                          {{ $t(soft) }}
                                      </v-col>
                                  </v-row>
                              </k-row>
                          </v-col>
                          <v-col cols="12">
                              <k-row title="tools_title">
                                  <v-row no-gutters>
                                      <v-col cols="auto" class="pe-2 py-1" v-for="(skill, index) in tools" v-bind:key="'tool' + index">
                                          <k-skill v-bind:icon="skill.icon" v-bind:title="skill.name"></k-skill>
                                      </v-col>
                                  </v-row>
                              </k-row>
                          </v-col>
                          <v-col cols="12" class="d-block d-md-none d-print-none d-lg-block">
                              <projects-component></projects-component>
                          </v-col>
                          <v-col cols="12" class="d-none d-print-block">
                              <print-projects-component></print-projects-component>
                          </v-col>
                          <v-col cols="12">
                              <interests-component></interests-component>
                          </v-col>
                      </v-row>
                  </v-col>
              </v-row>
          </v-container>
      </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import IntroComponent from "./components/IntroComponent.vue";
import SocialComponent from "./components/SocialComponent.vue";
import ExpComponent from "./components/main/ExpComponent.vue";
import EduComponent from "./components/side/EduComponent.vue";
import {bash, devicon, jetbrains, jira, maven, npm, postman, uml, vscode, yarn} from "./plugins/devicon";
import KSkill from "./components/common/KSkill.vue";
import KRow from "./components/common/KRow.vue";
import InterestsComponent from "./components/side/InterestsComponent.vue";
import ProjectsComponent from "./components/main/ProjectsComponent.vue";
import PrintProjectsComponent from "./components/side/PrintProjectsComponent.vue";

export default defineComponent({
    name: "App",
    components: {
        PrintProjectsComponent,
        ProjectsComponent,
        InterestsComponent,
        KRow,
        KSkill,
        EduComponent,
        ExpComponent,
        SocialComponent,
        IntroComponent
    },

    data() {
        return {
            softs: [
                "softs[0]",
                "softs[1]"
            ],

            tools: [
                { icon: bash, name: "Bash" },

                { icon: jetbrains, name: "JetBrains" },
                { icon: vscode, name: "VSCode" },

                { icon: uml, name: "UML" },
                { icon: postman, name: "Postman" },

                { icon: yarn, name: "Yarn" },
                { icon: npm, name: "npm" },
                { icon: maven, name: "Maven" },

                { icon: jira, name: "Jira" },
                { icon: devicon, name: "Devicon" }
            ]
        }
    }
});
</script>

<style lang="scss">
@media print {
    .fluid {
        max-width: 100% !important;
    }
}

.select-none {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}
</style>
