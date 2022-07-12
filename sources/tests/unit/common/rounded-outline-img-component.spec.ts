import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import RoundedOutlinedImg from "@/components/common/RoundedOutlinedImg.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("RoundedOutlinedImg.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(RoundedOutlinedImg, {
            localVue,
            vuetify,
            propsData: {
                object: {
                    title: "title",
                    img: "movies.png",
                },
            },
        });
    });

    it("should create RoundedOutlinedImg", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
