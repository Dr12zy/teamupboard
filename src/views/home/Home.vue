<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_8g65ggx4bl.css">
  <div class="Container">
    <div class="ContainerLeft">
      <!-- <el-divider /> -->
      <div class="ContainerLeftTop">
        <button>更多tag</button>
      </div>
      <div class="ContainerLeftBottom">
        <Rankings></Rankings>
      </div>
    </div>
    <div class="ContainerMiddle">
      <div class="ContainerMiddleTop">
        <div class="MiddleT">
          <Nav></Nav>
        </div>
        <div class="MiddleM">
          <el-input></el-input>
          <el-button :icon="Search" circle />
        </div>
        <div class="MiddleB">
          <button>本地</button>
          <button>线上</button>
          <button>
            <i class="iconfont icon-chongnaiweishi"></i>
          </button>
        </div>
      </div>
      <div class="ContainerMiddleBottom">
        <div class="BottomItem" v-for="(item, i) in msgitems" :key="i">
          <Msg :msgitems="item"></Msg>
        </div>
      </div>
    </div>
    <div class="ContainerRight">

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Search,
} from '@element-plus/icons-vue';
import Msg from '../../components/Msg.vue';
import Rankings from '../../components/Rankings.vue';
import Nav from '../../components/Nav.vue';

const msgitems = ref('');

const GetAllMsg = () => {
  axios.post('url').then((res) => {
    msgitems.value = res.data;
  });
  msgitems.value = [{
    title: '并夕夕5人团',
    tag: '便宜',
    message: '快递纸箱批发定做 彩色印刷logo发货纸箱订制定制纸盒子包装盒子',
    img: 'https://img.enzemky.com/swiper2.jpg',
    total: '10',
    already: '3',
  }, {
    title: '并夕夕6人团',
    tag: '实惠',
    message: '苹果X手机壳iPhoneXS XR XSMAX无边框磨砂透明硅胶软壳手机保护套',
    img: 'https://img.enzemky.com/swiper1.jpg',
  }, {
    title: '并夕夕7人团',
    tag: '经济',
    message: 'vivoz1手机壳全包z1i防摔vivoz1青春版超薄软壳网红v1730DA电镀壳',
    img: 'https://img.enzemky.com/swiper3.jpg',
  }, {
    title: '并夕夕8人团',
    tag: '物美价廉',
    message: '长条纸箱快递箱批发定做 三层特硬长方形打包纸盒子包装盒',
    img: 'https://img.enzemky.com/swiper4.jpg',
  }, {
    title: '并夕夕9人团',
    tag: '香香',
    message: '苹果7plus手机壳iPhone8/7/8plus超薄防摔磨砂保护套男女情侣网红',
    img: 'https://img.enzemky.com/swiper5.jpg',
  }, {
    title: '并夕夕10人团',
    tag: '香香',
    message: '苹果7plus手机壳iPhone8/7/8plus超薄防摔磨砂保护套男女情侣网红',
    img: 'https://img.enzemky.com/swiper6.jpg',
  }, {
    title: '并夕夕11人团',
    tag: '香香',
    message: '苹果7plus手机壳iPhone8/7/8plus超薄防摔磨砂保护套男女情侣网红',
    img: 'https://img.enzemky.com/swiper4.jpg',
  }, {
    title: '并夕夕12人团',
    tag: '香香',
    message: '苹果7plus手机壳iPhone8/7/8plus超薄防摔磨砂保护套男女情侣网红',
    img: 'https://img.enzemky.com/swiper2.jpg',
  }];
};

onMounted(() => {
  GetAllMsg();
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.Container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #FFE76F;
  display: flex;

  .ContainerLeft {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ContainerLeftTop {
      margin-top: .05rem;

      button {
        border: solid;
        background-color: #FFE76F;
        color: #002EA6;
        font-size: .2rem;
        font-weight: bold;
        margin-top: .2rem;
        margin-left: 70%;
        cursor: pointer;
      }
    }

    .ContainerLeftBottom {
      margin-left: .2rem;
    }
  }

  .ContainerMiddle {

    width: 50%;
    margin-left: .1rem;
    padding-top: .2rem;

    .ContainerMiddleTop {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 100%;
      background-color: #FFE76F;

      .MiddleT{

      }
      .MiddleM {
        // border-radius: 10%;
        padding: .2rem;
        display: flex;
        flex-wrap: nowrap;
      }

      .MiddleB {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          color: #002EA6;
          background-color: #FFE76F;
          font-size: .2rem;
          border: none;
          border-radius: 20%;
          cursor: pointer;
        }

        button {
          margin-left: 1rem;
        }
      }
    }

    .ContainerMiddleBottom {
      overflow-y: scroll;
      overflow-x: hidden;
      padding-left: .3rem;
      width: 100%;
      height: 8rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      &::-webkit-scrollbar {
        display: none;
      }

      .BottomItem {
        width: 50%;
        margin-top: .2rem;
      }

    }

  }

  .ContainerRight {
    width: 25%;
  }
}
</style>
