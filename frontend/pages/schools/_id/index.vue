<template>
  <main>
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    ></breadcrumbs>

    <div class="static-page-wrap school-page">
      <div class="container">
        <div class="school-page__wrapper">
          <div class="school-page__left">
           <title-h1
             class-name="school-page__title"
             :title="school.name"
           ></title-h1>
            <a :href="school.site_link" rel="nofollow" target="_blank" v-if="school.site_link"
               class="school-page__website">{{ school.site_link_text ? school.site_link_text : school.site_link }}</a>

            <div class="school-page__rating">
              <div class="course-rating"><span>4.00</span>
                <div class="rating__stars">
                  <div class="rating__stars_empty"></div>
                  <div class="rating__active"
                       style="width: 81%;"></div>
                </div>
                <div class="course-total">
                  (2 оценки)
                </div>
              </div>
              <div class="school-page__reviews-link">
                <a href="#" @click.prevent="scrollToReview">Посмотреть отзывы</a>
              </div>
            </div>
            <div class="school-page__about">
              <div class="school-page__about-wrapper">

                <div class="school-page__descr" v-if="school.description" v-html="school.description"></div>
              </div>
            </div>
          </div>


          <div class="school-page__right plate-listing">
            <img class="school-page__avatar" src="">
            <a
              v-if="school.site_link"
              :href="school.site_link"
              class="school-page__link"
            >Перейти на сайт школы</a>
          </div>
        </div>

      </div>

      <div class="school-page__courses">
        <div class="filters-wrap">
          <div class="container">
            <div class="school-page__subtitle">Все курсы школы
              <span>2434</span></div>
            <form class="market__filters">
              <div class="categories-slider-wrap">
                <button class="select-btn categories__btn" type="button">
                        <span class="select-btn__text">
                            <span>Выбрать направление</span>
                            <input type="hidden" name="CategoryId" value="">
                            <img src="/images/selectArrow.png" alt="selectArrow">
                        </span>
                </button>
                <div class="js-categories-slider">
                  <div class="category-tag">
                            <span>
                                <a href="/categories.html" class="">Категории</a>
                                <input type="hidden" name="Category" value="">
                            </span>
                  </div>
                  <div class="category-tag">
                        <span>
                            <a href="/categories/professionalnaya-perepodgotovka.html" class="">Профессиональная переподготовка</a>
                            <input type="hidden" name="Category" value="449">
                        </span>
                  </div>
                  <div class="category-tag">
                        <span>
                            <a href="/categories/povyshenie-kvalifikacii.html" class="">Повышение квалификации</a>
                            <input type="hidden" name="Category" value="465">
                        </span>
                  </div>
                </div>
              </div>


              <div class="open-filters">
                <button class="select-btn" type="button">
                  <img src="/images/filter.png" alt="filter">
                  <span class="select-btn__text">Фильтры
                                    <img src="/images/selectArrow.png" alt="selectArrow">
                                </span>
                </button>
                <div class="market-all-filters">
                  <div class="filters__block">
                    <div class="filters__title">Цена, руб.</div>
                    <div class="filters__price">
                      <input
                        type="text"
                        placeholder="от 300"
                        name="min_price"
                      >
                      <input
                        type="text"
                        placeholder="до 220 000"
                        name="max_price"
                      >
                    </div>
                  </div>
                  <div class="filters__block">
                    <div class="filters__title"
                         data-type="education_type">Вид обучения
                    </div>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="profession"
                             name="filter[]" value="3">
                      <span>Профессия</span>
                    </label>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="course"
                             name="filter[]" value="2">
                      <span>Курс</span>
                    </label>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="master-class"
                             name="filter[]" value="1">
                      <span>Мастер-класс</span>
                    </label>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="magistratura"
                             name="filter[]" value="10">
                      <span>Магистратура</span>
                    </label>
                  </div>
                  <div class="filters__block">
                    <div class="filters__title"
                         data-type="education_installment">Рассрочка
                    </div>
                    <label class="filters__radio">
                      <input type="radio"
                             data-slug="rassrochka-da"
                             name="filter[]" value="4">
                      <span>Есть</span>
                    </label>
                    <label class="filters__radio">
                      <input type="radio"
                             data-slug="rassrochka-net"
                             name="filter[]" value="5">
                      <span>Нет</span>
                    </label>
                    <label class="filters__radio">
                      <input type="radio"
                             data-slug="rassrochka-all"
                             name="filter[]" value="6">
                      <span>Любые</span>
                    </label>
                  </div>
                  <div class="filters__block">
                    <div class="filters__title"
                         data-type="education_document">Документ об обучении
                    </div>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="diplom"
                             name="filter[]" value="8">
                      <span>Диплом</span>
                    </label>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="sertifikat"
                             name="filter[]" value="9">
                      <span>Сертификат</span>
                    </label>
                    <label class="filters__checkbox">
                      <input type="checkbox"
                             data-slug="ne-vydaetsya"
                             name="filter[]" value="7">
                      <span>Не выдается</span>
                    </label>
                  </div>

                </div>
              </div>


              <label class="filters__checkbox">
                <input type="checkbox" value="1" name="cache_back">
                <span>Курсы с кешбеком</span>
              </label>
              <div class="filters-show select-wrapper">
                <div class="filters-show__text">Показывать</div>
                <button class="select-btn" type="button">
                        <span class="select-btn__text"><span>15</span>
                            <img src="/images/selectArrow.png" alt="selectArrow">
                        </span>
                </button>
                <div class="select-items">
                  <label>
                    <input type="radio" name="show" value="4">
                    <span class="select-text">4</span>
                  </label>
                  <label>
                    <input type="radio" name="show" value="8">
                    <span class="select-text">8</span>
                  </label>
                  <label>
                    <input type="radio" name="show" value="16">
                    <span class="select-text">16</span>
                  </label>
                </div>
              </div>
            </form>
            <div id="filter-block">
              <ul class="plate-listing ">
                <li class="plate-item js-plate-item " data-id="20224">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src=""
                          alt="Сурдопедагогика: теория и методика преподавания в образовательных организациях"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/surdopedagogika-teoriya-i-metodika-prepodavaniya-v-obrazovatelnyh-organizaciyah.html"
                      >
            <span
              class="">Сурдопедагогика: теория и методика преподавания в образовательных организациях</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>2 месяца</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/surdopedagogika-teoriya-i-metodika-prepodavaniya-v-obrazovatelnyh-organizaciyah.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">4000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%81%d1%83%d1%80%d0%b4%d0%be%d0%bf%d0%b5%d0%b4%d0%b0%d0%b3%d0%be%d0%b3%d0%b8%d0%ba%d0%b0-%d1%82%d0%b5%d0%be%d1%80%d0%b8%d1%8f-%d0%b8-%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%b8%d0%ba%d0%b0-%d0%bf%d1%80/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20480">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Использование методики Гленна Домана в работе с неговорящими детьми при подготовке к обучению грамоте"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/ispolzovanie-metodiki-glenna-domana-v-rabote-s-negovoryashchimi-detmi-pri-podgotovke-k-obucheniyu-gramote.html"
                      >
            <span
              class="">Использование методики Гленна Домана в работе с неговорящими детьми при подготовке к обучению грамоте</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 недели</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/ispolzovanie-metodiki-glenna-domana-v-rabote-s-negovoryashchimi-detmi-pri-podgotovke-k-obucheniyu-gramote.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%b8%d0%ba%d0%b8-%d0%b3%d0%bb%d0%b5%d0%bd%d0%bd%d0%b0-%d0%b4%d0%be%d0%bc%d0%b0%d0%bd/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20736">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Одаренные дети. Особенности развития и система сопровождения в системе школьного образования в условиях реализации ФГОС НОО"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/odarennye-deti-osobennosti-razvitiya-i-sistema-soprovozhdeniya-v-sisteme-shkolnogo-obrazovaniya-v-usloviyah-realizacii-fgos-noo.html"
                      >
            <span
              class="">Одаренные дети. Особенности развития и система сопровождения в системе школьного образования в условиях реализации ФГОС НОО</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>Не указана</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/odarennye-deti-osobennosti-razvitiya-i-sistema-soprovozhdeniya-v-sisteme-shkolnogo-obrazovaniya-v-usloviyah-realizacii-fgos-noo.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%be%d0%b4%d0%b0%d1%80%d0%b5%d0%bd%d0%bd%d1%8b%d0%b5-%d0%b4%d0%b5%d1%82%d0%b8-%d0%be%d1%81%d0%be%d0%b1%d0%b5%d0%bd%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d1%80%d0%b0%d0%b7%d0%b2%d0%b8%d1%82%d0%b8%d1%8f/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20992">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Современные педагогические технологии в профессиональной деятельности преподавателя домры ДМШ, ДШИ в условиях реализации ФГТ"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/sovremennye-pedagogicheskie-tekhnologii-v-professionalnoj-deyatelnosti-prepodavatelya-domry-dmsh-dshi-v-usloviyah-realizacii-fgt.html"
                      >
            <span
              class="">Современные педагогические технологии в профессиональной деятельности преподавателя домры ДМШ, ДШИ в условиях реализации ФГТ</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>1 неделя</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/sovremennye-pedagogicheskie-tekhnologii-v-professionalnoj-deyatelnosti-prepodavatelya-domry-dmsh-dshi-v-usloviyah-realizacii-fgt.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">900 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%81%d0%be%d0%b2%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d0%bd%d1%8b%d0%b5-%d0%bf%d0%b5%d0%b4%d0%b0%d0%b3%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%be%d0%bb%d0%be-25/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="21248">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Тьюторское сопровождение в образовательных организациях"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/tyutorskoe-soprovozhdenie-v-obrazovatelnyh-organizaciyah.html"
                      >
            <span
              class="">Тьюторское сопровождение в образовательных организациях</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 месяца</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/tyutorskoe-soprovozhdenie-v-obrazovatelnyh-organizaciyah.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">7000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%82%d1%8c%d1%8e%d1%82%d0%be%d1%80%d1%81%d0%ba%d0%be%d0%b5-%d1%81%d0%be%d0%bf%d1%80%d0%be%d0%b2%d0%be%d0%b6%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b2-%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="21504">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Автоматизированные системы управления"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/avtomatizirovannye-sistemy-upravleniya.html"
                      >
            <span
              class="">Автоматизированные системы управления</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>2 недели</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/avtomatizirovannye-sistemy-upravleniya.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2500 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%b0%d0%b2%d1%82%d0%be%d0%bc%d0%b0%d1%82%d0%b8%d0%b7%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%bd%d1%8b%d0%b5-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d1%8b-%d1%83%d0%bf%d1%80%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="21760">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Сексология"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title" href="/courses/seksologiya.html"
                      >
            <span
              class="">Сексология</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>2 месяца</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/seksologiya.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">12000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%81%d0%b5%d0%ba%d1%81%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%8f-3/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="22016">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Актуальные вопросы преподавания балалайки в соответствии с дополнительными общеразвивающими программами в учреждениях дополнительного образования (ДМШ, ДШИ)"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/aktualnye-voprosy-prepodavaniya-balalajki-v-sootvetstvii-s-dopolnitelnymi-obshcherazvivayushchimi-programmami-v-uchrezhdeniyah-dopolnitelnogo-obrazovaniya-dmsh-dshi.html"
                      >
            <span
              class="">Актуальные вопросы преподавания балалайки в соответствии с дополнительными общеразвивающими программами в учреждениях дополнительного образования (ДМШ, ДШИ)</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>1 неделя</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/aktualnye-voprosy-prepodavaniya-balalajki-v-sootvetstvii-s-dopolnitelnymi-obshcherazvivayushchimi-programmami-v-uchrezhdeniyah-dopolnitelnogo-obrazovaniya-dmsh-dshi.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">900 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%b0%d0%ba%d1%82%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%b2%d0%be%d0%bf%d1%80%d0%be%d1%81%d1%8b-%d0%bf%d1%80%d0%b5%d0%bf%d0%be%d0%b4%d0%b0%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%b1%d0%b0%d0%bb/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="22272">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Гигиеническое воспитание. Организация санитарного просвещения"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/gigienicheskoe-vospitanie-organizaciya-sanitarnogo-prosveshcheniya.html"
                      >
            <span
              class="">Гигиеническое воспитание. Организация санитарного просвещения</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>1 месяц</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/gigienicheskoe-vospitanie-organizaciya-sanitarnogo-prosveshcheniya.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">6000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%b3%d0%b8%d0%b3%d0%b8%d0%b5%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b5-%d0%b2%d0%be%d1%81%d0%bf%d0%b8%d1%82%d0%b0%d0%bd%d0%b8%d0%b5-%d0%be%d1%80%d0%b3%d0%b0%d0%bd%d0%b8%d0%b7%d0%b0%d1%86/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20225">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Педагогика и психология в системе специального образования"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/pedagogika-i-psihologiya-v-sisteme-specialnogo-obrazovaniya.html"
                      >
            <span
              class="">Педагогика и психология в системе специального образования</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 месяца</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/pedagogika-i-psihologiya-v-sisteme-specialnogo-obrazovaniya.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">7000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%bf%d0%b5%d0%b4%d0%b0%d0%b3%d0%be%d0%b3%d0%b8%d0%ba%d0%b0-%d0%b8-%d0%bf%d1%81%d0%b8%d1%85%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%8f-%d0%b2-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%b5-%d1%81%d0%bf%d0%b5-2/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20481">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Разработка адаптированных образовательных программ в условиях ФГОС СПО"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/razrabotka-adaptirovannyh-obrazovatelnyh-programm-v-usloviyah-fgos-spo.html"
                      >
            <span
              class="">Разработка адаптированных образовательных программ в условиях ФГОС СПО</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 недели</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/razrabotka-adaptirovannyh-obrazovatelnyh-programm-v-usloviyah-fgos-spo.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0-%d0%b0%d0%b4%d0%b0%d0%bf%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%bd%d1%8b%d1%85-%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20737">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Система образовательной организации в начальном общем образовании в условиях реализации ФГОС"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/sistema-obrazovatelnoj-organizacii-v-nachalnom-obshchem-obrazovanii-v-usloviyah-realizacii-fgos.html"
                      >
            <span
              class="">Система образовательной организации в начальном общем образовании в условиях реализации ФГОС</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>108 часов</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/sistema-obrazovatelnoj-organizacii-v-nachalnom-obshchem-obrazovanii-v-usloviyah-realizacii-fgos.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">5000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%b0-%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d0%be%d0%b9-%d0%be%d1%80%d0%b3%d0%b0%d0%bd%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d0%b8/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="20993">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Современные педагогические технологии в профессиональной деятельности преподавателя гитары ДМШ, ДШИ в условиях реализации ФГТ"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/sovremennye-pedagogicheskie-tekhnologii-v-professionalnoj-deyatelnosti-prepodavatelya-gitary-dmsh-dshi-v-usloviyah-realizacii-fgt.html"
                      >
            <span
              class="">Современные педагогические технологии в профессиональной деятельности преподавателя гитары ДМШ, ДШИ в условиях реализации ФГТ</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 недели</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/sovremennye-pedagogicheskie-tekhnologii-v-professionalnoj-deyatelnosti-prepodavatelya-gitary-dmsh-dshi-v-usloviyah-realizacii-fgt.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d1%81%d0%be%d0%b2%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d0%bd%d1%8b%d0%b5-%d0%bf%d0%b5%d0%b4%d0%b0%d0%b3%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%be%d0%bb%d0%be-24/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="21249">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Организация социально-педагогической деятельности в условиях реализации ФГОС"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/organizaciya-socialno-pedagogicheskoj-deyatelnosti-v-usloviyah-realizacii-fgos.html"
                      >
            <span
              class="">Организация социально-педагогической деятельности в условиях реализации ФГОС</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>3 месяца</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a
                          href="/courses/organizaciya-socialno-pedagogicheskoj-deyatelnosti-v-usloviyah-realizacii-fgos.html"
                          class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">7000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/%d0%be%d1%80%d0%b3%d0%b0%d0%bd%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d1%81%d0%be%d1%86%d0%b8%d0%b0%d0%bb%d1%8c%d0%bd%d0%be-%d0%bf%d0%b5%d0%b4%d0%b0%d0%b3%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba-2/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

                <li class="plate-item js-plate-item " data-id="21505">
                  <div class="plate-item-body">
                    <div class="plate-item__abs">


                      <div class="favourite-course">
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html#"
                          class="sign-in-needed"
                        ></a>
                      </div>

                    </div>
                    <div class="plate-item__top-wrapper">
                      <div class="plate-item__logo">
                        <a href="akademiya-distancionnogo-obrazovaniya.html"><img
                          src="/storage/uploads/2022-12-14/11671015808.jpg"
                          alt="Microsoft Office для начинающих"
                          style="max-width: 117px;height: 38px; width: 100%"></a>
                      </div>
                      <div class="plate-item__rating">
                        <div class="raiting-block"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          4
                        </div>
                        <div class="rating__stars"
                             data-school-url="https://kurs-market.com/schools/akademiya-distancionnogo-obrazovaniya">
                          <div class="rating__stars_empty"></div>
                          <div class="rating__active" style="width: 80% "></div>
                        </div>
                        <a
                          href="akademiya-distancionnogo-obrazovaniya.html"
                          class="rating__stars-text">
                          (2 отзыва)</a>
                      </div>
                    </div>
                    <div class="title-wrapper">
                      <a class="plate-item__title"
                         href="/courses/microsoft-office-dlya-nachinayushchih.html"
                      >
            <span
              class="">Microsoft Office для начинающих</span>
                      </a>
                      <div class="plate-item__duration"><img src="/images/duration-icon.svg"
                                                             alt="duration"><span>2 недели</span>
                      </div>
                    </div>
                    <div class="bot-wrapper">
                      <div class="plate-item__tags">
                        <span class="plate-item__tag" data-url="dlya-nachinayushchikh">для начинающих </span>
                        <span class="plate-item__tag"
                              data-url="obratnaya-svyaz">обратная связь </span>
                        <span class="plate-item__tag" data-url="diplom">диплом </span>
                        <span class="plate-item__tag"
                              data-url="pomoshch-v-trudoustroystve">помощь в трудоустройстве </span>
                        <a href="/courses/microsoft-office-dlya-nachinayushchih.html"
                           class="plate-item__more">подробнее</a>
                      </div>

                      <div class="plate-item-top">
                        <div class="row">
                          <div class="text-right">

                          </div>
                        </div>
                      </div>
                      <div class="price-row__wrapper">
                        <div class="price__wrapper">
                          <span class="new-price">2000 &#8381</span>
                          <span class="old-price"></span>
                        </div>
                      </div>
                    </div>
                    <div class="price-row">
                      <div class="plate-items">
                        <a
                          href="https://ooo-ado.ru/eb-courses/microsoft-office-%d0%b4%d0%bb%d1%8f-%d0%bd%d0%b0%d1%87%d0%b8%d0%bd%d0%b0%d1%8e%d1%89%d0%b8%d1%85/"
                          class="plate-item__course course-author-link"
                          rel="noindex"
                        >
                          Перейти к курсу
                        </a>
                      </div>
                    </div>

                  </div>
                </li>

              </ul>

              <div class="text-center">
                <a href="/index.html" class="btn-custom show-more-btn market-btn">Показать еще</a>
                <div class="pagination-links">

                  <span class="page-numbers" aria-hidden="true">&lsaquo;</span>


                  <span class="page-numbers current">1</span>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=2.html"
                     data-page-number="2">2</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=3.html"
                     data-page-number="3">3</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=4.html"
                     data-page-number="4">4</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=5.html"
                     data-page-number="5">5</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=6.html"
                     data-page-number="6">6</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=7.html"
                     data-page-number="7">7</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=8.html"
                     data-page-number="8">8</a>

                  <span class="page-numbers">...</span>


                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=162.html"
                     data-page-number="162">162</a>
                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=163.html"
                     data-page-number="163">163</a>


                  <a class="page-numbers" href="akademiya-distancionnogo-obrazovaniya%3Fpage=2.html"
                     rel="next" aria-label="Вперёд &raquo;">&rsaquo;</a>


                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="container" id="reviews-block" ref="reviewBlock">

        </div>
      </div>


      <div class="overflow">
        <!-- add popup-success class to ".login-popup" it would be removed when new popup opens -->
        <form class="login-popup " data-popup="event-popup">
          <div class="cooperation-form-success">
            <div class="cooperation-form-success__title">
              Ваша заявка принята!
            </div>
          </div>
          <div class="login-popup__header">
            <img src="/images/logo.png" alt="logo">
          </div>
          <a href="akademiya-distancionnogo-obrazovaniya.html#" class="login-popup__close">✕</a>
          <div class="login-popup__body">
            <div class="login-popup__title">Оставьте ваши данные и представитель школы свяжется с вами в
              ближайшее время.
            </div>
            <input type="text" class="login-popup__input" placeholder="Имя">
            <input type="text" class="login-popup__input" placeholder="Почта">
            <input type="text" class="login-popup__input" placeholder="+7 (9__) ___-__-__">
            <button class="login-popup__btn">Участвовать</button>
            <div class="login-popup__text">
              Оставляя заявку, даю согласие на обработку моих персональных данных
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from "@/components/Embed/Breadcrumbs";
import TitleH1 from "@/components/Embed/TitleH1";
export default {
  components: {
    Breadcrumbs,
    TitleH1,
  },
  data: () => ({
    breadcrumbs: [],
    school: null
  }),
  async asyncData({$axios, params}) {
    const { data } = await $axios.get(`/schools/${params.id}`);
    return {
      breadcrumbs: data.breadcrumbs,
      school: data.school
    };
  },
  methods: {
    scrollToReview() {
      this.$refs.reviewBlock.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style scoped>

</style>
