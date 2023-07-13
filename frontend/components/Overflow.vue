<template>
  <div :class="popupClass">
    <login-popup />
    <quick-register-popup />
    <school-register-popup />
    <reset-password-popup />
  </div>
</template>

<script>
import {headerPopupAuth} from "@/store/headerPopupAuth";
import LoginPopup from "@/components/Popup/LoginPopup";
import QuickRegisterPopup from "@/components/Popup/QuickRegisterPopup";
import ResetPasswordPopup from "@/components/Popup/ResetPasswordPopup";
import SchoolRegisterPopup from "@/components/Popup/SchoolRegisterPopup";
export default {
  name: "Overflow",
  components: {
    LoginPopup,
    QuickRegisterPopup,
    ResetPasswordPopup,
    SchoolRegisterPopup
  },
  data: () => ({
    form: {
    }
  }),
  computed: {
    popupIsActive() {
      return headerPopupAuth.value.active
    },
    popupClass() {
      let className = 'overflow';

      if (headerPopupAuth.value.active && headerPopupAuth.value.isRegistrationStudentPopup) {
        className = 'overflow overflow_active register-email';
      } else if (headerPopupAuth.value.active && headerPopupAuth.value.isResetPasswordPopup) {
        className = 'overflow overflow_active reset-pass';
      } else if (headerPopupAuth.value.active && headerPopupAuth.value.isSchoolRegisterPopup) {
        className = 'overflow overflow_active register-school';
      } else if (headerPopupAuth.value.active) {
        className = 'overflow overflow_active'
      }

      return className;
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
