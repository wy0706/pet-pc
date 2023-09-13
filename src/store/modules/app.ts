import { defineStore } from 'pinia';
// defineStore 方法有两个参数，第一个参数是模块化名字
// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const appStore = defineStore('app', {
    state() {
        // 存放的就是模块的变量
        return {
            lang: useCookie('lang') || 'zh',
        };
    },
    getters: {
        getStateLang(state) {
            // 页面中使用了多次，这里只会执行一次，然后缓存起来
            return state.lang ? state.lang : 'zh';
        },
    },
    actions: {
        changeLang(lang: string) {
            this.lang = lang;
        },
    },
});
