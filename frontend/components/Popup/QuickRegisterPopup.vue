<template>
  <form id="js-form-quick-register" method="POST" data-action="location" class="login-popup register-form js-form-quick-register" action="https://kurs-market.com/quick-register/user" data-metric="register-user" data-location="/success-reg/">
    <div class="login-popup__body">
      <button class="login-popup__back popup-btn" @click.prevent="resetQuickEmailRegistrationHandler">
        <img src="/img/back.svg" alt="back-icon">
      </button>
      <div class="login-popup__title">Регистрация по e-mail</div>
      <div class="login-popup__wrapper">
        <input type="email" class="login-popup__input" autocomplete="off"
               name="Email" placeholder="E-mail">
      </div>
      <div class="login-popup__wrapper">
        <input type="password" class="login-popup__input login-popup__input--pass" autocomplete="off"
               name="Password" placeholder="Придумайте пароль">
        <img src="/img/show-pass.svg" alt="show-pass" id="pass-icon__reg" class="pass-icon" data-hide="/img/hide-pass.svg">
        <div class="warning hide"></div>
      </div>
      <div class="login-flex">
        <label class="filters__checkbox">
          <input type="checkbox">
          <span>Запомнить меня</span>
        </label>
      </div>

      <div class="error" style="color: darkred"></div>
      <button class="login-popup__btn">Зарегистрироваться</button>
      <div class="login-popup__text login-popup__text_fs15">Нажимая “Зарегистрироваться” вы соглашаетесь с <a href="personal.pdf" class="" target="_blank">политикой обработки персональный данных</a></div>
    </div>
    <div class="login-popup__footer">
      <div class="login-popup__text">Уже зарегистрированы?</div>
      <a class="login-popup__footer-link popup-btn" href="index.html#">Войти</a>
    </div>
  </form>

</template>

<script>
import {headerPopupAuth} from "@/store/headerPopupAuth";

export default {
  name: "QuickRegisterPopup",
  methods: {
    resetQuickEmailRegistrationHandler() {
      headerPopupAuth.value.active = true;
      headerPopupAuth.value.isSchoolRegisterPopup = false;
      headerPopupAuth.value.isResetPasswordPopup = false;
      headerPopupAuth.value.isRegistrationStudentPopup = false;
    }
  }
}
</script>

<style scoped>

</style>
