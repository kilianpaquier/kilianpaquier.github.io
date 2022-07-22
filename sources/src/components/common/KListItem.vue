<template>
    <v-list-item v-bind:two-line="lines === 2" v-bind:three-line="lines === 3">
        <v-list-item-avatar v-if="avatar" v-bind:rounded="roundedAvatar">
            <v-img v-bind:src="avatar" v-bind:contain="containAvatar" v-bind:eager="eagerAvatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-if="title">
                {{ title }}
            </v-list-item-title>
            <slot></slot>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KListItem",
    props: {
        avatar: String,
        containAvatar: Boolean,
        eagerAvatar: Boolean,
        roundedAvatar: String,
        title: String,
        lines: Number
    }
});
</script>

<style scoped>

</style>
