<template>
    <section>
        <p>{{ $t('app.app') }}</p>
        <!-- 标题 -->
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
console.log('标题=====', t('app.app')); //标题
</script>
