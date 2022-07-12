<template>
  <v-container fluid>
    <v-list rounded class="pa-0 text-center text-sm-right">
      <v-list-item-group v-model="selectedItem" mandatory>
        <!-- One item per lang -->
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          @click="changeLang(lang)"
        >
          <!-- Lang title and score -->
          <v-list-item-content class="d-none d-sm-block">
            <v-list-item-title
              v-text="$vuetify.lang.t(`$vuetify.${lang.value}`)"
            />
            <v-list-item-subtitle
              v-text="$vuetify.lang.t(`$vuetify.${lang.info}`)"
            />
          </v-list-item-content>

          <!-- Lang flag -->
          <v-list-item-avatar class="mx-auto ms-sm-4">
            <v-img
              :src="`/img/flags/1x1/${lang.img}`"
              contain
              eager
            />
          </v-list-item-avatar>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Lang } from "@/model/entities";
import Component from "vue-class-component";

@Component
export default class LangComponent extends Vue {
  langs: Lang[] = [
      {
          img: "fr.svg",
          value: "langs.fr",
          lang: "fr",
          info: "langs.natal",
      },
      {
          img: "gb.svg",
          value: "langs.en",
          lang: "en",
          info: "langs.professional",
      },
  ] as Lang[];

  get selectedItem() {
      return this.$vuetify.lang.current === "fr" ? 0 : 1;
  }

  set selectedItem(item: number) {
      // Do nothing
  }

  changeLang(item: Lang) {
      this.$vuetify.lang.current = item.lang;
  }
}
</script>
