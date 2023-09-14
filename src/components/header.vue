<template>
    <div class="global-header">
        <div class="header-left">
            <div class="logo" @click="goHome"></div>
            <div class="title cursor-pointer" @click="goHome">
                {{ $t('app.app') }}
            </div>
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
                        @click="goLogin('login')"
                        >{{ $t('app.login') }}</a-button
                    >
                    <a-button
                        type="default"
                        shape="round"
                        @click="goLogin('register')"
                        >{{ $t('app.register') }}</a-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import { GlobalOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: { GlobalOutlined },
    setup() {
        const store = useStore();
        const router = useRouter();
        const { locale: renameLocale } = useI18n();
        const { t } = useI18n();
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
            router.push('/');
        };
        const goLogin = (key: string) => {
            let url = key == 'login' ? '/login/login' : '/login/register';
            router.push(url);
        };
        return {
            langList,
            switchLang,
            goHome,
            goLogin,
            t,
            currentLang,
            renameLocale,
        };
    },
});
</script>

<style lang="less">
.global-header {
    height: @header-h;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
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
    background: url('../assets/images/logo.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    cursor: pointer;
}
</style>
