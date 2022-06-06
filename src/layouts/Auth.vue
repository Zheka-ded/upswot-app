<template>
  <div class="auth-container">
    <Header />
    <div class="hero">
      <img class="hero__img" src="@/assets/img/hero.jpg" alt="Hero">
      <div class="hero__content container">
        <p class="hero__title h2 font-regular text-white">Welcome to <br> Business Analytics Online</p>
      </div>
    </div>
    <div class="container">
      <div class="auth-content">
        <div class="auth-content__left">
          <p class="h6">
            <span class="font-medium">
              Business Analytics
            </span>
            — a new, convenient tool for managing and forecasting your business performance, which will help
            analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
          </p>
          <c-list class="mt-25" :list="data.analyticsList" />
        </div>
        <div class="auth-content__right">
          <div class="auth-right-container">
            <c-form
              class="auth-form"
              @keydown.enter="formSubmit"
            >
              <c-form-item>
                <c-input
                  v-model="formModel.name"
                  ref="formRules.name"
                  name="name"
                  label="Name"
                  type="text"
                  :error="formError.name"
                />
              </c-form-item>
              <c-form-item>
                <c-input
                  v-model="formModel.password"
                  name="password"
                  label="Password"
                  type="password"
                  :error="formError.password"
                />
              </c-form-item>
              <c-form-item>
                <c-button @click="formSubmit">
                  LOGIN
                </c-button>
              </c-form-item>
            </c-form>
            <div class="auth-right-container__forgot">
              <router-link to="#" class="h4 text-primary-1">
                Forgot Password
              </router-link>
            </div>
            <div class="auth-right-container__register">
              <router-link to="#" class="h3 text-brown">
                Register now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

import data from '@/data/data'

const store = useStore()
const router = useRouter()

const formModel = ref({
  name: '',
  password: '',
})

const formError = ref({
  name: null,
  password: null,
})

function formSubmit () {
  clearError()
  for (const key in formModel.value) {
    if (!formModel.value[key]) {
      formError.value[key] = `Field ${ key } is required`
    } else if (formModel.value[key] !== data.userAuth[key]) {
      formError.value[key] = `Field ${ key } incorrect`
    }
  }

  if (formModel.value.name === data.userAuth.name && formModel.value.password === data.userAuth.password) {
    store.dispatch('login', { ...formModel.value })

    localStorage.setItem('user', JSON.stringify({ ...formModel.value }))
    localStorage.setItem('isAuthenticated', 'true')

    router.push({ name: 'default' })
  }
}

function clearError () {
  for (const key in formError.value) {
    formError.value[key] = null
  }
}

</script>

<style lang="scss">
.auth-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.hero {
  position: relative;

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__content {
    z-index: 1;
  }

  &__title {
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 0 8px;
  }
}

.auth-content {
  display: flex;
  flex-direction: column;
  padding: 47px 8px 36px;

  &__left {
  }

  &__right {
    margin-top: 30px;
    position: relative;
  }
}

.auth-right-container {
  box-shadow: $box-shadow;
  background: $color-white;

  &__forgot {
    padding: 17px;
    text-align: center;
  }

  &__register {
    background: $color-gray-1;
    text-align: center;
    padding: 17px;
  }
}

.auth-form {
  padding: 40px 30px 0;
}

@media (min-width: $lg) {
  .hero {

    &__title {
      margin-top: 215px;
      margin-bottom: 70px;
    }
  }
  .auth-content {
    display: flex;
    flex-direction: row;
    padding: 47px 8px 36px;

    &__left {
      width: 58%;
    }

    &__right {
      margin-top: 0;
      width: 42%;
    }
  }

  .auth-right-container {
    left: 0;
    position: absolute;
    right: 0;
    top: -240px;

    &__forgot {
      padding: 17px;
      text-align: center;
    }

    &__register {
      background: $color-gray-1;
      text-align: center;
      padding: 17px;
    }
  }
}

</style>
