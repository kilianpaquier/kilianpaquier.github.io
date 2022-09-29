import HomeView from "@/views/HomeView.vue";
import type {RouteRecordRaw, RouterOptions} from "vue-router";
import {createMemoryHistory} from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        name: "Home",
        path: "/",
        component: HomeView
    }
]

export const routerOptions: RouterOptions = {
    history: createMemoryHistory(),
    routes
};
