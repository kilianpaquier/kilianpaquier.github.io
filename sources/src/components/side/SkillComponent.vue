<template>
  <v-container fluid>
    <!-- Skills title -->
    <h2
      class="font-weight-bold"
      v-text="$vuetify.lang.t(`$vuetify.skills-title`)"
    />

    <!-- Soft skills -->
    <v-list class="pt-0">
      <v-list-item
        v-for="(skill, i) in soft"
        :key="i"
        :class="{ 'mb-n3': i < soft.length - 1 }"
        class="text-right pe-0"
      >
        <v-list-item-content>
          <v-list-item-title v-text="$vuetify.lang.t(`$vuetify.${skill}`)" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- Hard skill -->
    <v-row>
      <!-- One column per skill category -->
      <v-col
        cols="12"
        :sm="lastCol(i, filteredSkills)"
        md="12"
        :lg="lastCol(i, filteredSkills)"
        :xl="lastCol(i, filteredSkills)"
        v-for="(category, i) in filteredSkills"
        :key="i"
      >
        <v-row no-gutters>
          <!-- Main section with category name and score -->
          <v-col cols="12" class="mb-1">
            <span
              v-if="category.name.includes('hard-skills.')"
              v-text="$vuetify.lang.t(`$vuetify.${category.name}`)"
            />
            <span v-else v-text="category.name" />
            <v-progress-linear
              :value="category.score"
              height="6"
              v-if="category.score"
            />
          </v-col>

          <!-- Subsection with an icon for each technology -->
          <v-col
            cols="auto"
            :key="j"
            v-for="(skill, j) in category.skills"
            class="pa-1"
          >
            <v-tooltip bottom :disabled="!skill.name">
              <template v-slot:activator="{ on, attrs }">
                <!-- Img if internal SVG -->
                <v-img
                  v-if="
                    skill.icon.includes('.svg') && !skill.icon.startsWith('/')
                  "
                  class="mx-auto small-img"
                  :src="`/img/skills/${skill.icon}`"
                  eager
                  v-bind="attrs"
                  v-on="on"
                />

                <!-- Img if external SVG -->
                <v-img
                  v-if="
                    skill.icon.includes('.svg') && skill.icon.startsWith('/')
                  "
                  class="mx-auto small-img"
                  :src="deviconPrefix + skill.icon"
                  eager
                  v-bind="attrs"
                  v-on="on"
                />

                <!-- Icon with it's font -->
                <em
                  v-if="!skill.icon.includes('.svg')"
                  :class="skill.icon"
                  class="small-icon colored"
                  v-bind="attrs"
                  v-on="on"
                ></em>
              </template>
              <span v-if="skill.name" v-text="skill.name" />
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { SkillCategory } from "@/model/entities";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SkillComponent extends Vue {
  deviconPrefix = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  soft = ["soft-skills.one", "soft-skills.two"];

  filteredSkills: SkillCategory[] = [
      {
          name: "Java",
          score: 70,
          skills: [
              { icon: "/java/java-original.svg", name: "Java" },
              { icon: "devicon-spring-plain", name: "Spring" },
              { icon: "quarkus-original.svg", name: "Quarkus" },
              { icon: "hibernate-original.svg", name: "Hibernate" },
              { icon: "maven-original.svg", name: "Maven" },
          ],
      },
      {
          name: "Frontend",
          score: 70,
          skills: [
              { icon: "devicon-typescript-plain", name: "TypeScript" },
              { icon: "/vuejs/vuejs-original.svg", name: "Vuejs" },
              { icon: "vuetify-original.svg", name: "Vuetify" },
              { icon: "devicon-nestjs-plain", name: "NestJS" },
              { icon: "devicon-angularjs-plain", name: "Angular & Material" },

              { icon: "/html5/html5-original.svg", name: "HTML" },
              { icon: "devicon-sass-original", name: "Sass" },
              { icon: "/bootstrap/bootstrap-original.svg", name: "Bootstrap" },

              { icon: "/javascript/javascript-original.svg", name: "Javascript" },
              { icon: "devicon-jquery-plain", name: "JQuery" },
          ],
      },
      {
          name: "hard-skills.tests",
          score: 70,
          skills: [
              { icon: "karatelabs-plain.svg", name: "Karaté" },
              { icon: "devicon-cucumber-plain", name: "Cucumber" },
              { icon: "devicon-jasmine-plain", name: "Jasmine" },
              { icon: "devicon-jest-plain", name: "Jest" },
          ],
      },
      {
          name: "Cloud",
          score: 50,
          skills: [
              { icon: "devicon-kubernetes-plain", name: "Kubernetes" },
              { icon: "/docker/docker-original.svg", name: "Docker" },
              { icon: "helm-original.svg", name: "Helm" },
              { icon: "devicon-prometheus-original", name: "Prometheus" },
              { icon: "traefikproxy-original.svg", name: "Traefik proxy" },
          ],
      },
      {
          name: "hard-skills.database",
          score: 60,
          skills: [
              { icon: "/postgresql/postgresql-original.svg", name: "Postgresql" },
              { icon: "dbeaver-original.svg", name: "Dbeaver" },
              { icon: "liquibase-original.svg", name: "Liquibase" },
          ],
      },
      {
          name: "CI/CD",
          score: 60,
          skills: [{ icon: "/gitlab/gitlab-original.svg", name: "GitLab CI/CD" }],
      },
      {
          name: "hard-skills.elastic-stack",
          score: 30,
          skills: [
              { icon: "elasticsearch-original.svg", name: "Elasticsearch" },
              { icon: "kibana-original.svg", name: "Kibana" },
          ],
      },
      {
          name: "Python",
          score: 40,
          skills: [
              { icon: "/python/python-original.svg", name: "Python" },
              { icon: "devicon-flask-plain", name: "Flask" },
          ],
      },
      {
          name: "C#",
          score: 40,
          skills: [
              { icon: "/csharp/csharp-original.svg", name: "C#" },
              { icon: "/dot-net/dot-net-original.svg", name: ".NET Framework" },
          ],
      },
      {
          name: "C/C++",
          score: 30,
          skills: [
              { icon: "/c/c-original.svg", name: "C" },
              { icon: "/cplusplus/cplusplus-original.svg", name: "C++" },
              { icon: "devicon-qt-original", name: "Qt" },
          ],
      },
      {
          name: "hard-skills.tools",
          skills: [
              { icon: "devicon-bash-plain", name: "Bash" },

              { icon: "/jetbrains/jetbrains-original.svg", name: "JetBrains" },
              { icon: "/vscode/vscode-original.svg", name: "VSCode" },

              { icon: "uml-original.svg", name: "UML" },
              { icon: "postman-plain.svg", name: "Postman" },

              { icon: "devicon-yarn-plain", name: "Yarn" },
              { icon: "devicon-npm-original-wordmark", name: "npm" },

              { icon: "/jira/jira-original.svg", name: "Jira" },
              { icon: "/devicon/devicon-original.svg", name: "Devicon" },
          ],
      },
  ];

  lastCol(index: number, list: unknown[]): number {
      if (list.length % 2 === 0) {
          return 6;
      } else if (index !== list.length - 1) {
          return 6;
      } else {
          return 12;
      }
  }
}
</script>

<style lang="sass" scoped>
.small-icon
    font-size: 1.75rem

$skill-icon-size: 28px
.small-img
    max-height: $skill-icon-size
    min-height: $skill-icon-size
    max-width: $skill-icon-size
    min-width: $skill-icon-size
</style>
