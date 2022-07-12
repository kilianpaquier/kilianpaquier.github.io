<template>
  <v-container fluid class="py-0">
    <v-row no-gutters>
      <!-- All links in v-for -->
      <v-col cols="auto" v-for="(social, i) in socials" :key="i">
        <v-tooltip top :color="social.color">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              icon
              :color="social.color"
              :href="sanitize(social.url)"
              target="_blank"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon :size="iconSize" v-text="social.icon" />
            </v-btn>
          </template>
          <span v-text="social.text" />
        </v-tooltip>
      </v-col>

      <!-- Resume PDF link -->
      <v-col cols="auto" class="d-print-none">
        <v-tooltip top color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              icon
              color="primary"
              :href="pdfUrl()"
              download
              v-bind="attrs"
              v-on="on"
            >
              <v-icon :size="iconSize" v-text="mdiDownloadCircleOutline" />
            </v-btn>
          </template>
          <span v-text="$vuetify.lang.t('$vuetify.pdf-button')" />
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
    mdiDownloadCircleOutline,
    mdiGithub,
    mdiGitlab,
    mdiLinkedin,
} from "@mdi/js";
import Vue from "vue";
import Component from "vue-class-component";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { Social } from "@/model/entities";

@Component
export default class SocialComponent extends Vue {
  mdiDownloadCircleOutline = mdiDownloadCircleOutline;
  iconSize = 30;

  socials: Social[] = [
      {
          text: "GitHub",
          icon: mdiGithub,
          url: "https://github.com/kilian-paquier",
          color: "black",
      },
      {
          text: "GitLab",
          icon: mdiGitlab,
          url: "https://gitlab.com/kilian-paquier",
          color: "red",
      },
      {
          text: "Linkedin",
          icon: mdiLinkedin,
          url: "https://www.linkedin.com/in/kilian-paquier",
          color: "primary",
      },
  ];

  pdfUrl(): string {
      const url =
      this.$vuetify.lang.current === "fr"
          ? "/pdf/CV_Kilian_PAQUIER.pdf"
          : "/pdf/Kilian_PAQUIER_Resume.pdf";
      return this.sanitize(url);
  }

  sanitize(url: string): string {
      return sanitizeUrl(url);
  }
}
</script>
