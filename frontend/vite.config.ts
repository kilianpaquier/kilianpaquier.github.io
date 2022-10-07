import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import viteCompression from "vite-plugin-compression";
import svgLoader from "vite-svg-loader";
import type {ViteSSGOptions} from "vite-ssg";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify(),
        svgLoader({
            svgo: true,
            defaultImport: "component"
        }),
        cssInjectedByJsPlugin({
            topExecutionPriority: true
        }),
        viteCompression({
            filter: /.(webp|js|css|html|jpg|png)$/,
            threshold: 0,
            algorithm: "brotliCompress",
            verbose: false
        })
    ],
    ssr: {
        noExternal: ["vuetify"]
    },
    build: {
        emptyOutDir: true,
        polyfillModulePreload: false,
        cssCodeSplit: true
    },
    ssgOptions: {
        script: "async defer",
        formatting: "minify",
        mode: "production",
        crittersOptions: {
            pruneSource: true,
            logLevel: "debug",
            preload: "js-lazy"
        }
    } as ViteSSGOptions,
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
})
