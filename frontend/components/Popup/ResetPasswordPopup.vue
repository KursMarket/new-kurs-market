<template>
  <form action="index.html" class="reset-pass-form" method="POST" data-action="modal" data-target="#static" data-metric="reset-form">
    <div class="login-popup__body">
      <a href="#" @click.prevent="closePopup" class="login-popup__close">✕</a>
      <div class="login-popup__title">Восстановление пароля</div>
      <div class="login-popup__text">Введите e-mail, на который зарегистрирован аккаунт. Мы пришлем вам ссылку для входа</div>
      <div class="login-popup__wrapper">
        <input type="text" class="login-popup__input" autocomplete="off"
               name="Email" placeholder="E-mail" value="">
      </div>
      <div class="error" style="color: darkred"></div>
      <button class="login-popup__btn">Получить новый пароль</button>
      <div class="reset-success"></div>
    </div>
  </form>
</template>

<script>
import {headerPopupAuth} from "@/store/headerPopupAuth";

export default {
  name: "ResetPasswordPopup",
  methods: {
    closePopup() {
      headerPopupAuth.value.active = false;
      headerPopupAuth.value.isSchoolRegisterPopup = false;
      headerPopupAuth.value.isResetPasswordPopup = false;
      headerPopupAuth.value.isRegistrationStudentPopup = false;
    }
  }
}
</script>

<style scoped>

</style>
