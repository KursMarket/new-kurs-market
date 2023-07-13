<template>
  <main>

    <div class='course-page__breadcrumbs'>
      <nav aria-label="breadcrumb" class="nav-breadcrumbs">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/">
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page"> Отзывы об онлайн-школах и курсах</li>
          </ol>
        </div>
      </nav>
    </div>

    <div class="schools-wrapper">
      <div class="container">
        <h1 class="page-title-static">Отзывы об онлайн-школах и курсах</h1>
        <div class="courses-count-wrap mb-2">
          <template v-if="search">Найдено школ: {{ total }}</template>
          <template v-else>Всего зарегистрировано школ: {{ total }}</template>
        </div>
      </div>
    </div>

    <div class="filters-wrap school-filters">
      <div class="container">
        <div class="market__filters">
          <school-parent-categories
            @categoryFilterHandler="categoryFilterHandler"
          ></school-parent-categories>
          <div class="filters-search">
            <input type="text" value="" v-model="search" @keydown="searchHandler">
            <button class="filters-search__btn" @click.prevent="requestHandler">
              <img src="images/search.png" alt="search">
            </button>
            <div class="filters-search__results">
              <ul>
                <li>
                  <a href="schools.html#">1</a>
                </li>
                <li>
                  <a href="schools.html#">1</a>
                </li>
                <li>
                  <a href="schools.html#">1</a>
                </li>
                <li>
                  <a href="schools.html#">1</a>
                </li>
              </ul>
            </div>
          </div>

          <div :class="`filters-show select-wrapper${showTotalItemsState ? ' active' : ''}`">
            <div class="filters-show__text">Показывать</div>
            <button class="select-btn" type="button" @click.prevent="showTotalItemsHandler">
                    <span class="select-btn__text"><span>{{ showTotalItems }}</span>
                        <img src="/images/selectArrow.png" alt="selectArrow">
                    </span>
            </button>
            <div class="select-items">
              <label
                class="school-limits"
                v-for="item in getSchoolsItemsPerPage"
                :key="`itm${item}`"
              >
                <input
                  type="radio"
                  name="show"
                  :checked="showTotalItems === item"
                  @change.prevent="renderSchoolsHandler(item)"
                >
                <span class="select-text">{{ item }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="static-page-wrap schools-page" ref="schools">
      <div class="container">
        <div class="schools-wrap" v-if="schools">

          <div class="school-item" v-for="(school, key) in schools" :key="key">
            <img
              v-if="school.image"
              :src="school.image"
              :alt="school.title"
              class="school-item__img"
            >
            <div class="school-item__body">
              <div class="school-name"><span>{{ school.title }}</span></div>
              <div class="school-info-block">
                {{ `${school.totalCourses} ${convertCoursesPreviewToHuman(school.totalCourses)}` }}
              </div>

              <div class="plate-item__rating ">
                <span>4</span>
                <div class="rating__stars">
                  <div class="rating__stars_empty"></div>
                  <div class="rating__active" data-rating=4.00 style="width: 80%">
                  </div>
                </div>
                <div class="raiting-block">{{ `${school.reviewTotal} ${convertSchoolRatingToHuman(school.reviewTotal)}` }}</div>
              </div>
            </div>
            <nuxt-link :to="{name: 'schools-id', params: {id: school.url}}" class="school-info-popup">
              <span class="school-info__btn">Перейти на страницу школы</span>
            </nuxt-link>

          </div>

        </div>
        <pagination
          :last-page="lastPage"
          :links="links"
          :page="+page"
          @loadMore="loadMore"
        ></pagination>
        <hidden-pagination
          :pagination="hiddenLinks"
        ></hidden-pagination>
      </div>
    </div>

  </main>
</template>

<script>
import declinationMixins from "@/mixins/declination";
import itemsCount from "@/mixins/itemsCount";
import HiddenPagination from "@/components/Embed/HiddenPagination";
import Pagination from "@/components/Embed/Pagination";
import SchoolParentCategories from "@/components/Embed/SchoolParentCategories";

export default {
  mixins: [declinationMixins, itemsCount],
  components: {
    HiddenPagination,
    Pagination,
    SchoolParentCategories
  },
  data: () => ({
    schools: [],
    total: 0,
    links: {},
    hiddenLinks: [],
    showTotalItems: 0,
    showTotalItemsState: false,
    search: '',
    page: 1,
    lastPage: 1,
    categoryId: null
  }),
  async asyncData({$axios}) {
    let {data, links, meta} = await $axios.$get('/schools');

    return {
      schools: data,
      total: meta.total,
      showTotalItems: meta.per_page,
      hiddenLinks: meta.links,
      links,
      page: meta.current_page,
      lastPage: meta.last_page
    };
  },
  methods: {
    showTotalItemsHandler() {
      this.showTotalItemsState = !this.showTotalItemsState;
    },
    makeSchoolUrl() {
      let url = `/schools?page=${this.page}`
      if (this.showTotalItems) {
        url += `&show=${this.showTotalItems}`;
      }
      if (this.search) {
        url += `&search=${this.search}`;
      }

      if (this.categoryId) {
        url += `&category_id=${this.categoryId}`
      }

      return url;
    },
    async requestHandler() {
      await this.$axios.get(this.makeSchoolUrl()).then(response => {
        this.$refs.schools.scrollIntoView();
        this.showTotalItemsState = false;
        this.schools = response.data.data;
        this.total = response.data.meta.total;
        this.showTotalItems = response.data.meta.per_page;
        this.links = response.data.links;
        this.page = response.data.meta.current_page;
        this.lastPage = response.data.meta.last_page;
      });
    },
    async loadMore(link) {
      const page = link.split('=').slice(-1)[0];
      if (!isNaN(page)) {
        this.page = page;
        await this.requestHandler();
      }
    },
    async categoryFilterHandler(categoryId) {
      this.categoryId = categoryId;
      await this.requestHandler();
    },
    async renderSchoolsHandler(total) {
      this.showTotalItems = total;
      await this.requestHandler();
    },
    async searchHandler(event) {
      if (event.keyCode === 13) {
        await this.requestHandler();
      }
    }
  }
}
</script>

<style scoped>

</style>
