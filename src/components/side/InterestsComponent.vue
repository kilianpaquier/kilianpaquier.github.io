<template>
    <v-row :no-gutters="true">
        <v-col cols="12">
            <h2 class="mb-3">{{ $t("projects_title") }}</h2>
        </v-col>
        <v-col cols="12">
            <!-- Interests -->
            <v-row justify="center">
                <v-col v-for="(interest, index) in interests" :key="'interest_' + index" class="text-center" cols="auto">
                    <div>
                        <v-img :class="borderColor()" :cover="true" :eager="true" :sizes="sizes" :src="interest.src" :srcset="interest.srcset" class="rounded-circle mx-auto mb-3 interests-img w-100 h-100"></v-img>
                        <span class="body-2">{{ $t(interest.title) }}</span>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTheme} from "vuetify";

export default defineComponent({
    name: "InterestsComponent",

    setup: () => {
        const theme = useTheme();

        return {
            borderColor: () => theme.global.current.value.dark ? "interests-border-dark" : "interests-border",
            sizes: "20vw",
            interests: [
                {
                    title: "interests[0]",
                    src: "/interests/basketball-small.webp",
                    srcset: "/interests/basketball-large.webp 1214w, /interests/basketball.webp 607w, /interests/basketball-small.webp 304w",
                },
                {
                    title: "interests[1]",
                    src: "/interests/movies.webp",
                    srcset: "/interests/movies.webp 626w, /interests/movies-small.webp 313w",
                },
                {
                    title: "interests[2]",
                    src: "/interests/videogames-small.webp",
                    srcset: "/interests/videogames-large.webp 1530w, /interests/videogames.webp 765w, /interests/videogames-small.webp 383w",
                },
            ]
        }
    }
});
</script>

<style lang="scss" scoped>
.interests-border {
  box-shadow: 0 0 0 7px #eeeeee;
  -moz-box-shadow: 0 0 0 7px #eeeeee;
  -o-box-shadow: 0 0 0 7px #eeeeee;
  -webkit-box-shadow: 0 0 0 7px #eeeeee;
}

.interests-border-dark {
  box-shadow: 0 0 0 7px #424242;
  -moz-box-shadow: 0 0 0 7px #424242;
  -o-box-shadow: 0 0 0 7px #424242;
  -webkit-box-shadow: 0 0 0 7px #424242;
}

.interests-img {
  min-height: 90px;
  min-width: 90px;
  max-width: 90px;
  max-height: 90px;
}
</style>