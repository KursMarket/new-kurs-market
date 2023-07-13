<template>
  <section class="main-page__banner" :style="`background: url(${bannerImage});`">
    <div class="main-page__banner-content">
      <div class="main-page__banner-top-wrapper">
        <div class="main-page__banner-title" v-if="bannerTitle">
          <h1>{{ bannerTitle }}</h1>
        </div>
        <div class="main-page__banner-info">
          <div>
            <span>{{ coursesTotal }}</span>
            <span>{{ this.convertOnlineCoursesToHuman(parseInt(coursesTotal)) }}</span>
          </div>
          <div>
            <span>{{ schoolsCount }}</span>
            <span>{{ this.convertSchoolsToHuman( parseInt(schoolsCount) ) }}</span>
          </div>
        </div>
      </div>
      <div class="main-page__banner-bot-wrapper">
        <nuxt-link class="main-page__banner-btn" to="/categories">Искать обучение!</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import declinationMixins from "@/mixins/declination";

export default {
  name: "Banner",
  mixins: [declinationMixins],
  props: {
    schoolsCount: {
      type: [String, Number],
      required: true
    },
    coursesTotal: {
      type: [String, Number],
      required: true
    },
    bannerTitle: {
      type: String,
      required: false,
      default: null
    },
    bannerImage: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
