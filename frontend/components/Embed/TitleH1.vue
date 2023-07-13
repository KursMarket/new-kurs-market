<template>
  <h1 :class="className">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "TitleH1",
  props: {
    className: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
