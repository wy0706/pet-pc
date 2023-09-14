// https://nuxt.com/docs/api/configuration/nuxt-config
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
// const path = require('path');
export default defineNuxtConfig({
    srcDir: 'src/',
    app: {},
    modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    devtools: { enabled: true },

    vite: {
        plugins: [
            createStyleImportPlugin({
                resolves: [AntdResolve()],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    additionalData:
                        '@import "@/assets/styles/default.less";ant-design-vue/dist/antd.less',
                    modifyVars: {
                        // 更改主题
                        // hack: `true; @import (reference) "${path.resolve(
                        //     'src/assets/styles/global.less',
                        // )}";`,
                        'primary-color': '#009688', // 全局主色
                        'link-color': '#009688', // 链接色
                        'success-color': '#00B86B', // 成功色
                        'warning-color': '#FF9500', // 警告色
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: {
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
            },
        },
    },
    // build: {

    // },
});
