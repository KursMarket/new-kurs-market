<template>
  <div class="text-center mt-4">
    <nav>
      <ul class="pagination justify-content-center pagination-links">
        <li v-if="links.first && page > 1" class="page-item">
          <a @click.prevent="loadMore(links.first)" href="#" class="page-link page-numbers"><<</a>
        </li>
        <template v-for="(key, value) in links">
          <li v-if="value === 'prev' && page > 1" class="page-item">
            <a @click.prevent="loadMore(key)" href="#" class="page-link page-numbers">
              Назад
            </a>
          </li>

          <li v-if="value === 'next' && page < lastPage" class="page-item">
            <a @click.prevent="loadMore(key)" href="#" class="page-link page-numbers">
              Вперед
            </a>
          </li>
        </template>
        <li v-if="links.last && page < lastPage" class="page-item" :data-last-page="lastPage" :data-page="page">
          <a @click.prevent="loadMore(links.last)" href="#" class="page-link page-numbers">>></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    links: {
      type: Object,
      required: true
    },
    lastPage: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    loadMore(key) {
      this.$emit('loadMore', key)
    }
  }
}
</script>

<style scoped>

</style>
