<template>
  <v-container fluid>
    <!-- Interests title -->
    <h2
      class="font-weight-bold mb-3"
      v-text="$vuetify.lang.t(`$vuetify.interests-title`)"
    />

    <!-- Interests imgs -->
    <v-row justify="center">
      <v-col
        cols="auto"
        class="text-center px-5"
        v-for="(interest, i) in interests"
        :key="i"
      >
        <rounded-outlined-img :object="interest" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Interest } from "@/model/entities";
import Component from "vue-class-component";
import RoundedOutlinedImg from "@/components/common/RoundedOutlinedImg.vue";

@Component({
    components: { RoundedOutlinedImg },
})
export default class InterestsComponent extends Vue {
  interests: Interest[] = [
      {
          title: "interests.basketball",
          img: "basketball.png",
      },
      {
          title: "interests.tvtime",
          img: "movies.png",
      },
      {
          title: "interests.games",
          img: "videogames.png",
      },
  ];
}
</script>
