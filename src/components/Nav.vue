<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_qnuaci4wh9i.css">
    <div class="NavContainer" >
        <button @click="GoToUser()">
            <i class="iconfont icon-yonghu"></i>
        </button>
        <button @click="GoToHome()">
            <i class="iconfont icon-zhuye"></i>
        </button>
        <button>
            <i class="iconfont icon-tongzhi"></i>
        </button>
        <button @click="GoToSettings()">
            <i class="iconfont icon-shezhi"></i>
        </button>
    </div>
</template>

<script setup>
import router from '../router';

const GoToSettings = () => {
  router.push('./Settings');
};

const GoToHome = () => {
  router.push('./');
};

const GoToUser = () => {
  router.push('./Published');
};
</script>

<style scoped lang="scss">
.NavContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button{
        margin-left: .6rem;
        margin-right: .6rem;
        // font-size: 40px;
        border: none;
        background-color: #FFE76F;
        cursor: pointer;
        i{
            color: #002EA6;
            font-size: .6rem;
        }
    }
}
</style>
