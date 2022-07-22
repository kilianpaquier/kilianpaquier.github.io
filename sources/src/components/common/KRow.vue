<template>
    <v-row no-gutters>
        <v-col cols="12">
            <h2 class="mb-3">{{ $t(title) }}</h2>
        </v-col>
        <v-col cols="12">
            <slot></slot>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KRow",

    props: {
        title: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>

</style>
