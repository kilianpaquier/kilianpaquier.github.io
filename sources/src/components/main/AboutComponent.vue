<template>
  <v-container fluid class="pt-0">
    <!-- Title -->
    <h1
      class="h1 font-weight-bold mb-3"
      v-text="$vuetify.lang.t('$vuetify.title')"
    />

    <!-- About paragraph -->
    <p class="text-justify mb-0" v-text="$vuetify.lang.t('$vuetify.about')" />
  </v-container>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class AboutComponent extends Vue {}
</script>
