<template>
    <div
        class="login-layout"
        style="
            height: 100%;
            width: 100%;
            display: flex;
            padding: 10px;
            box-sizing: border-box;
        "
    >
        <div class="layout-left" style="width: 50%">
            <div class="login-admin cursor-pointer" @click="goHome">
                <div class="logo"></div>
                <div>{{ $t('app.app') }}</div>
            </div>
            <div class="bg">background</div>
        </div>
        <div class="layout-right" style="width: 50%">
            <NuxtPage></NuxtPage>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
    name: 'loginlayout',
    setup() {
        const { t } = useI18n();
        const router = useRouter();
        const goHome = () => {
            router.push('/');
        };
        return { goHome, t };
    },
});
</script>
<style lang="less" scoped>
.login-layout {
    height: 100%;
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    background-color: @login-bg;
}
.layout-left {
    width: 50%;
}
.layout-right {
    width: 50%;
    margin-top: 300px;
    box-sizing: border-box;
}
// ---------上面不生效
.login-admin {
    height: 100px;
    display: flex;
    align-items: center;
}
.logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: url('../assets/images/logo.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
.bg {
    text-align: center;
}
</style>
