import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import AboutComponent from "@/components/main/AboutComponent.vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("AboutComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(AboutComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create AboutComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
