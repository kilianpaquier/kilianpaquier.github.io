import Vue from 'vue';
import Vuetify, {
    VApp,
    VBtn,
    VCol,
    VContainer,
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VExpansionPanels,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemGroup,
    VListItemSubtitle,
    VListItemTitle,
    VMain,
    VAvatar,
    VRow,
    VSpacer,
    VTooltip,
    VDivider,
    VCard,
    VCardSubtitle,
    VCardTitle,
    VCardText,
    VCardActions,
    VTimeline,
    VTimelineItem,
    VWindow,
    VWindowItem,
    VExpandTransition
} from 'vuetify/lib';
import i18n from "./i18n";

import "material-design-icons-iconfont/dist/material-design-icons.min.css";

Vue.use(Vuetify, {
    components: {
        VApp,
        VMain,
        VContainer,
        VRow,
        VCol,
        VSpacer,

        VImg,

        VList,
        VListItemGroup,
        VListItem,
        VListItemContent,
        VListItemAvatar,
        VListItemTitle,
        VListItemSubtitle,

        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,

        VCard,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VCardActions,

        VTimeline,
        VTimelineItem,

        VWindow,
        VWindowItem,

        VTooltip,
        VBtn,
        VIcon,
        VAvatar,
        VDivider,
        VExpandTransition
    }
});

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    lang: {
        t: (key, ...params) => i18n.t(key, params)
    }
});
