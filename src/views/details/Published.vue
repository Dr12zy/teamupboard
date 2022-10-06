<template>
  <div class="wrapper">
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_qnuaci4wh9i.css">
    <div class="top-left">
      <div class="top-left__more">更多tag</div>
    </div>
    <div class="DetailLeft">
      <Rankings></Rankings>
    </div>
    <div class="DetailTop">
      <i class="iconfont icon-yonghu DetailTop__icon1"></i>
      <i
       class="iconfont icon-zhuye DetailTop__icon"
       @click="handleHomeClick"
      ></i>
      <i
       class="iconfont icon-tongzhi-copy DetailTop__icon"
       @click="handleChatClick"
      ></i>
      <i
       class="iconfont icon-shezhi DetailTop__icon"
       @click="handleSettingsClick"
      ></i>
    </div>
    <div class="DetailRight">
      <div class="DetailRight__top">
        <i class="iconfont icon-fanhui DetailRight__top__icon"></i>
        <div class="DetailRight__top__font">自定义图片</div>
      </div>
      <div class="DetailRight__radius">
        <img :src="selfInformation.img" alt="" class="DetailRight__radius__head">
      </div>
      <div class="DetailRight__self">
        <div class="DetailRight__self__detail">
          <div class="DetailRight__self__id">ID {{selfInformation.id}}</div>
          <div class="DetailRight__self__introduction">简介：{{selfInformation.introduction}}</div>
        </div>
        <div class="DetailRight__self__sex">{{selfInformation.sex}}</div>
        <div
         class="DetailRight__self__modify"
         @click="handleSettingsClick"
        >修改个人资料</div>
      </div>
      <div class="DetailRight__select">
        <div class="DetailRight__select__option">已发布 {{communication.release}}</div>
        <div class="DetailRight__select__option">已申请 {{communication.apply}}</div>
        <div class="DetailRight__select__option">已接收 {{communication.receive}}</div>
      </div>
      <div
       class="DetailRight__content"
       v-for="(item, index) in msgitems"
       :key="index"
      >
        <!-- <div class="DetailRight__content__title">{{item.title}}</div>
        <div class="DetailRight__content__context">{{item.context}}</div> -->
        <div class="DetailRight__content__item">
          <Msg :msgitems="item"></Msg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Rankings from '../../components/Rankings.vue';
import { useRouter } from 'vue-router'

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
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 14.44rem;
  // bottom: 0;
  background: #f1f1f1;
}
.top-left {
  display: flex;
  &__more {
    margin-top: .26rem;
    margin-left: 3.3rem;
    color: #999;
  }
}
.DetailLeft {
  position: absolute;
  top: .29rem;
  left: 0;
  height: 11.55rem;
  width: 4.5rem;
  margin-top: .29rem;
  margin-left: .29rem;
  padding-top: .14rem;
  padding-left: .14rem;
  border: .01rem solid #555;
  border-radius: .29rem;
  // background: black;
}
.DetailTop {
  position: absolute;
  top: .2rem;
  left: 6rem;
  width: 6.93rem;
  height: .8rem;
  &__icon1 {
    margin-left: .6rem;
    font-size: .5rem;
    color: #0091FF;
  }
  &__icon {
    margin-left: 1.2rem;
    font-size: .5rem;
  }
}
.DetailRight {
  position: absolute;
  top: 1rem;
  left: 6rem;
  width: 6.93rem;
  height: 11.55rem;
  background: #999;
  &__top {
    width: 6.93rem;
    height: 1.4rem;
    background: #666;
    &__icon {
      position: absolute;
      top: .14rem;
      left: .14rem;
      color: #fff;
      font-size: .29rem;
    }
    &__font {
      position: absolute;
      top: .36rem;
      left: 3rem;
      font-size: .19rem;
      color: #fff;
    }
  }
  &__radius {
    position: absolute;
    top: .84rem;
    left: .65rem;
    width: 1.08rem;
    height: 1.08rem;
    border-radius: .72rem;
    background: #fff;
    &__head {
      height: 1.08rem;
      width: 1.08rem;
      border-radius: .72rem;
    }
  }
  &__self {
    display: flex;
    margin-top: .72rem;
    margin-left: .29rem;
    &__sex {
      margin-left: .05rem;
    }
    &__modify {
      position: absolute;
      right: 1.44rem;
      top: 1.59rem;
      width: 1.66rem;
      height: .43rem;
      line-height: .43rem;
      font-size: .22rem;
      text-align: center;
      color: #fff;
      background: #0091FF;
      border-radius: .29rem;
    }
  }
  &__select {
    display: flex;
    margin-top: .14rem;
    height: .55rem;
    background: #0091FF;
    &__option {
      margin-left: 1.01rem;
      margin-top: .12rem;
      font-size: .22rem;
      color: #f8f8f8;
    }
  }
  &__content {
    margin-top: .29rem;
    margin-left: .43rem;
    width: 6.06rem;
    height: 2rem;
    background: #fff;
    border-radius: .43rem;
    &__item {
      padding-top: .2rem;
      margin-left: .8rem;
      font-size: .2rem;
    }
  }
}
</style>
