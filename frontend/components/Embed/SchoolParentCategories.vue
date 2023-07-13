<template>
  <div class="categories-slider-wrap">
    <button
      :class="`select-btn categories__btn${isShow ? ' active' : ''}`"
      type="button"
      @click.prevent="showCategoriesHandler"
    >
      <span class="select-btn__text">{{ categoryLabel }}
        <img src="/images/selectArrow.png" alt="selectArrow">
      </span>
    </button>
    <div :class="`js-categories-slider${isShow ? ' active' : ''}`" v-if="categories">
      <div class="category-tag" v-for="(cat, key) in categories" :key="key">
        <span>
          <a href="#" :data-id="cat.id" data-type="direction" @click.prevent="categoryFilter(cat)">{{ cat.title }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolParentCategories",
  data: () => ({
    categories: [],
    categoryLabel: 'Выбрать направление',
    isShow: false,
  }),
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      await this.$axios.get('/schools/categories/parent')
        .then(response => {
          this.categories = response.data.data;
        })
    },
    categoryFilter(category) {
      this.$emit('categoryFilterHandler', category.id);
      this.isShow = false;
      this.categoryLabel = category.title;
    },
    showCategoriesHandler() {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style scoped>

</style>
