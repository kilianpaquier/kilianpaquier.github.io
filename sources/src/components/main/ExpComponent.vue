<template>
  <v-container fluid>
    <!-- Experiences title -->
    <h2
      class="font-weight-bold mb-3"
      v-text="$vuetify.lang.t(`$vuetify.experiences-title`)"
    />

    <v-expansion-panels mandatory>
      <!-- For each main experience -->
      <v-expansion-panel v-for="(exp, i) in experiences" :key="i">
        <!-- Panel header -->
        <v-expansion-panel-header class="py-0">
          <!-- List of title, subtitle, job -->
          <v-list>
            <v-list-item three-line>
              <!-- Experience avatar -->
              <v-list-item-avatar>
                <v-img
                  :src="`/img/experiences/${exp.img}`"
                  contain
                  eager
                />
              </v-list-item-avatar>

              <!-- Experience title, date and job -->
              <v-list-item-content>
                <v-list-item-title v-text="exp.title" />
                <v-list-item-subtitle
                  v-text="$vuetify.lang.t(`$vuetify.${exp.dates}`)"
                />
                <v-list-item-subtitle
                  v-text="$vuetify.lang.t(`$vuetify.${exp.job}`)"
                />
              <v-list-item-subtitle class="mt-2">
                <skill-component :skills="exp.skills"></skill-component>
              </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-header>

        <!-- Content with list of missions -->
        <v-expansion-panel-content>
          <v-divider></v-divider>

          <!-- List of missions -->
          <v-list>
            <v-list-item
              v-for="(item, j) in exp.text"
              :key="j"
              :class="{ 'mb-n2': j < exp.text.length - 1 }"
            >
              <v-list-item-content
                class="body-2"
                v-text="$vuetify.lang.t(`$vuetify.${item}`)"
              />
            </v-list-item>
          </v-list>

          <!-- Captions if needed -->
          <v-row class="text-right" no-gutters v-if="exp.captions">
            <v-col
              cols="12"
              class="caption"
              v-for="(caption, k) in exp.captions"
              :key="k"
              v-text="$vuetify.lang.t(`$vuetify.${caption}`)"
            />
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- For each old experience -->
      <v-expansion-panel>
        <!-- Header of old experiences -->
        <v-expansion-panel-header class="py-0">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-text="$vuetify.lang.t(`$vuetify.${oldExperience.title}`)"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-header>

        <!-- Content with the list of jobs -->
        <v-expansion-panel-content>
          <v-divider></v-divider>

          <!-- List of jobs -->
          <v-list>
            <v-list-item
              v-for="(item, i) in oldExperience.text"
              :key="i"
              three-line
            >
              <!-- Avatar of each job -->
              <v-list-item-avatar>
                <v-img
                  :src="`/img/experiences/${item.img}`"
                  contain
                />
              </v-list-item-avatar>

              <!-- Content of each job -->
              <v-list-item-content>
                <v-list-item-title
                  class="body-2"
                  v-text="$vuetify.lang.t(`$vuetify.${item.title}`)"
                />
                <v-list-item-subtitle
                  v-text="$vuetify.lang.t(`$vuetify.${item.dates}`)"
                />
                <v-list-item-subtitle
                  v-text="$vuetify.lang.t(`$vuetify.${item.value}`)"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- Captions if needed -->
          <v-row class="text-right" no-gutters v-if="oldExperience.captions">
            <v-col
              cols="12"
              class="caption"
              v-for="(caption, k) in oldExperience.captions"
              :key="k"
              v-text="$vuetify.lang.t(`$vuetify.${caption}`)"
            />
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { Experience, OldExperience } from "@/model/entities";
import Vue from "vue";
import Component from "vue-class-component";
import SkillComponent from "../side/SkillComponent.vue";

