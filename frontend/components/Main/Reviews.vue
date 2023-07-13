<template>
  <div class="main-page container" v-if="comments.length">
    <section class="main-page__reviews">
      <h2>Последние отзывы</h2>
      <p>Собираем отзывы тех, кто проходил те или иные курсы. Как с нашего портала, так и с крупных
        онлайн-площадок</p>
      <div class="rewiews__contents-wrapper">
        <div class="main-page__reviews-contents">
          <article class="main-page__reviews-review" itemscope itemtype="https://schema.org/Review" v-for="(comment, key) in comments" :key="key">
            <div class="main-page__review-top">
              <meta itemprop="name" :content="comment.author">
              <h3>{{ comment.author }}</h3>
              <div itemprop="itemReviewed" itemscope=""
                   itemtype="https://schema.org/Organization">
                <meta itemprop="address" content="">
                <meta itemprop="telephone" content="">
                <div itemprop="aggregateRating" itemscope=""
                     itemtype="https://schema.org/AggregateRating">
                  <meta itemprop="ratingValue" :content="comment.grade">
                  <meta itemprop="reviewCount" content="0">
                </div><!---->
              </div>
              <div class="main-page__reviews-rating">
                <div class="school-rating-stars" itemprop="reviewRating" itemtype="https://schema.org/Rating">
                  <div class="school-rating-stars_empty"></div>
                  <div class="school-rating-active" :style="`width: ${comment.rating}%`"></div>
                </div>
                <span class="main-page__review-date">{{ comment.date }}</span>
              </div>
              <div class="main-page__review-text">{{ comment.text }}</div>
              <a class="main-page__review-more"
                 href="https://kurs-market.com/schools/onlayn-shkola-dizayna-chulakov-school">Читать полностью</a>
            </div>
            <div class="main-page__reviews-bot">
              <p>{{ comment.course }}</p>
              <a href="https://kurs-market.com/schools/onlayn-shkola-dizayna-chulakov-school#reviews-block">
                <picture v-if="comment.school_image">
                  <img
                    :src="comment.school_image"
                    :alt="comment.school_name">
                </picture>
                <template v-else>{{ comment.school_name }}</template>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {
    comments: {
      type: [Array, Object],
      required: false,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
