<template>
    <div>
        <v-img v-bind:src="img" class="rounded-circle mx-auto mb-3 interests-img" v-bind:class="borderColor" eager/>
        <span class="body-2">{{ title }}</span>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KRoundedImg",

    computed: {
        borderColor(): string {
            return this.$vuetify.theme.dark ? "interests-border-dark" : "interests-border";
        }
    },

    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
.interests-border {
    box-shadow: 0 0 0 7px #CFD8DC;
    -moz-box-shadow: 0 0 0 7px #CFD8DC;
    -o-box-shadow: 0 0 0 7px #CFD8DC;
    -webkit-box-shadow: 0 0 0 7px #CFD8DC;
}

.interests-border-dark {
    box-shadow: 0 0 0 7px #494949;
    -moz-box-shadow: 0 0 0 7px #494949;
    -o-box-shadow: 0 0 0 7px #494949;
    -webkit-box-shadow: 0 0 0 7px #494949;
}

.interests-img {
    min-height: 90px;
    min-width: 90px;
    max-width: 90px;
    max-height: 90px;
}
</style>
