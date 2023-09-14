<template>
    <div
        class="basic"
        style="
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #eee;
            box-sizing: border-box;
        "
    >
        <!-- <NuxtLayout name="header" class="header" /> -->
        <Header class="header"></Header>
        <div class="global-container">
            <slot></slot>
            <!-- <NuxtPage></NuxtPage> -->
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
export default defineComponent({
    componets: {
        Header,
        Footer,
    },
    setup() {
        return {};
    },
});
</script>
<style lang="less" scoped>
.basic {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
}
.header {
    height: @header-h;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.footer {
    height: @footer-h;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
.global-container {
    flex: 1;
    display: block;
    padding: 15px;
    margin: 15px;
    box-sizing: border-box;
    overflow: auto;
}
</style>
