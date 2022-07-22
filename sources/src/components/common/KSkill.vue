<template>
    <v-tooltip bottom v-bind:disabled="!title">
        <template v-slot:activator="{ on, attrs }">
            <v-img class="mx-auto small-img" v-bind:src="icon" v-bind="attrs" v-on="on" contain eager/>
        </template>
        <span v-if="title">
            {{ title }}
        </span>
    </v-tooltip>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KSkill",
    props: {
        title: String,
        icon: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
.small-icon {
    font-size: 1.75rem;
}

$skill-icon-size: 28px;
.small-img {
    max-height: $skill-icon-size;
    min-height: $skill-icon-size;
    max-width: $skill-icon-size;
    min-width: $skill-icon-size;
}
</style>
