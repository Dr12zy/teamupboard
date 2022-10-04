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
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-botton" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  setup () {
    const data = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const handleLogin = async () => {
      try {
        const result = await axios.post(
          'https://www.fastmock.site/mock/3433a439c55ca85ff0401e7f70fd06e6/juejing/api/login',
          {
            username: data.username,
            password: data.password
          }
        )
        if (result?.data?.error === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          alert('登录失败')
        }
      } catch {
        alert('请求失败')
      }
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { handleLogin, handleRegisterClick, data }
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
    margin: 0.72rem auto;
  }
  &__input {
    height: 0.43rem;
    width: 3.61rem;
    background: #f9f9f9;
    margin: 0.433rem auto;
    border-radius: 0.433rem;
    &__content {
      width: 100%;
      line-height: 0.22rem;
      border: none;
      background: none;
      outline: none;
      font-size: 0.22rem;
      margin-top: 0.11rem;
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