@Component({
    components: { SkillComponent },
})
export default class ExpComponent extends Vue {
  deviconPrefix = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  experiences: Experience[] = [
      {
          title: "Sopra Steria",
          job: "experiences.tools.title",
          dates: "experiences.tools.dates",
          img: "soprasteria.png",
          text: [
              "experiences.tools.two",
              "experiences.tools.three",
              "experiences.tools.four",
          ],
          captions: [
              "experiences.tools.us",
              "experiences.tools.implementation",
          ],
          skills: [
              { icon: "/java/java-original.svg", name: "Java" },
              { icon: "devicon-spring-plain", name: "Spring" },
              { icon: "quarkus-original.svg", name: "Quarkus" },
              { icon: "hibernate-original.svg", name: "Hibernate" },
              { icon: "maven-original.svg", name: "Maven" },

              { icon: "devicon-typescript-plain", name: "TypeScript" },
              { icon: "devicon-angularjs-plain", name: "Angular" },
              { icon: "/bootstrap/bootstrap-original.svg", name: "Bootstrap" },

              { icon: "karatelabs-plain.svg", name: "Karatelabs" },
              { icon: "devicon-jasmine-plain", name: "Jasmine" },

              { icon: "devicon-kubernetes-plain", name: "Kubernetes" },
              { icon: "/docker/docker-original.svg", name: "Docker" },
              { icon: "helm-original.svg", name: "Helm" },
              // { icon: "devicon-prometheus-original", name: "Prometheus" },
              { icon: "traefikproxy-original.svg", name: "Traefik proxy" },
              { icon: "envoyproxy-original.svg", name: "Envoy proxy" },

              { icon: "/postgresql/postgresql-original.svg", name: "Postgresql" },
              // { icon: "dbeaver-original.svg", name: "Dbeaver" },
              { icon: "liquibase-original.svg", name: "Liquibase" },

              { icon: "/gitlab/gitlab-original.svg", name: "GitLab CI/CD" },

              { icon: "elasticsearch-original.svg", name: "Elasticsearch" },
              // { icon: "kibana-original.svg", name: "Kibana" },

              { icon: "/python/python-original.svg", name: "Python" },
              { icon: "devicon-flask-plain", name: "Flask" },
          ],
      },
      {
          title: "Alten",
          job: "experiences.alten.title",
          dates: "experiences.alten.dates",
          img: "alten.png",
          text: [
              "experiences.alten.two",
              "experiences.alten.three",
          ],
          skills: [
              { icon: "devicon-typescript-plain", name: "TypeScript" },
              { icon: "/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
              { icon: "devicon-nestjs-plain", name: "NestJS" },

              { icon: "/javascript/javascript-original.svg", name: "Javascript" },
              { icon: "devicon-electron-original", name: "ElectronJS" },
              { icon: "devicon-jest-plain", name: "Jest" },
          ],
      },
  ];

  oldExperience: OldExperience = {
      title: "experiences.old.title",
      text: [
          {
              title: "experiences.old.eurosys.title",
              dates: "experiences.old.eurosys.dates",
              value: "experiences.old.eurosys.value",
              img: "eurosys.png",
          },
          {
              title: "experiences.old.ddt.title",
              dates: "experiences.old.ddt.dates",
              value: "experiences.old.ddt.value",
              img: "ddt.png",
          },
          {
              title: "experiences.old.ufcv.title",
              dates: "experiences.old.ufcv.dates",
              value: "experiences.old.ufcv.value",
              img: "ufcv.png",
          },
          {
              title: "experiences.old.cgcv.title",
              dates: "experiences.old.cgcv.dates",
              value: "experiences.old.cgcv.value",
              img: "cgcv.png",
          },
          {
              title: "experiences.old.dreal.title",
              dates: "experiences.old.dreal.dates",
              value: "experiences.old.dreal.value",
              img: "dreal.png",
          },
      ],
      captions: [
          "experiences.old.ddt.caption",
          "experiences.old.ufcv.caption",
          "experiences.old.cgcv.caption",
          "experiences.old.dreal.caption",
      ],
  };
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