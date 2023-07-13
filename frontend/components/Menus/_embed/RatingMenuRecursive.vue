<template>
  <ul class="ratings__dropdown">
    <li v-for="(menu,key) in menus" :key="key">
      <nuxt-link :to="`/rating/${menu.url}`">{{ menu.title }}</nuxt-link>
      <template v-if="menu.children.length > 0">
        <rating-menu-recursive
          :menus="menu.children"
        ></rating-menu-recursive>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingMenuRecursive",
  props: {
    menus: {
      type: Array,
      required: false,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
