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
       v-for="(item, index) in contentList"
       :key="index"
      >
        <div class="DetailRight__content__title">{{item.title}}</div>
        <div class="DetailRight__content__context">{{item.context}}</div>
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
    const contentList = [
      {title: '今天吃什么', context: '今天吃“东安子鸡”、“红煨鱼翅”、“腊味合蒸”、“面包全鸭”、“油辣冬笋尖”、“板栗烧菜心”、“五元神仙鸡”、“吉首酸肉”等。 其中“红煨鱼翅”又名“组庵鱼翅”，是湖南地方名菜。 烹调方法是用鱼翅加鸡汤、酱油等，用小火煨制而成，汁浓味鲜，以清鲜糯柔著名。'},
      {title: '粤菜是啥', context: '粤菜中的广府菜集顺德、南海、番禺、东莞、香山、四邑、宝安等地方风味的特色，兼京、苏、淮、杭等外省菜以及西菜之所长，融为一体，自成一家。粤菜取百家之长，用料广博，选料珍奇，配料精巧，善于在模仿中创新，依食客喜好而烹制。烹调技艺多样善变，用料奇异广博。在烹调上以炒、爆为主，兼有烩、煎、烤，讲究清而不淡，鲜而不俗，嫩而不生，油而不腻'}
    ]
    return { handleChatClick, handleSettingsClick, handleHomeClick, selfInformation, communication, contentList }
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
    height: 2.89rem;
    background: #fff;
    border-radius: .43rem;
    &__title {
      line-height: .72rem;
      margin-left: .43rem;
      font-size: .36rem;
    }
    &__context {
      line-height: .29rem;
      margin: 0 .29rem;
    }
  }
}
</style>
