<template>
  <main>
    <div class="main-page container">
      <main-banner
        :schools-count="schoolsCount"
        :courses-total="coursesTotal"
        :banner-title="bannerTitle"
        :banner-image="bannerImage"
      />
      <benefits />
      <quiz />
      <section class="main-page__courses" id="main-page__courses">
        <div class="main-page__courses-bottom" v-if="categories.length">
          <article class="main-page__course" v-for="cat in categories" :key="`cat${cat.id}`">
            <a :href="`/categories/${cat.url}`">
              <object>
                <h3 class="main-page__course-title">{{ cat.title }}</h3>
                <div>

                  <object class="main-page__course-sub" v-if="cat.total_children.length">
                    <span v-for="subCategory in cat.total_children" :key="`sc-${subCategory.id}`">
                      <a :href="`/categories/${cat.url}/${subCategory.url}`">{{ subCategory.title }}</a>, </span>
                  </object>


                  <object class="main-mobile__course-sub" v-if="cat.total_children.length">
                    <span v-for="subCategory in cat.total_children" :key="`scm-${subCategory.id}`">
                      <a :href="`/categories/${cat.url}/${subCategory.url}`">{{ subCategory.title }}</a>,
                    </span>
                    <a href="https://kurs-market.com/categories/it">...</a>
                  </object>

                  <object class="main-page__course-link">
                    <a href="https://kurs-market.com/categories/it">745 курсов</a>
                  </object>
                </div>
              </object>
            </a>
          </article>
        </div>
      </section>
    </div>
    <promo-block :items="promo" />
    <reviews :comments="comments" />
    <cooperation :items="cooperation" />
  </main>
</template>

<script>
import Banner from "~/components/Main/Banner";
import PromoBlock from "~/components/Main/PromoBlock";
import Cooperation from "~/components/Main/Cooperation";
import Benefits from "~/components/Main/Benefits";
import Quiz from "~/components/Main/Quiz";
import Reviews from "@/components/Main/Reviews";
export default {
  components: {
    'main-banner': Banner,
    PromoBlock,
    Cooperation,
    Benefits,
    Quiz,
    Reviews
  },
  data: () => ({
    categories: [],
    schoolsCount: 0,
    coursesTotal: 0,
    bannerTitle: null,
    bannerImage: null,
    cooperation: null,
    promo: null,
    comments: [],
  }),
  async asyncData({ $axios }) {
    try {
      const {
        categories,
        schoolsCount,
        coursesTotal,
        bannerTitle,
        bannerImage,
        cooperation,
        promo,
        comments,
      } = await $axios.$get(`/main/categories`).then(response => response);

      return {
        categories,
        schoolsCount,
        coursesTotal,
        bannerTitle,
        bannerImage,
        cooperation,
        promo,
        comments,
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    }
  },
  mounted() {
  }
}
</script>
