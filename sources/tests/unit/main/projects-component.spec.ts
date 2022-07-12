import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import ProjectsComponent from "@/components/main/ProjectsComponent.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("ProjectsComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(ProjectsComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create ProjectsComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
