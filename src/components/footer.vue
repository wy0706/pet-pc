<template>
    <div class="global-footer">footer</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {};
    },
});
</script>
<style lang="less" scoped>
.global-footer {
    height: @footer-h;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
