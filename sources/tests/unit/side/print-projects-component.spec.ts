import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import PrintProjectsComponent from "@/components/side/PrintProjectsComponent.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("PrintProjectsComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;
    let wrapper: Wrapper<PrintProjectsComponent>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(PrintProjectsComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create PrintProjectsComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
