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
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

import data from '@/data/data'

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
    if (formModel.value[key] !== data.userAuth[key]) {
      formError.value[key] = `Field ${ key } incorrect`
    }
    if (!formModel.value[key]) {
      formError.value[key] = `Field ${ key } is required`
    }
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
    margin-top: 215px;
    margin-bottom: 70px;
  }
}

.auth-content {
  display: flex;
  flex-direction: row;
  padding-top: 47px;
  padding-bottom: 36px;

  &__left {
    width: 58%;
  }

  &__right {
    width: 42%;
    position: relative;
  }
}

.auth-form {
  left: 0;
  position: absolute;
  box-shadow: $box-shadow;
  padding: 40px 30px;
  background: $color-white;
  right: 0;
  top: -50%;
}

</style>
