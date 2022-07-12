import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import EduComponent from "@/components/main/EduComponent.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("EduComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;
    let wrapper: Wrapper<EduComponent>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(EduComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create EduComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
