<template>
  <div class="wrapper">
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_8g65ggx4bl.css">
    <div class="top-left">
      <i class="iconfont icon-tongzhi-copy top-left__icon"></i>
    <div class="top-left__more">更多tag</div>
    </div>
    <div class="DetailLeft">
      <Rankings></Rankings>
    </div>
    <div class="DetailRight">
      <div class="DetailRight__top">
        <i class="iconfont icon-fanhui DetailRight__top__icon"></i>
        <div class="DetailRight__top__font">自定义图片</div>
      </div>
      <div class="DetailRight__radius"></div>
      <div class="DetailRight__self">
        <div class="DetailRight__self__detail">
          <div class="DetailRight__self__id">ID 椰子君</div>
          <div class="DetailRight__self__introduction">个人简介</div>
        </div>
        <div class="DetailRight__self__sex">♂ / ♀</div>
        <div class="DetailRight__self__modify">修改个人资料</div>
      </div>
      <div class="DetailRight__select">
        <div class="DetailRight__select__option">已发布 11</div>
        <div class="DetailRight__select__option">已申请 1</div>
        <div class="DetailRight__select__option">已接收 10</div>
      </div>
      <div class="DetailRight__content">
        <div class="DetailRight__content__title">今天吃什么</div>
        <div class="DetailRight__content__context">今天吃“东安子鸡”、“红煨鱼翅”、“腊味合蒸”、“面包全鸭”、“油辣冬笋尖”、“板栗烧菜心”、“五元神仙鸡”、“吉首酸肉”等。 其中“红煨鱼翅”又名“组庵鱼翅”，是湖南地方名菜。 烹调方法是用鱼翅加鸡汤、酱油等，用小火煨制而成，汁浓味鲜，以清鲜糯柔著名。</div>
      </div>
      <div class="DetailRight__content">
        <div class="DetailRight__content__title">今天吃什么</div>
        <div class="DetailRight__content__context">今天吃“东安子鸡”、“红煨鱼翅”、“腊味合蒸”、“面包全鸭”、“油辣冬笋尖”、“板栗烧菜心”、“五元神仙鸡”、“吉首酸肉”等。 其中“红煨鱼翅”又名“组庵鱼翅”，是湖南地方名菜。 烹调方法是用鱼翅加鸡汤、酱油等，用小火煨制而成，汁浓味鲜，以清鲜糯柔著名。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Rankings from '../../components/Rankings.vue';

export default defineComponent({
  name: 'Published',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 10rem;
  // bottom: 0;
  background: #f1f1f1;
}
.top-left {
  display: flex;
  &__icon {
    margin-top: .1rem;
    margin-left: .25rem;
    font-size: .25rem;
    color: #0091FF;
  }
  &__more {
    margin-top: .2rem;
    margin-left: 1.9rem;
    color: #999;
  }
}
.DetailLeft {
  position: absolute;
  top: .2rem;
  left: 0;
  height: 8rem;
  width: 2.6rem;
  margin-top: .2rem;
  margin-left: .2rem;
  padding-top: .1rem;
  padding-left: .1rem;
  border: .01rem solid #555;
  border-radius: .2rem;
  // background: black;
}
.DetailRight {
  position: absolute;
  top: 0;
  left: 3.2rem;
  width: 4.8rem;
  height: 8rem;
  background: #999;
  &__top {
    width: 4.8rem;
    height: .97rem;
    background: #666;
    &__icon {
      position: absolute;
      top: .1rem;
      left: .1rem;
      color: #fff;
      font-size: .2rem;
    }
    &__font {
      position: absolute;
      top: .25rem;
      left: 2.08rem;
      font-size: .13rem;
      color: #fff;
    }
  }
  &__radius {
    position: absolute;
    top: .58rem;
    left: .45rem;
    width: .75rem;
    height: .75rem;
    border-radius: .5rem;
    background: #fff;
  }
  &__self {
    display: flex;
    margin-top: .5rem;
    margin-left: .2rem;
    &__sex {
      margin-left: .4rem;
    }
    &__modify {
      position: absolute;
      right: 1rem;
      top: 1.1rem;
      width: 1.15rem;
      height: .3rem;
      line-height: .3rem;
      font-size: .15rem;
      text-align: center;
      color: #fff;
      background: #0091FF;
      border-radius: .2rem;
    }
  }
  &__select {
    display: flex;
    margin-top: .1rem;
    height: .38rem;
    background: #0091FF;
    &__option {
      margin-left: .7rem;
      margin-top: .08rem;
      font-size: .15rem;
      color: #f8f8f8;
    }
  }
  &__content {
    margin-top: .2rem;
    margin-left: .3rem;
    width: 4.2rem;
    height: 2rem;
    background: #fff;
    border-radius: .3rem;
    &__title {
      line-height: .5rem;
      margin-left: .3rem;
      font-size: .25rem;
    }
    &__context {
      line-height: .2rem;
      margin: 0 .2rem;
    }
  }
}
</style>
