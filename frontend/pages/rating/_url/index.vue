<template>
  <main>
    <nav aria-label="breadcrumb" class="nav-breadcrumbs">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Главная
            </nuxt-link>
          </li>
          <li class="breadcrumb-item" v-if="category.parent"><nuxt-link :to="`/rating/${category.parent.url}`">{{ category.parent.title }}</nuxt-link></li>
          <li class="breadcrumb-item active" aria-current="page" v-if="category.title">{{ category.title }}</li>
        </ol>
      </div>
    </nav>

    <div class="ratings__wrapper">
      <h1 class="ratings__title">Рейтинг курсов по теме "{{ category.meta_h1 }}"</h1>
      <p>Собрали рейтинг лучших курсов по программированию. Актуализируем информацию обо все курсах каждую неделю.</p>
      <div class="filters ratings__modificators" v-if="tags.length > 0">
        <a
          href=""
          @click.prevent=""
          :data-filter="`.${tag.alias}`"
          v-for="(tag,key) in tags"
          :key="key"
        >{{ tag.title }}
          <img src="/images/ratings-cross.svg" :alt="tag.title">
        </a>
      </div>
      <div class="ratings__sorting">
        <span>Сортировка:</span>
        <div class="ratings__sorting-filters">
          <a
            v-for="(sort,i) in sorting"
            :key="i"
            href="#"
            :data-name="sort.direction"
            :data-index="i"
            :data-direction="sort.dataDirection"
            :class="sort.active ? 'sorting-active' : ''"
          >
            {{ sort.title }}
            <img src="/images/sorting.svg" alt="sorting">
          </a>
        </div>
      </div>
      <section class="ratings__sorting-results">
        <div class="ratings__table-header">
          <div>Курс</div>
          <div><span class="table-header-title" data-sort-wrap="rating" data-name="rating_desc">Рейтинг</span>
            <img class="rating__hint-btn" src="https://kurs-market.com/images/ratings-hint.svg" alt="hint">
            <div class="rating__hint">Подсчет рейтинга основан на следующих критериях: цена, отзывы, актуальность и
              соответствие программы, наличие практики, формат обучения, обратная связь, домашние задания, возможность
              трудоустройства и наличия лицензии. Если вы не согласны с оценкой, свяжитесь с нами написав на почту <a
                href="mailto:partners@kurs-market.com">partners@kurs-market.com</a>
            </div>
            <div class="arrows-wrapper rating" data-sort-wrap="rating" data-name="rating_desc">
              <a><img src="https://kurs-market.com/images/arrow-up.svg" class="arrow-up" alt="arrow up"></a>
              <a><img src="https://kurs-market.com/images/arrow-down.svg" class="transparent-arrow arrow-down"
                      alt="arrow down"></a>
            </div>
            <a class="cross-img-wrapper">
              <img class="close_rating" data-sorting="rating" src="https://kurs-market.com/images/red-cross.svg"
                   alt="red cross" style="display: inline">
            </a>
          </div>
          <div>Школа</div>
          <div><span class="table-header-title" data-sort-wrap="price" data-name="price_desc">Цена</span>
            <div class="arrows-wrapper price" data-sort-wrap="price" data-name="price_desc">
              <a><img src="https://kurs-market.com/images/arrow-up.svg" class="arrow-up" alt="arrow up"></a>
              <a><img src="https://kurs-market.com/images/arrow-down.svg" class="arrow-down" alt="arrow down"></a>
            </div>
            <a class="cross-img-wrapper">
              <img class="close_rating" data-sorting="price" src="https://kurs-market.com/images/red-cross.svg"
                   alt="red cross">
            </a>
          </div>
          <div><span class="table-header-title">Рассрочка</span>
            <div class="arrows-wrapper credit" data-sort-wrap="credit">
              <a><img src="https://kurs-market.com/images/arrow-up.svg" class="arrow-up" alt="arrow up"></a>
              <a><img src="https://kurs-market.com/images/arrow-down.svg" class="arrow-down" alt="arrow down"></a>
            </div>
            <a class="cross-img-wrapper">
              <img class="close_rating" data-sorting="credit" src="https://kurs-market.com/images/red-cross.svg"
                   alt="red cross">
            </a>
          </div>
          <div><span class="table-header-title" data-sort-wrap="timing" data-name="timing_desc">Длительность</span>
            <div class="arrows-wrapper timing" data-sort-wrap="timing" data-name="timing_desc">
              <a><img src="https://kurs-market.com/images/arrow-up.svg" class="arrow-up" alt="arrow up"></a>
              <a><img src="https://kurs-market.com/images/arrow-down.svg" class="arrow-down" alt="arrow down"></a>
            </div>
            <a class="cross-img-wrapper">
              <img class="close_rating" data-sorting="timing" src="https://kurs-market.com/images/red-cross.svg"
                   alt="red cross">
            </a>
          </div>
          <div>Ссылка на курс</div>
        </div>
        <div class="grid" style="position: relative; height: 283px;">
          <div
            class="element-item ratings__table-row  obratnaya-svyaz  proverka-dz  rassrochka  est-praktika  sertifikat "
            data-category=" obratnaya-svyaz  proverka-dz  rassrochka  est-praktika  sertifikat " itemscope=""
            itemtype="https://schema.org/Product" style="position: absolute; left: 0px; top: 0px;">
            <div style="display: none">
              <div class="popularity_desc">401</div>
              <div class="rating_desc">3.65</div>
              <div class="price_desc">74900</div>
              <div class="timing_desc">15768017.28</div>
            </div>
            <div class="ratings__table-row-course">
              <p data-id="16091" itemprop="name">
                Быстрый старт в IT
              </p>
              <div>
                <a
                  href="https://new.productstar.ru/start?source_type=partners&amp;utm_source=rating&amp;utm_medium=cpa&amp;utm_campaign=product-prof&amp;utm_term=kursmarket&amp;utm_content=july">Ссылка
                  на курс</a> <span>лучший рейтинг</span>
              </div>
            </div>
            <div class="ratings__table-row-rating">
              <span class="mobile-rating-number bg-mixed">3.65</span>
            </div>
            <div class="ratings__table-row-school">
              <div>
                <img itemprop="image" src="https://kurs-market.com/storage/uploads/2022-11-15/productstar1668521149.jpg"
                     alt="Онлайн-школа Productstar"
                     style="width: 21px;height: 21px;object-fit: cover; display: none"><span>
                                    <a href="https://kurs-market.com/schools/onlayn-shkola-productstar">Productstar</a>
                                </span>
              </div>
              <div class="school-rating-container" itemprop="aggregateRating" itemscope=""
                   itemtype="https://schema.org/AggregateRating">
                <div class="school-rating-count" itemprop="ratingValue">4.91</div>
                <div class="school-rating-stars">
                  <div class="school-rating-stars_empty"></div>
                  <div class="school-rating-active" style="width: 98.20%"></div>
                </div>
              </div>
              <meta itemprop="reviewCount" content="23">
              <a href="https://kurs-market.com/schools/onlayn-shkola-productstar">23 отзывов</a>
            </div>
            <div class="ratings__table-row-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
              <meta itemprop="priceCurrency" content="RUB">
              <div itemprop="price" content="74900">74 900 ₽</div>
              <span>120 000 ₽</span>
            </div>
            <div class="ratings__table-row-credit">
                    <span>
                                                                                    Нет рассрочки
                                                                                                </span>
            </div>

            <div class="ratings__table-row-length">
              <span>6 месяцев</span>
            </div>

            <div class="ratings__table-row-link">
              <a
                href="https://new.productstar.ru/start?source_type=partners&amp;utm_source=rating&amp;utm_medium=cpa&amp;utm_campaign=product-prof&amp;utm_term=kursmarket&amp;utm_content=july">Перейти
                к курсу</a></div>
          </div>
          <div
            class="element-item ratings__table-row  dlya-prodolzhayushchikh  obratnaya-svyaz  proverka-dz  rassrochka "
            data-category=" dlya-prodolzhayushchikh  obratnaya-svyaz  proverka-dz  rassrochka " itemscope=""
            itemtype="https://schema.org/Product" style="position: absolute; left: 0px; top: 143px;">
            <div style="display: none">
              <div class="popularity_desc">303</div>
              <div class="rating_desc">3.65</div>
              <div class="price_desc">29071</div>
              <div class="timing_desc">5256005.76</div>
            </div>
            <div class="ratings__table-row-course">
              <p data-id="9917" itemprop="name">
                Java-фреймворк Spring
              </p>
              <div>
                <a href="https://go.redav.online/11a88b0105ded301?dl=https://skillbox.ru/course/java-framework-spring/">Ссылка
                  на курс</a> <span>лучший рейтинг</span>
              </div>
            </div>
            <div class="ratings__table-row-rating">
              <span class="mobile-rating-number bg-mixed">3.65</span>
            </div>
            <div class="ratings__table-row-school">
              <div>
                <img itemprop="image" src="https://kurs-market.com/storage/uploads/2022-11-10/skillbox1668080938.jpg"
                     alt="Образовательная платформа Skillbox"
                     style="width: 21px;height: 21px;object-fit: cover; display: none"><span>
                                    <a href="https://kurs-market.com/schools/platforma-skillbox">Skillbox</a>
                                </span>
              </div>
              <div class="school-rating-container" itemprop="aggregateRating" itemscope=""
                   itemtype="https://schema.org/AggregateRating">
                <div class="school-rating-count" itemprop="ratingValue">4.00</div>
                <div class="school-rating-stars">
                  <div class="school-rating-stars_empty"></div>
                  <div class="school-rating-active" style="width: 80.00%"></div>
                </div>
              </div>
              <meta itemprop="reviewCount" content="515">
              <a href="https://kurs-market.com/schools/platforma-skillbox">515 отзывов</a>
            </div>
            <div class="ratings__table-row-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
              <meta itemprop="priceCurrency" content="RUB">
              <div itemprop="price" content="29071">29 071 ₽</div>
              <span>48 451 ₽</span>
            </div>
            <div class="ratings__table-row-credit">
                    <span>
                                                                                    Нет рассрочки
                                                                                                </span>
            </div>

            <div class="ratings__table-row-length">
              <span>2 месяца</span>
            </div>

            <div class="ratings__table-row-link">
              <a href="https://go.redav.online/11a88b0105ded301?dl=https://skillbox.ru/course/java-framework-spring/">Перейти
                к курсу</a></div>
          </div>
        </div>

      </section>
      <section class="ratings__more">
        <h2 class="ratings__more-subtitle">Подробнее о курсах рейтинга</h2>
        <ul class="ratings__more-courses-list">
          <li class="courses-list-item" itemscope="" itemtype="https://schema.org/Product">
            <div class="courses-list-item-body">
              <p class="ratings__school-title" itemprop="name">Быстрый старт в IT</p>
              <p class="ratings__school-subtitle"><a href="https://kurs-market.com/schools/onlayn-shkola-productstar">Productstar</a>
              </p>
              <div class="school-rating-container" itemprop="aggregateRating" itemscope=""
                   itemtype="https://schema.org/AggregateRating">
                <div class="school-rating-stars">
                  <div class="school-rating-stars_empty"></div>
                  <div class="school-rating-active" style="width: 77% "></div>
                </div>
                <div class="school-rating-count" itemprop="ratingValue">3.85</div>
                <meta itemprop="reviewCount" content="0">
                <a href="https://kurs-market.com/courses/kurs-aytishnik">0 отзывов</a>
              </div>
              <div class="courses-list-item-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                <meta itemprop="priceCurrency" content="RUB">
                <span itemprop="price" content="74900">74 900 ₽</span>
                Нет рассрочки
              </div>
              <div class="courses-list-item-format">
                <span><b>Формат:</b></span> <span>Прямые эфиры,  Вебинар,  Упражнения на платформе </span>
              </div>
              <div class="courses-list-item-about">
                <span><b>О курсе:</b></span> <span>Сделайте первый шаг в карьере IT-специалиста: попробуйте и выберите одну из 4 востребованных профессий. Сможете выбрать между разработчиком, аналитико...</span>
              </div>
            </div>
            <div>
              <a
                href="https://new.productstar.ru/start?source_type=partners&amp;utm_source=rating&amp;utm_medium=cpa&amp;utm_campaign=product-prof&amp;utm_term=kursmarket&amp;utm_content=july"
                class="courses-list-item-link">
                курс на https://productstar.ru </a>
            </div>
          </li>
          <li class="courses-list-item" itemscope="" itemtype="https://schema.org/Product">
            <div class="courses-list-item-body">
              <p class="ratings__school-title" itemprop="name">Java-фреймворк Spring</p>
              <p class="ratings__school-subtitle"><a
                href="https://kurs-market.com/schools/platforma-skillbox">Skillbox</a></p>
              <div class="school-rating-container" itemprop="aggregateRating" itemscope=""
                   itemtype="https://schema.org/AggregateRating">
                <div class="school-rating-stars">
                  <div class="school-rating-stars_empty"></div>
                  <div class="school-rating-active" style="width: 77% "></div>
                </div>
                <div class="school-rating-count" itemprop="ratingValue">3.85</div>
                <meta itemprop="reviewCount" content="0">
                <a href="https://kurs-market.com/courses/java-freymvork-spring">0 отзывов</a>
              </div>
              <div class="courses-list-item-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                <meta itemprop="priceCurrency" content="RUB">
                <span itemprop="price" content="29071">29 071 ₽</span>
                Нет рассрочки
              </div>
              <div class="courses-list-item-format">
                <span><b>Формат:</b></span> <span>Видео в записи,  Упражнения на платформе </span>
              </div>
              <div class="courses-list-item-about">
                <span><b>О курсе:</b></span> <span>Вы освоите самый востребованный фреймворк для создания веб-приложений и REST-сервисов на Java. Научитесь создавать и поддерживать приложения на Spring...</span>
              </div>
            </div>
            <div>
              <a href="https://go.redav.online/11a88b0105ded301?dl=https://skillbox.ru/course/java-framework-spring/"
                 class="courses-list-item-link">
                курс на skillbox.ru </a>
            </div>
          </li>
        </ul>
      </section>
      <section class="ratings__another-courses">
        <h2 class="ratings__another-courses-subtitle">Другие курсы по хобби и увлечениям</h2>
        <div class="ratings__another-courses-row">
          <div class="ratings__another-courses-column">
            <a href="analitika-1">Аналитика</a>
            <a href="biznes-1">Бизнес</a>
            <a href="gumanitarnye-nauki">Гуманитарные науки</a>
          </div>
          <div class="ratings__another-courses-column">
            <a href="dizayn">Дизайн</a>
            <a href="krasota-i-zdorove">Красота и здоровье</a>
            <a href="marketing">Маркетинг</a>
          </div>
          <div class="ratings__another-courses-column">
            <a href="media">Медиа</a>
            <a href="programmirovanie" style="color: #E66366">Программирование</a>
            <a href="upravlenie-2">Управление</a>
          </div>
          <div class="ratings__another-courses-column">
          </div>
        </div>
      </section>
    </div>

  </main>
</template>

<script>
import {ratingMenuPopup} from "@/store/ratingMenuPopup";

export default {
  name: "index",
  async asyncData({ $axios, params }) {
    const {category,tags} = await $axios.$get(`/rating/get/${params.url}`).then(response => response);

    return {category,tags}
  },
  head: {
  },
  created() {
    ratingMenuPopup.value.active = false;
  },
  data: () => ({
    category: null,
    tags: null,
    sorting: [
      {
        title: 'по популярности',
        direction: 'popularity_desc',
        active: false,
        dataDirection: true
      },
      {
        title: 'по цене',
        direction: 'price_desc',
        active: false,
        dataDirection: true
      },
      {
        title: 'по длительности',
        direction: 'timing_desc',
        active: false,
        dataDirection: true
      },
      {
        title: 'по рейтингу',
        direction: 'rating_desc',
        active: true,
        dataDirection: true
      },
    ]
  }),
  mounted() {
  }
}
</script>

<style scoped>

</style>
