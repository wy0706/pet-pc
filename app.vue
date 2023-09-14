<template>
    <div>
        <a-config-provider :locale="currentLang">
            <NuxtPage />
        </a-config-provider>
    </div>
</template>
<script lang="ts" setup>
import zh from 'ant-design-vue/es/locale/zh_CN';
import en from 'ant-design-vue/es/locale/en_US';
import dayjs from 'dayjs';
import { useStore } from './store';
import { storeToRefs } from 'pinia';
const store = useStore();
import { ref, watch } from 'vue';
// import { theme } from 'ant-design-vue';

//首次加载获取 默认zh
const currentLang = ref(switchLangFun(store.appStore.getStateLang));
//国际化时间组件
watch(currentLang, (val) => {
    dayjs.locale(val.locale);
});

//获取store中的语言  storeToRefs可以创建一个响应式的数据   具体使用方法还是需要官方文档
const { lang } = storeToRefs(store.appStore);
watch(lang, (val) => {
    if (val) currentLang.value = switchLangFun(val);
});
//本地cookie中的zh是字符串
function switchLangFun(val: string) {
    switch (val) {
        case 'zh':
            return zh;
        case 'en':
            return en;
        // case 'hk':
        //     return hk;
        // case 'ar':
        //     return ar;
        default:
            return zh;
    }
}
</script>
