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
            :class="{ 'py-0': edu.caption, 'pt-0': !edu.caption }">
            <v-row no-gutters>
              <v-col cols="12" v-text="$vuetify.lang.t(`$vuetify.${edu.value}`)" />
              <v-col cols="12">
                <skill-component :skills="edu.skills"></skill-component>
              </v-col>
            </v-row>
          </v-card-text>

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
import SkillComponent from "../side/SkillComponent.vue";

@Component({
    components: { SkillComponent }
})
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
          skills: [
              { icon: "/java/java-original.svg", name: "Java" },
              { icon: "devicon-spring-plain", name: "Spring" },
              { icon: "hibernate-original.svg", name: "Hibernate" },
              { icon: "maven-original.svg", name: "Maven" },
              { icon: "devicon-android-plain", name: "Android" },

              { icon: "/html5/html5-original.svg", name: "HTML" },
              { icon: "/bootstrap/bootstrap-original.svg", name: "Bootstrap" },

              { icon: "/csharp/csharp-original.svg", name: "C#" },
              { icon: "/dot-net/dot-net-original.svg", name: ".NET Framework" },

              { icon: "perforce-original.svg", name: "Perforce" },
              { icon: "unity-original.svg", name: "Unity" },
          ]
      },
      {
          title: "Polytech Tours",
          dates: "educations.polytech.dates",
          img: "polytechtours.jpg",
          value: "educations.polytech.title",
          skills: [
              { icon: "/java/java-original.svg", name: "Java" },
              { icon: "hibernate-original.svg", name: "Hibernate" },

              { icon: "/html5/html5-original.svg", name: "HTML" },
              { icon: "/bootstrap/bootstrap-original.svg", name: "Bootstrap" },

              { icon: "/javascript/javascript-original.svg", name: "Javascript" },
              { icon: "devicon-jquery-plain", name: "JQuery" },

              { icon: "/python/python-original.svg", name: "Python" },
              { icon: "devicon-php-plain", name: "PHP" },

              { icon: "/c/c-original.svg", name: "C" },
              { icon: "/cplusplus/cplusplus-original.svg", name: "C++" },
              { icon: "devicon-qt-original", name: "Qt" },
          ],
      },
  ];
}
</script>
