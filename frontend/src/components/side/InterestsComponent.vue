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
                        <v-img :class="borderColor()" :eager="true" :cover="true" :src="interest.img" class="rounded-circle mx-auto mb-3 interests-img w-100 h-100"></v-img>
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

    data: () => ({
        interests: [
            {
                title: "interests[0]",
                img: "/interests/basketball.png",
            },
            {
                title: "interests[1]",
                img: "/interests/movies.png",
            },
            {
                title: "interests[2]",
                img: "/interests/videogames.png",
            },
        ]
    }),

    setup: () => {
        const theme = useTheme();

        return {
            borderColor: () => theme.global.current.value.dark ? "interests-border-dark" : "interests-border"
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