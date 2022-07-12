import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import InterestsComponent from "@/components/side/InterestsComponent.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("InterestsComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(InterestsComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create InterestsComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
