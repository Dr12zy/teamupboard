<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="../../photo/logo.svg"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入账号"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请确认密码"
      />
    </div>
    <div class="wrapper__login-botton" @click="handleLoginClick">注册</div>
    <div class="wrapper__login-link" @click="handleLoginClick">已有账号去登录</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RegisterView',
  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-60%);
  &__img {
    display: block;
    width: 2.89rem;
    margin: 0.289rem auto;
  }
  &__input {
    height: 0.433rem;
    width: 3.6rem;
    background: #f9f9f9;
    margin: 0.43rem auto;
    border-radius: 0.43rem;
    &__content {
      width: 100%;
      line-height: 0.22rem;
      border: none;
      background: none;
      outline: none;
      font-size: 0.22rem;
      margin-top: 0.12rem;
      margin-left: 0.14rem;
      color: #777;
      &::placeholder {
        color: #777;
      }
    }
  }
  &__login-botton {
    width: 1.15rem;
    line-height: 0.58rem;
    text-align: center;
    font-size: 0.29rem;
    background: #0091ff;
    margin: 0.29rem auto;
    border-radius: 0.29rem;
  }
  &__login-link {
    font-size: .2rem;
    color: #777;
    text-align: center;
  }
}
</style>
