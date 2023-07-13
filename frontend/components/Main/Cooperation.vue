<template>
  <div class="main-page container" v-if="items">
    <section class="main-page__partners">
      <h4>Мы сотрудничаем</h4>
      <div class="main-page__partners-els">
        <template v-for="(item, key) in items">
          <div :class="key >= 6 ? 'main-page__partners-el tablet-hide' : 'main-page__partners-el'" :key="key" :data-key="key">
            <a :href="item.url" :data-id="item.id">
              <img :src="item.image"
                   :alt="item.name">
            </a>
          </div>
        </template>
        <div class="main-page__partners-el link">
          <a href="https://kurs-market.com/schools">Смотреть все</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cooperation",
  props: {
    items: {
      type: [Array, Object],
      required: false,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
