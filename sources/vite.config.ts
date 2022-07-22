import {defineConfig} from 'vite'
import createVuePlugin from '@vitejs/plugin-vue2'
import {VuetifyResolver} from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: "@/",
                replacement: `${path.resolve(__dirname, './src')}/`,
            }
        ]
    },
    plugins: [
        createVuePlugin({}),
        Components({
            resolvers: [
                // Vuetify
                VuetifyResolver(),
            ],

        }),
    ]
})
