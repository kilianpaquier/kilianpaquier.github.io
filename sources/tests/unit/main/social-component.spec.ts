import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import SocialComponent from "@/components/main/SocialComponent.vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("SocialComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(SocialComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create SocialComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
