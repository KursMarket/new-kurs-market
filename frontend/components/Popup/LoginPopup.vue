<template>
  <form class="login-popup" data-popup="login-popup" @submit.prevent="login" method="POST" >
    <input type="hidden" name="_token" value="fKVXRr0DDU2WwKEFDsjWjGRxwxdx9QCU0PaRXQuq">
    <div class="login-popup__body">
      <a href="" @click.prevent="resetForm" class="login-popup__close">✕</a>
      <div class="login-popup__title">Войдите на КурсМаркет</div>
      <div class="login-popup__wrappper">
        <input type="text" class="login-popup__input" v-model="form.email" placeholder="Почта">
      </div>
      <div class="login-popup__wrapper">
        <input type="password" class="login-popup__input" placeholder="Пароль" v-model="form.password">
        <img src="/img/show-pass.svg" alt="show-pass" class="pass-icon" data-hide="/img/hide-pass.svg">
      </div>
      <div class="login-flex">
        <label class="filters__checkbox">
          <input type="checkbox" v-model="form.remember_me">
          <span>Запомнить меня</span>
        </label>
        <a href="#" @click.prevent="resetPasswordHandler" class="login-popup__forgot">Не помню пароль</a>
      </div>
      <div class="error" :style="errors.length ? 'color: darkred' : 'color: darkred;display:block;'">
        <ul class="error--block">
          <li v-if="arrayKeyExists('email', errors)" style="text-align: start;">{{ errors.email }}</li>
          <li v-if="arrayKeyExists('password', errors)" style="text-align: start">{{ errors.password }}</li>
        </ul>
      </div>
      <button class="login-popup__btn">Войти</button>

      <a href="#" class="login-popup__register" @click.prevent="registerByEmailHandler" data-link="register-email">Зарегистрироваться по e-mail</a>
      <div class="login-popup__text">Войти через социальную сеть</div>
      <div id="social-quick-register" class="login-popup__flex" style="justify-content: flex-start">
        <a href="https://oauth.yandex.ru/authorize?response_type=code&client_id=e1c95c7fb58b47b08947fe849efe14b5" style="margin-right: 10px">
          <img src="/img/popup/yandex.png" alt="yandex">
        </a>
        <a href="https://accounts.google.com/o/oauth2/auth?redirect_uri=https://kurs-market.com/verify_google&response_type=code&client_id=1069945008583-92glahgak33n1v0pn52ogvppg60jul75.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile" style="margin-right: 10px;">
          <img src="/img/popup/google.png" alt="google">
        </a>

        <a href="https://oauth.vk.com/authorize?client_id=8040425&display=page&redirect_uri=https://kurs-market.com/verify&response_type=code">
          <img src="/img/popup/vk.png" alt="vk">
        </a>
        <a href="index.html#" style="display: none">
          <img src="/img/popup/facebook.png" alt="facebook">
        </a>
        <a href="https://connect.ok.ru/oauth/authorize?client_id=512001105796&scope=LONG_ACCESS_TOKEN&response_type=code&redirect_uri=https://kurs-market.com/callback" target="_blank" style="margin-left: 10px;">
          <img src="/img/popup/ok.png" alt="ok">
        </a>
      </div>
    </div>
    <div class="login-popup__footer">
      <div class="login-popup__text">Хотите разместить школу?</div>
      <a class="login-popup__footer-link" href="#" data-link="register-school" @click.prevent="popupSchoolRegisterHandler">Добавить</a>
    </div>
  </form>
</template>

<script>
import {headerPopupAuth} from "@/store/headerPopupAuth";
import validationMixins from "@/mixins/validation";

export default {
  name: "LoginPopup",
  mixins: [validationMixins],
  data: () => ({
    errors: [],
    form: {
      email: '',
      password: '',
      remember_me: false
    }
  }),
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: this.form
      }).catch(errors => {
        this.errors = this.errorsAnswerHandling(errors);
      })
    },
    resetForm() {
      headerPopupAuth.value.active = false;
      this.form.email = '';
      this.form.password = '';
      this.form.remember_me = false;
      this.errors = [];
    },
    registerByEmailHandler() {
      headerPopupAuth.value.isSchoolRegisterPopup = false;
      headerPopupAuth.value.isResetPasswordPopup = false;
      headerPopupAuth.value.isRegistrationStudentPopup = true;
    },
    resetPasswordHandler() {
      headerPopupAuth.value.isSchoolRegisterPopup = false;
      headerPopupAuth.value.isResetPasswordPopup = true;
      headerPopupAuth.value.isRegistrationStudentPopup = false;
    },
    popupSchoolRegisterHandler() {
      headerPopupAuth.value.isSchoolRegisterPopup = true;
      headerPopupAuth.value.isResetPasswordPopup = false;
      headerPopupAuth.value.isRegistrationStudentPopup = false;
    }
  }
}
</script>

<style scoped>
  .error--block, .error--block li{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .error--block li{
    text-align: start !important;
  }
</style>
