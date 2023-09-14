<template>
    <div class="global-container">
        <div class="home-list" v-for="(item, index) in data" :key="index">
            <div class="home-item">
                <div class="title">
                    <div class="subTitle">
                        <img src="../assets/svg/fire.svg" alt="" />
                        <span>{{ item.title }}</span>
                    </div>
                    <div
                        class="cursor-pointer more"
                        @click="lookMore(item.type)"
                    >
                        <span style="margin-right: 4px">查看更多</span>
                        <ArrowRightOutlined />
                    </div>
                </div>
                <a-row :gutter="[16, 32]">
                    <a-col
                        :lg="24"
                        :xl="12"
                        :xxl="8"
                        v-for="child in item.children"
                        :key="child.id"
                    >
                        <div
                            class="cursor-pointer hot-item animation-card"
                            @click="goDetail(child)"
                        >
                            <img
                                src="../assets/images/demo.png"
                                class="hot-img"
                                alt=""
                            />
                            <div class="hot-info">
                                <div class="hot-title one">
                                    {{ child.title }}
                                </div>
                                <div class="five desc">{{ child.desc }}</div>
                            </div>
                            <div class="avatar" @click.stop="goOtherAuthor">
                                <img
                                    :src="child.avater"
                                    class="user-avatar"
                                    style="width: 24px"
                                    alt=""
                                />
                                <span>{{ child.username }}</span>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { data } from './data';
import { ArrowRightOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    name: '',
    components: { ArrowRightOutlined },
    setup() {
        const lookMore = () => {};
        const goOtherAuthor = () => {};
        const goDetail = () => {};
        return {
            data,
            lookMore,
            goOtherAuthor,
            goDetail,
        };
    },
});
</script>
<style lang="less" scoped>
.home-list {
    margin-bottom: 20px;
    width: 100%;
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    .subTitle {
        font-weight: 600;
        color: #222222;
        font-size: 20px;
        display: flex;
        align-items: center;
        > img {
            width: 24px;
            height: 24px;
            margin-right: 12.5px;
        }
    }
    .more {
        min-width: 112px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover,
        :active {
            background-color: #f8f8f8;
            color: @primary-color;
        }
    }
}

.hot-item {
    width: 100%;
    border: 1px solid #e9ebf3;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    .hot-img {
        display: block;
        width: 100%;
    }
    .hot-info {
        padding: 0 16px 16px;
        flex: 1 1 auto;
    }
    .hot-title {
        height: 20px;
        font-weight: 600;
        color: #222222;
        font-size: 20px;
        line-height: 20px;
        margin: 16px 0;
        &:hover,
        &:active {
            color: @primary;
        }
    }
}

.avatar {
    display: flex;
    align-items: center;
    height: 65px;
    box-sizing: border-box;
    border-top: 1px solid #e9ebf3;

    span {
        margin-left: 8px;
        font-weight: 600;
        color: #222222;
        font-size: 16px;
        &:hover,
        &:active {
            color: @primary;
        }
    }
}

.desc {
    min-height: 120px;
}
</style>
