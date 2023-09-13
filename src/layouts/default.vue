<template>
    <div
        class="default"
        style="
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #eee;
            box-sizing: border-box;
        "
    >
        <NuxtLayout name="header" class="header" />
        <div class="global-container">
            <NuxtPage></NuxtPage>
        </div>
        <NuxtLayout name="footer" class="footer" />
    </div>
</template>
<style lang="less">
.default {
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
    height: 150px;
    border-top: 1px solid #eee;
    box-sizing: border-box;
}
.global-container {
    flex: 1;
    display: block;
    padding: 15px;
    margin: 15px;
    box-sizing: border-box;
}
</style>
