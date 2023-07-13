<template>
  <div class="ratings__dropdown-container" v-if="menus.length > 0">
    <ul class="ratings__dropdown">
      <li class="" v-for="(menu, key) in menus" :key="key">
        <nuxt-link :to="`/rating/${menu.url}`">{{ menu.title }}</nuxt-link>
          <template v-if="menu.children.length > 0">
            <embed-menu
              :menus="menu.children"
            ></embed-menu>
          </template>
      </li>
    </ul>
    <div class="ratings-close-btn" @click="$emit('closeRatingMenu')"><img src="/images/ratings-close.svg" alt="close ratings"></div>
  </div>
</template>

<script>
import RatingMenuRecursive from "@/components/Menus/_embed/RatingMenuRecursive";
export default {
  name: "RatingMenu",
  components: {
    'embed-menu': RatingMenuRecursive
  },
  data: () => ({
  }),
  computed: {
    menus() {
      return this.$store.getters.ratingMenu
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
