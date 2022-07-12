import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import ExpComponent from "@/components/main/ExpComponent.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("ExpComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(ExpComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create ExpComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
