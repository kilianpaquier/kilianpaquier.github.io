<template>
    <k-row title="interests_title">
        <!-- Interests -->
        <v-row justify="center">
            <v-col cols="auto" class="text-center px-7" v-for="(interest, index) in interests" :key="'int' + index">
                <k-rounded-img v-bind:title="$t(interest.title).toString()" v-bind:img="interest.img"></k-rounded-img>
            </v-col>
        </v-row>
    </k-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KRow from "../common/KRow.vue";
import basketball from "../../assets/interests/basketball.png";
import movies from "../../assets/interests/movies.png";
import videogames from "../../assets/interests/videogames.png";
import KRoundedImg from "../common/KRoundedImg.vue";

export default defineComponent({
    name: "InterestsComponent",
    components: {KRoundedImg, KRow},

    data() {
        return {
            interests: [
                {
                    title: "interests[0]",
                    img: basketball,
                },
                {
                    title: "interests[1]",
                    img: movies,
                },
                {
                    title: "interests[2]",
                    img: videogames,
                },
            ]
        }
    }
});
</script>

<style scoped>

</style>
