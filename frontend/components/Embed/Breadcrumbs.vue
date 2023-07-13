<template>
  <div class="course-page__breadcrumbs" v-if="breadcrumbs">
    <nav aria-label="breadcrumb" class="nav-breadcrumbs">
      <div class="container">
        <ol class="breadcrumb">
          <li :class="`breadcrumb-item${makeActivePosition(breadcrumb)}`" v-for="(breadcrumb, key) in breadcrumbs" :key="key">
            <template v-if="breadcrumb.path && breadcrumb.url_name">
              <nuxt-link :to="{name: breadcrumb.url_name, params: {id: breadcrumb.path}}">
                {{ breadcrumb.title }}
              </nuxt-link>
            </template>
            <template v-else-if="breadcrumb.path && !breadcrumb.url_name">
              <nuxt-link :to="breadcrumb.path">
                {{ breadcrumb.title }}
              </nuxt-link>
            </template>
            <template v-else>
              {{ breadcrumb.title }}
            </template>
          </li>

        </ol>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      required: false,
      default: []
    }
  },
  methods: {
    makeActivePosition(breadcrumb) {
      return breadcrumb.path === '' && breadcrumb.url_name === ''
        ? ' active'
        : '';
    }
  }
}
</script>

<style scoped>

</style>
