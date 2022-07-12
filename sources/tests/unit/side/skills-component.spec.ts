import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import SkillComponent from "@/components/side/SkillComponent.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.silent = true;
Vuetify.config.silent = true;

describe("SkillComponent.vue", () => {
    const localVue = createLocalVue();

    let vuetify: Vuetify;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: Wrapper<any>;

    beforeEach(() => {
        vuetify = new Vuetify();

        wrapper = mount(SkillComponent, {
            localVue,
            vuetify,
        });
    });

    it("should create SkillComponent", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should return 12 with a list of 1 elements with index 0", () => {
        expect(wrapper.vm.lastCol(0, ["test"])).toEqual(12);
    });

    it("should return 6 with a list of 2 elements with index 0", () => {
        expect(wrapper.vm.lastCol(0, ["test", "test"])).toEqual(6);
    });

    it("should return 6 with a list of 2 elements with index 1", () => {
        expect(wrapper.vm.lastCol(1, ["test", "test"])).toEqual(6);
    });

    it("should return 12 with a list of 3 elements with index 2", () => {
        expect(wrapper.vm.lastCol(2, ["test", "test", "test"])).toEqual(12);
    });
});
