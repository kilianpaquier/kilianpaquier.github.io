<template>
  <div>
    <v-img
      :src="`/img/interests/${object.img}`"
      class="rounded-circle mx-auto mb-3 interests-border interests-img"
      v-animate-css.hover="'rubberBand'"
      eager
    />
    <span class="body-2" v-text="$vuetify.lang.t(`$vuetify.${object.title}`)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class RoundedOutlinedImg extends Vue {
  @Prop({ required: true })
  object!: { img: string; title: string };
}
</script>

<style lang="sass" scoped>
.interests-border
    box-shadow: 0 0 0 7px #CFD8DC
    -moz-box-shadow: 0 0 0 7px #CFD8DC
    -o-box-shadow: 0 0 0 7px #CFD8DC
    -webkit-box-shadow: 0 0 0 7px #CFD8DC

.interests-img
    min-height: 90px
    min-width: 90px
    max-width: 90px
    max-height: 90px

</style>
