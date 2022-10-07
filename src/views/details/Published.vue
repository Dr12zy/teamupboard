<template>
  <div class="wrapper">
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_qnuaci4wh9i.css">

    <div class="DetailLeft">
      <div class="top-left">
      </div>
      <Rankings></Rankings>
    </div>

    <div class="DetailRight">
      <div class="DetailRight__top">
        <div>
          <Nav></Nav>
        </div>
        <div class="DetailRight__radius">
          <img :src="selfInformation.img" alt="" class="DetailRight__radius__head">
        </div>

        <div class="DetailRight__self">
            <span>ID {{selfInformation.id}}   {{selfInformation.sex}}</span>
            <span>简介：{{selfInformation.introduction}}</span>

          <el-button
              class="DetailRight__self__modify"
              @click="handleSettingsClick"
          >修改个人资料</el-button>
        </div>
      </div>


      <div class="DetailRight__select">
        <el-button class="DetailRight__select__option">已发布 {{communication.release}}</el-button>
        <el-button class="DetailRight__select__option">已申请 {{communication.apply}}</el-button>
        <el-button class="DetailRight__select__option">已接收 {{communication.receive}}</el-button>
      </div>
      <div class="DetailRightBottom">
      <div
       class="DetailRight__content"
       v-for="(item, index) in msgitems"
       :key="index"
      >

        <div class="DetailRight__content__item">
          <Msg :msgitems="item"></Msg>
        </div>
        </div>
      </div>
    </div>
    <div class="Right">

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Rankings from '../../components/Rankings.vue';
import { useRouter } from 'vue-router'
import Nav from '../../components/Nav.vue';
export default defineComponent({
  name: 'Published',
  setup () {
    const router = useRouter()
    const handleChatClick = () => {
      router.push({ name: 'Chat' })
    }
    const handleSettingsClick = () => {
      router.push({ name: 'Settings' })
    }
    const handleHomeClick = () => {
      router.push({ name: 'Home' })
    }
    const selfInformation = { id: '椰子君', img: 'https://img.enzemky.com/swiper5.jpg', sex: '♂', introduction: '帅比冠希' }
    const communication = { release: '11', apply: '1', receive: '10'} 
    const msgitems = [{
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
  }];
    return { handleChatClick, handleSettingsClick, handleHomeClick, selfInformation, communication, msgitems }
  }
})
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #EFEFEF;
  display: flex;


  .DetailLeft {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .top-left {
      margin-top: -2rem;

      &__more {
        margin-top: .26rem;
        margin-left: 3.3rem;
        color: #999;
      }
    }


  }

  .DetailRight {

    width: 50%;
    margin-left: .1rem;
    padding-top: .2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #EFEFEF;

    &__top {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 100%;
      background-color: #EFEFEF;

      &__font {
        margin-left: 3%;
        color: #fff;
        font-size: 0.15rem;
      }
    }

    &__radius {
      margin: 10% 3% 2% 0;
      border-radius: .72rem;

      &__head {
        height: 1.08rem;
        width: 1.08rem;
        border-radius: .72rem;
      }
    }

    &__self {
      width: 100%;
      display: flex;
      font-size: 0.2rem;

      &__sex {
        margin-left: .2rem;
      }

      &__modify {
        position: absolute;
        margin-left: 40%;
        line-height: .43rem;
        font-size: .22rem;
        text-align: center;
        color: #fff;
        background: #0091FF;
        border-radius: .29rem;
      }
    }

    &__select {
      width: 100%;
      margin: 3% auto;
      display: flex;
      //background: #0091FF;

      &__option {
        display: flex;
        margin: 0 auto;
        font-size: .22rem;

        //color: #f8f8f8;
        //background-color: #0091FF;
      }
    }

    &__content {
      margin: 2% auto;
      width: 60%;
      background: #fff;
      border-radius: .43rem;

      &__item {
        padding-top: .2rem;
        margin-left: .8rem;
        font-size: .2rem;
      }
    }

    .DetailRightBottom {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-wrap: wrap;
      height: 8rem;

    }
  }
  .Right {
    width: 20%;
    margin-right: -2rem;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
