<template>
  <div class="text-center pagination-hidden" v-if="pagination">

    <div class="pagination-links">
      <a v-for="(l, k) in pagination"
         :key="k"
         :href="l.url"
         class="page-numbers">{{ l.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HiddenPagination",
  props: {
    pagination: {
      type: Array,
      required: false,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
