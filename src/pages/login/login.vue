<template>
    <div
        class="container"
        style="
            border-radius: 4px;
            width: 80%;
            background-color: #fff;
            margin: 0 auto;
            padding: 10px;
        "
    >
        <div class="login-title">登录</div>
        <a-form
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <a-form-item
                :label-col="{ span: 0 }"
                :wrapper-col="{ span: 18, offset: 2 }"
                name="username"
                :rules="[
                    { required: true, message: 'Please input your username!' },
                ]"
            >
                <a-input
                    size="large"
                    placeholder="username"
                    v-model:value="formState.username"
                />
            </a-form-item>

            <a-form-item
                :label-col="{ span: 0 }"
                :wrapper-col="{ span: 18, offset: 2 }"
                name="password"
                :rules="[
                    { required: true, message: 'Please input your password!' },
                ]"
            >
                <a-input-password
                    size="large"
                    placeholder="password"
                    v-model:value="formState.password"
                />
            </a-form-item>

            <a-form-item
                name="remember"
                :wrapper-col="{ span: 18, offset: 2 }"
                class="item"
            >
                <a-checkbox v-model:checked="formState.remember"
                    >Remember me</a-checkbox
                >
                <a>忘记密码?</a>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 18, offset: 2 }">
                <a-button block type="primary" html-type="submit" size="large"
                    >登录</a-button
                >
            </a-form-item>
        </a-form>
        <div class="other">
            <!-- <a-button type="default" style="margin-right: 20px"
                >手机登录</a-button
            > -->
            <!-- <a-button type="default">微信登录</a-button> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { WechatOutlined, PhoneOutlined } from '@ant-design/icons-vue';
definePageMeta({ layout: 'loginlayout' });
const formState = reactive({
    username: '',
    password: '',
    remember: true,
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
<style lang="less" scoped>
.container {
    border: 1px solid #e9ebf3;
    border-radius: 4px;
    width: 90%;
    background-color: aliceblue;
    margin: 0 auto;
    padding: 10px;
}
.login-title {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    text-align: center;
}
.item {
    ::v-deep(.ant-form-item.ant-form-item-control-input-content) {
        display: flex;
        justify-content: space-between;
    }
}
.other {
    display: flex;
    padding: 10px;
    margin-left: 100px;
    .icon {
        width: 150px;
        text-align: center;
        margin-right: 50px;
    }
}
</style>
