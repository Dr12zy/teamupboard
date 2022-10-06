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
      <i
       class="iconfont icon-yonghu DetailTop__icon"
       @click="handlePublishedClick"
      ></i>
      <i
       class="iconfont icon-zhuye DetailTop__icon"
       
      ></i>
      <i class="iconfont icon-tongzhi-copy DetailTop__icon1"></i>
      <i
       class="iconfont icon-shezhi DetailTop__icon"
       @click="handleSettingsClick"
      ></i>
    </div>
    <div class="Chat">
      <div class="ChatLeft">
        <div
         class="ChatLeft__item"
         v-for="item in userList"
         :key="item.name"
        >
          <div class="ChatLeft__item__picture">
            <img :src="item.img" alt="" class="ChatLeft__item__picture__head">
          </div>
          <div class="ChatLeft__item__username">{{item.name}}</div>
        </div>
      </div>
      <div class="ChatRight">
        <div class="ChatRight__frame">
          <div
           class="ChatRight__user"
           v-for="(item, index) in communicationList"
           :key="index"
          >
            <div class="ChatRight__user__picture">
              <img :src="item.img" alt="" class="ChatRight__user__picture__head">
            </div>
            <div class="ChatRight__user__say">{{item.say}}</div>
          </div>
        </div>
        <div class="ChatRight__input">
          <input type="text" class="ChatRight__input__frame">
        </div>
        <button class="ChatRight__send">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Rankings from '../../components/Rankings.vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Chat',
  setup () {
    const userList = [
      { img: 'https://img.enzemky.com/swiper1.jpg', name: '用户1'},
      { img: 'https://img.enzemky.com/swiper2.jpg', name: '用户2'},
      { img: 'https://img.enzemky.com/swiper3.jpg', name: '用户3'},
      { img: 'https://img.enzemky.com/swiper4.jpg', name: '用户4'}
    ]
    const communicationList = [
      { img: 'https://img.enzemky.com/swiper1.jpg', say: '今天吃什么' },
      { img: 'https://img.enzemky.com/swiper5.jpg', say: '今天吃烤鱼' }
    ]
    const router = useRouter()
    const handlePublishedClick = () => {
      router.push({ name: 'Published' })
    }
    const handleSettingsClick = () => {
      router.push({ name: 'Settings' })
    }
    const handleHomeClick = () => {
      router.push({ name: 'Home' })
    }
    return { userList, communicationList, handlePublishedClick, handleSettingsClick, handleHomeClick }
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
  width: 3.75rem;
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
  left: 5.2rem;
  width: 6.93rem;
  height: .8rem;
  &__icon1 {
    margin-left: 1.2rem;
    font-size: .5rem;
    color: #0091FF;
  }
  &__icon {
    margin-left: 1.2rem;
    font-size: .5rem;
  }
}
.Chat {
  display: flex;
  position: absolute;
  top: 1rem;
  left: 5.2rem;
  width: 8rem;
  height: 8.5rem;
  background: #999;
}
.ChatLeft {
  width: 3rem;
  height: 8.5rem;
  background: #777;
  border: .01rem solid #555;
  &__item {
    display: flex;
    width: 3rem;
    height: .8rem;
    border: .01rem solid #555;
    &__picture {
      width: .5rem;
      height: .5rem;
      border-radius: .25rem;
      margin-top: .15rem;
      margin-left: .15rem;
      background: #fff;
      &__head {
        width: 100%;
        height: 100%;
        border-radius: .25rem;
      }
    }
    &__username {
      margin-left: .2rem;
      margin-top: .2rem;
    }
  }
}
.ChatRight {
  width: 5rem;
  height: 8.5rem;
  &__frame {
    position: absolute;
    width: 4.98rem;
    height: 6rem;
    background: #666;
  }
  &__user {
    display: flex;
    width: 5rem;
    height: .8rem;
    // background: black;
    &__picture {
      width: .4rem;
      height: .4rem;
      border-radius: .2rem;
      margin-top: .2rem;
      margin-left: .2rem;
      background: #fff;
      &__head {
        height: 100%;
        width: 100%;
        border-radius: .2rem;
      }
    }
    &__say {
      width: 1.5rem;
      height: .5rem;
      line-height: .5rem;
      border-radius: .2rem;
      margin-top: .15rem;
      margin-left: .2rem;
      text-align: center;
      background: #fff;
    }
  }
  &__input{
    position: absolute;
    top: 6rem;
    left: 3rem;
    width: 5rem;
    height: 1.5rem;
    &__frame {
      outline-style: none ;
      border: 0rem;
      height: 2.52rem;
      width: 5rem;
      background: #888;
    }
  }
  &__send {
    position: absolute;
    right: .2rem;
    bottom: .2rem;
    height: .5rem;
    width: 1rem;
    border-radius: .2rem;
  }
}
.Top {
  margin-top: .3rem;
}
</style>
