<template>
    <div class="global-header">
        <div class="header-left">
            <div class="logo" @click="goHome"></div>
            <div class="title">{{ $t('app.app') }}</div>
        </div>
        <div class="header-right">
            <a-dropdown placement="bottom">
                <GlobalOutlined
                    style="color: #999; font-size: 20px"
                    class="ant-dropdown-link"
                    @click.prevent
                />
                <template #overlay>
                    <a-menu>
                        <a-menu-item v-for="item in langList" :key="item.key">
                            <a
                                href="javascript:;"
                                :class="{ langColor: item.key == renameLocale }"
                                @click="switchLang(item.key)"
                                >{{ item.title }}</a
                            >
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <div class="login">
                <div>
                    <a-button
                        type="primary"
                        shape="round"
                        style="margin-right: 10px"
                        >{{ $t('app.login') }}</a-button
                    >
                    <a-button type="default" shape="round">{{
                        $t('app.register')
                    }}</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { locale: renameLocale } = useI18n();
const { t } = useI18n();
import { reactive, ref } from 'vue';
import { useStore } from '@/store';
import { GlobalOutlined } from '@ant-design/icons-vue';
const store = useStore();
const currentLang = useCookie('lang'); //获取cookie中的lang
const langList = ref([
    {
        key: 'zh',
        label: '中文',
        title: '中文',
    },
    {
        id: 'en',
        key: 'en',
        label: 'English',
        title: 'English',
    },
]);

const switchLang = (val: string) => {
    renameLocale.value = val; //本地使用的语言
    currentLang.value = val; //更改cookie中的值
    store.appStore.changeLang(val);
    console.log('currentLang', currentLang.value);
};
const goHome = () => {
    console.log('返回首页');
};
</script>
<style lang="less" scoped>
.global-header {
    height: @header-h;
    width: 100%;
    background-color: @bgColor;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
}
.header-left {
    flex: 1;
    display: flex;
    align-items: center;
}
.header-right {
    min-width: 100px;
    max-width: 300px;
    display: flex;
    align-items: center;
}
.login {
    margin-left: 30px;
}
.langColor {
    color: @primary;
}
.title {
    margin-left: 15px;
}
.logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: url('../assets/images/logo.jpeg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    cursor: pointer;
}
</style>
