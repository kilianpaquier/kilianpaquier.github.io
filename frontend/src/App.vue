<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTheme} from "vuetify";

export default defineComponent({
    name: "App",

    setup: () => {
        const theme = useTheme();
        const refresh = (media: MediaQueryList | MediaQueryListEvent) => theme.global.name.value = media.matches ? "dark" : "light";

        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        refresh(mq);

        mq.addEventListener('change', (e) => {
            refresh(e);
        });
    }
});
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>