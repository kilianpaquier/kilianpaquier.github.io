const { defineConfig } = require("@vue/cli-service");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = defineConfig({
    transpileDependencies: ["vuetify"],
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ]
    },
    pwa: {
        themeColor: "white",
        name: "Kilian PAQUIER",
        iconPaths: {
            faviconSVG: "favicon.ico",
            favicon32: "favicon.ico",
            favicon16: "favicon.ico",
            appleTouchIcon: "favicon.ico",
            maskIcon: "favicon.ico",
            msTileImage: "favicon.ico"
        }
    }
});
