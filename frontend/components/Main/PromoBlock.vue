<template>
  <div class="main-page container" v-if="items">
    <section class="main-page__promo">
      <div class="main-page__promo-top">
        <div class="main-page__promo-text">
          <h2>{{ items.title }}</h2>
          <p v-if="items.description">{{ items.description }}</p>
        </div>
        <div class="main-page__promo-promocode" v-if="items.promocode">
          <p>Ищите выгоду по промокоду</p>
          <div>{{ items.promocode }}</div>
        </div>
      </div>
      <div class="main-page__promo-bot">
        <div class="promo-swiper-wrapper">
          <div class="swiper-button-prev"></div>
          <div class="swiper main-page__promo-swiper">
            <div class="swiper-wrapper" v-if="items.schools">
              <div class="swiper-slide" v-for="school in items.schools" :key="school.id">
                <nuxt-link :to="`school/${school.url}`" :data-id="school.id">
                  <object>
                    <div class="promo-image">
                      <img :src="school.image"
                           :alt="school.name">
                    </div>
                    <div class="promo-discount">
                      <p>-{{ +school.promo?.discount }}<template v-if="school.promo.discount_type === 'PERCENT'">%</template></p>
                      <p v-if="school.promo.date_to">до {{ getDateFormat(school.promo.date_to) }}</p>
                    </div>
                  </object>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PromoBlock",
  props: {
    items: {
      type: [Array, Object],
      required: false,
      default: null
    }
  },
  methods: {
    getDateFormat(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth();

      let dayFormat;
      let monthFormat;

      if (day < 10) {
        dayFormat = `0${day}`;
      } else {
        dayFormat = `${day}`;
      }

      if (month < 10) {
        monthFormat = `0${month}`;
      } else {
        monthFormat = `${month}`;
      }

      return `${dayFormat}.${monthFormat}`;
    }
  }
}
</script>

<style scoped>

</style>
