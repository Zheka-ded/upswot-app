<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__top">
          <router-link to="#">
            <img class="footer__logo" src="@/assets/logo.svg" alt="Citi logo">
          </router-link>
          <div class="footer__nav">
            <router-link
              v-for="item in data.footerList"
              :key="item.id"
              to="#"
              class="footer__nav-item h6 font-medium text-white"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
        <div class="footer__copyright">
          <p class="text-xs text-white">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import data from '@/data/data'
</script>

<style lang="scss">
.footer {
  background: $color-brown;
  padding: 30px 0;

  &__logo {
    width: 56px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-white;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
  }

  &__nav-item {
    & + & {
      margin-top: 10px;
    }
  }

  &__copyright {

  }

  @media (min-width: $sm) {
    &__nav {
      flex-direction: row;
    }

    &__nav-item {
      & + & {
        margin-left: 20px;
        margin-top: 0;
      }
    }
  }
}

</style>
