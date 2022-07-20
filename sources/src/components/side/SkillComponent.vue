<template>
  <v-row no-gutters>
    <v-col cols="auto" v-for="(skill, h) in skills" :key="h" class="pa-1">
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
</template>

<script lang="ts">
import { Skill } from "@/model/entities";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class SkillComponent extends Vue {
  deviconPrefix = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  @Prop({ required: true })
  skills!: Skill[];
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
