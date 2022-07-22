import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from "./plugins/i18n";
import {loadFonts} from './plugins/webfontloader';

Vue.config.productionTip = false;
loadFonts().then(() => {});

new Vue({
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
