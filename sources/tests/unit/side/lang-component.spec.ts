import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import LangComponent from "@/components/side/LangComponent.vue";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("LangComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(LangComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create LangComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should change current lang to fr", () => {
        wrapper.vm.changeLang({
            lang: "fr",
            img: "fr.png",
            info: "test",
            value: "fr",
        });
        expect(wrapper.vm.selectedItem).toEqual(0);
    });

    it("should change current lang to en", () => {
        wrapper.vm.changeLang({
            lang: "en",
            img: "gb.png",
            info: "test",
            value: "en",
        });
        expect(wrapper.vm.selectedItem).toEqual(1);
    });
});
