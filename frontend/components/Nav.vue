<template>
  <div class="header__container" :style="`position: ${isHeaderMenu || ratingMenuActive ? 'fixed' : 'absolute'};`">
    <header class="header">
      <div class="header__contents">
        <div class="header__left">
          <div class="logo-container">
            <nuxt-link class="logo-link" to="/"></nuxt-link>
          </div>
          <ul class="header-menu">
            <li style="background-image: url('https://kurs-market.com/images/bi.png')">
              <button type="button" class="header__courses desktop" id="header__courses" @click.prevent="showHeaderNavigation">
                <span class="header__courses-burger"></span>
                <span>Каталог курсов</span>
                <catalog-menu
                  :catalog-class="catalogMenuIsActive"
                  @closeNavMenu="closeNavMenu"
                />
              </button>
            </li>
          </ul>
          <div class="header__search-wrapper">
            <form class="header__form header__form_active" type="get" action="https://kurs-market.com/search">
              <div class="input-wrapper">
                <button class="search__btn" type="button">
                  <img src="/images/search.svg" alt="search">
                </button>
                <input type="text" placeholder="Курсы, школы, направления" class="js-course-search desctop">
              </div>
            </form>
          </div>
          <ul class="header-menu btns">
            <li>
              <nuxt-link to="/schools" class="header__schools">Школы</nuxt-link>
            </li>
            <li>
              <button :class="`header__ratings${ratingMenuActive ? ' container-visible' : ''}`" @click.prevent="ratingMenuHandler">Рейтинги курсов</button>
              <rating-menu
                @closeRatingMenu="closeRatingMenu"
              />

            </li>
            <li style="display: none;">
              <a href="https://kurs-market.com/articles" class="header__ratings">Статьи</a>
            </li>
          </ul>
        </div>
        <div class="header__flex">
          <img class="search_mobile" src="/images/search.svg" alt="mobile_search">
          <div class="user-link">
            <a href="#" class="login-btn popup-btn" @click.prevent="showAuthPopup"><span class="login-btn-text">Войти</span>
              <img class="black" src="/images/log-in.svg" alt="login">
              <img class="red" src="/images/login-red.svg" alt="login">
            </a>

          </div>
        </div>
      </div>
    </header>
    <div class="mobile-search-header">
      <div class="header-search-container-mobile">
        <form class="header__form-mobile" method="get" action="https://kurs-market.com/search">
          <button class="search__btn" type="button">
            <img src="/images/search.svg" alt="search">
          </button>
          <input type="text" placeholder="поиск" class="js-course-search mobile" id="search-mobile-input">
          <div class="input-block"></div>
        </form>
        <button class="header__close-search-btn" type="button">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogMenu from "~/components/Menus/CatalogMenu";
import RatingMenu from "~/components/Menus/RatingMenu";
import {headerPopupAuth} from "@/store/headerPopupAuth";
import {ratingMenuPopup} from "@/store/ratingMenuPopup";

export default {
  name: "Nav",
  components: {
    CatalogMenu,
    RatingMenu
  },
  data: () => ({
    isHeaderMenu: false,
    catalogMenuIsActive: '',
    status: 'active',
  }),
  computed: {
    ratingMenuActive() {
      return ratingMenuPopup.value.active
    },
    popupIsActive() {
      return headerPopupAuth.value.active
    }
  },
  methods: {
    ratingMenuHandler() {
      ratingMenuPopup.value.active = !ratingMenuPopup.value.active
    },
    closeRatingMenu() {
      ratingMenuPopup.value.active = false
    },
    showAuthPopup() {
      headerPopupAuth.value.active = true;
    },
    showHeaderNavigation() {
      this.isHeaderMenu = !this.isHeaderMenu;
      this.makeMenuDisabled();
    },
    closeNavMenu() {
      this.isHeaderMenu = false;
      this.makeMenuDisabled();
    },
    makeMenuDisabled() {
      this.catalogMenuIsActive = this.isHeaderMenu ? ` ${this.status}` : '';
    }
  }
}
</script>

<style scoped>

</style>
