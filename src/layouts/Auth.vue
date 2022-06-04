<template>
  <div class="auth-container">
    <Header/>
    <div class="hero">
      <img class="hero__img" src="@/assets/img/hero.jpg" alt="Hero">
      <div class="hero__content container">
        <p class="hero__title h2 font-regular text-white">Welcome to <br> Business Analytics Online</p>
      </div>
    </div>
    <div class="container">
      <div class="auth-content">
        <div class="auth-content__left">
          <p class="h5">
            <span class="font-medium">
              Business Analytics
            </span>
            — a new, convenient tool for managing and forecasting your business performance, which will help
            analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
          </p>
          <c-list class="mt-15" :list="data.analyticsList" />
        </div>
        <div class="auth-content__right">

        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

import data from '@/data/data'
</script>

<style lang="scss">
.auth-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.hero {
  position: relative;
  //height: 457px;

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    //object-position: left;
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
  padding: 40px 0;

  &__left {
    width: 58%;
  }

  &__right {
    width: 42%;
  }
}

</style>
