<template>
  <div>
    <div class="page-wrapper">
      <main-nav-mobile />
      <main-nav />
      <nuxt />
      <main-footer />
    </div>
    <overflow />
  </div>
</template>

<script>
import NavMobile from "~/components/NavMobile";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import Overflow from "@/components/Overflow";

export default {
  name: "default",
  components: {
    'main-nav-mobile': NavMobile,
    'main-nav': Nav,
    'main-footer': Footer,
    Overflow
  }
}
</script>

<style scoped>

</style>
