<template>
  <div :class="`catalog-container${catalogClass}`">
    <div class="catalog-contents">
      <ul class="header__dropdown">
        <li><a href="https://kurs-market.com/categories">Перейти в каталог</a></li>
        <li data-depth="0" data-id="1" class="root-has-children">
          <a href="https://kurs-market.com/categories/it">Программирование
            <span>(745)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/it"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="261">
              <a href="https://kurs-market.com/categories/testirovanie">QA-тестирование
                <span>(62)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="269">
              <a href="https://kurs-market.com/categories/python">Python-разработка
                <span>(62)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="256">
              <a href="https://kurs-market.com/categories/java">Java-разработка
                <span>(62)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="324">
              <a href="https://kurs-market.com/categories/javascript">JavaScript-разработка
                <span>(55)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="271">
              <a href="https://kurs-market.com/categories/htmlcss">Верстка на HTML/CSS
                <span>(22)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="268">
              <a href="https://kurs-market.com/categories/frontend">Frontend-разработка
                <span>(26)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="440">
              <a href="https://kurs-market.com/categories/backend-razrabotka">Backend-разработка
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="441">
              <a href="https://kurs-market.com/categories/fullstack-razrabotka">Fullstack-разработка
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="260">
              <a href="https://kurs-market.com/categories/veb-razrabotka">Веб-разработка
                <span>(27)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="254">
              <a href="https://kurs-market.com/categories/php">PHP-разработка
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="436">
              <a href="https://kurs-market.com/categories/no-code-razrabotka">No-Code разработка
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="9">
              <a href="https://kurs-market.com/categories/informacionnaya-bezopasnost">Информационная безопасность
                <span>(52)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="262">
              <a href="https://kurs-market.com/categories/sistemnoe-administrirovanie">Системное администрирование
                <span>(135)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="263">
              <a href="https://kurs-market.com/categories/1s">1С-разработка
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="266">
              <a href="https://kurs-market.com/categories/s-266">Разработка на С#
                <span>(20)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="255">
              <a href="https://kurs-market.com/categories/s">Разработка на С++
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="431">
              <a href="https://kurs-market.com/categories/ios-razrabotka">IOS-разработка
                <span>(38)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="432">
              <a href="https://kurs-market.com/categories/android-razrabotka">Android-разработка
                <span>(11)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="433">
              <a href="https://kurs-market.com/categories/razrabotka-igr-na-unity">Разработка игр на Unity
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="434">
              <a href="https://kurs-market.com/categories/razrabotka-igr-na-unreal-engine">Разработка игр на Unreal Engine
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="328">
              <a href="https://kurs-market.com/categories/devops">DevOps
                <span>(38)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="435">
              <a href="https://kurs-market.com/categories/rabota-s-git">Работа с GIT
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="326">
              <a href="https://kurs-market.com/categories/go">Golang-разработка
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="325">
              <a href="https://kurs-market.com/categories/vrar">VR/AR разработка
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="442">
              <a href="https://kurs-market.com/categories/arhitektor-po">Архитектура ПО
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="361">
              <a href="https://kurs-market.com/categories/algoritmy-i-struktury-dannyh">Алгоритмы и структуры данных
                <span>(6)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="49" class="root-has-children">
          <a href="https://kurs-market.com/categories/dizayn">Дизайн
            <span>(637)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/dizayn"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="278">
              <a href="https://kurs-market.com/categories/adobe_photoshop">Adobe Photoshop
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="42">
              <a href="https://kurs-market.com/categories/graficheskiy_dizayn">Графический дизайн
                <span>(35)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="299">
              <a href="https://kurs-market.com/categories/dizayn_dlya_nachinayushchih">Дизайн для начинающих
                <span>(16)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="300">
              <a href="https://kurs-market.com/categories/adobe_illustrator">Adobe Illustrator
                <span>(13)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="302">
              <a href="https://kurs-market.com/categories/bim">BIM-моделирование
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="303">
              <a href="https://kurs-market.com/categories/poligrafiya">Дизайн полиграфии
                <span>(11)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="304">
              <a href="https://kurs-market.com/categories/brend-dizayn">Бренд-дизайн
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="305">
              <a href="https://kurs-market.com/categories/yuvelirnye_izdeliya">Дизайн ювелирных изделий
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="50">
              <a href="https://kurs-market.com/categories/dizayn_interera">Дизайн интерьера
                <span>(91)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="64">
              <a href="https://kurs-market.com/categories/landshaftnyy_dizayn">Ландшафтный дизайн
                <span>(39)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="134">
              <a href="https://kurs-market.com/categories/drugoe-134">Другое
                <span>(57)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="437">
              <a href="https://kurs-market.com/categories/grafika-na-houdini">Графика на Houdini
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="443">
              <a href="https://kurs-market.com/categories/tilda">Tilda
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="444">
              <a href="https://kurs-market.com/categories/procreate">Procreate
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="446">
              <a href="https://kurs-market.com/categories/autocad-446">AutoCAD
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="447">
              <a href="https://kurs-market.com/categories/archicad">ArchiCAD
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="210">
              <a href="https://kurs-market.com/categories/promyshlennyy_dizayn">Промышленный дизайн
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="218">
              <a href="https://kurs-market.com/categories/dizayn_mebeli">Дизайн мебели
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="234">
              <a href="https://kurs-market.com/categories/2dkoncept-art">Концепт-арт
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="237">
              <a href="https://kurs-market.com/categories/moushn-dizayn">Motion-дизайн
                <span>(22)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="240">
              <a href="https://kurs-market.com/categories/uxui">UX/UI
                <span>(51)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="241">
              <a href="https://kurs-market.com/categories/geymdizayn">Геймдизайн
                <span>(44)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="242">
              <a href="https://kurs-market.com/categories/figma">Figma
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="243">
              <a href="https://kurs-market.com/categories/veb-dizayn">Веб-дизайн
                <span>(29)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="244">
              <a href="https://kurs-market.com/categories/sketching">Скетчинг
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="245">
              <a href="https://kurs-market.com/categories/illyustraciya">Иллюстрация
                <span>(35)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="246" class="has-children">
              <a href="https://kurs-market.com/categories/3d-modelirovanie">3D-моделирование
                <span>(84)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/3d-modelirovanie"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="448">
                  <a href="https://kurs-market.com/categories/blender">Blender
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="248">
              <a href="https://kurs-market.com/categories/animaciya">Анимация
                <span>(23)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="257" class="root-has-children">
          <a href="https://kurs-market.com/categories/analitika">Аналитика
            <span>(339)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/analitika"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="258">
              <a href="https://kurs-market.com/categories/data_science">Data Science
                <span>(64)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="259">
              <a href="https://kurs-market.com/categories/data_engineering">Data Engineering
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="265">
              <a href="https://kurs-market.com/categories/mashinnoe_obuchenie">Машинное обучение
                <span>(12)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="272">
              <a href="https://kurs-market.com/categories/deep_learning">Deep Learning
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="286">
              <a href="https://kurs-market.com/categories/biznes-analitika">Бизнес-аналитика
                <span>(67)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="298">
              <a href="https://kurs-market.com/categories/finansovaya_analitika">Финансовая аналитика
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="323">
              <a href="https://kurs-market.com/categories/bazy_dannyh">Базы данных
                <span>(40)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="330">
              <a href="https://kurs-market.com/categories/bi-analitika">BI-аналитика
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="331">
              <a href="https://kurs-market.com/categories/excel_i_google-tablicy">Excel и Google-таблицы
                <span>(41)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="332">
              <a href="https://kurs-market.com/categories/veb-analitika">Веб-аналитика
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="333">
              <a href="https://kurs-market.com/categories/product-analitika">Product-аналитика
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="334">
              <a href="https://kurs-market.com/categories/marketingovaya_analitika">Маркетинговая аналитика
                <span>(21)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="335">
              <a href="https://kurs-market.com/categories/otraslevaya_analitika">Отраслевая аналитика
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="439">
              <a href="https://kurs-market.com/categories/python-dlya-analiza-dannyh">Python для анализа данных
                <span>(11)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="46" class="root-has-children">
          <a href="https://kurs-market.com/categories/biznes">Бизнес
            <span>(682)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/biznes"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="285" class="has-children">
              <a href="https://kurs-market.com/categories/beauty-biznes">Beauty-бизнес
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/beauty-biznes"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="387">
                  <a href="https://kurs-market.com/categories/kursy-administratorov-salona-krasoty">Администратор салона красоты
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="62">
              <a href="https://kurs-market.com/categories/kouching">Коучинг
                <span>(34)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="79">
              <a href="https://kurs-market.com/categories/otkrytie_biznesa">Открытие бизнеса
                <span>(45)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="350">
              <a href="https://kurs-market.com/categories/yuridicheskie_aspekty">Корпоративное право
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="351">
              <a href="https://kurs-market.com/categories/elektronnaya_torgovlya_e-commerce">Электронная торговля (E-Commerce)
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="352">
              <a href="https://kurs-market.com/categories/investicii">Инвестиции
                <span>(29)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="362">
              <a href="https://kurs-market.com/categories/upravlenie_biznesom">Управление бизнесом
                <span>(252)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="111">
              <a href="https://kurs-market.com/categories/foreks">Трейдинг, форекс
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="152">
              <a href="https://kurs-market.com/categories/deloproizvodstvo">Делопроизводство
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="153">
              <a href="https://kurs-market.com/categories/logistika">Логистика
                <span>(29)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="155">
              <a href="https://kurs-market.com/categories/nalogi">Налоги и налогообложение
                <span>(13)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="156">
              <a href="https://kurs-market.com/categories/peregovory">Переговоры
                <span>(26)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="159">
              <a href="https://kurs-market.com/categories/franchayzing">Франчайзинг
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="160">
              <a href="https://kurs-market.com/categories/finansy">Финансы
                <span>(81)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="423">
              <a href="https://kurs-market.com/categories/netvorking">Нетворкинг
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="438">
              <a href="https://kurs-market.com/categories/zapusk-startapov">Запуск стартапов
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="216">
              <a href="https://kurs-market.com/categories/buhgalteriya">Бухгалтерия
                <span>(87)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="230">
              <a href="https://kurs-market.com/categories/prodaji">Продажи
                <span>(44)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="273" class="root-has-children">
          <a href="https://kurs-market.com/categories/upravlenie">Управление
            <span>(478)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/upravlenie"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="274">
              <a href="https://kurs-market.com/categories/upravlenie_marketingom">Управление маркетингом
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="282">
              <a href="https://kurs-market.com/categories/hr">HR
                <span>(90)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="295">
              <a href="https://kurs-market.com/categories/project-menedjment">Project-менеджмент
                <span>(11)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="68">
              <a href="https://kurs-market.com/categories/menedjment">Менеджмент
                <span>(206)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="338">
              <a href="https://kurs-market.com/categories/upravlenie_razrabotkoy">Управление разработкой
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="339">
              <a href="https://kurs-market.com/categories/product-menedjment">Product-менеджмент
                <span>(33)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="340">
              <a href="https://kurs-market.com/categories/upravlenie_obrazovatelnymi_proektami">Управление образовательными проектами
                <span>(33)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="341">
              <a href="https://kurs-market.com/categories/upravlenie_prodajami">Управление продажами
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="342">
              <a href="https://kurs-market.com/categories/upravlenie_komandoy">Управление командой
                <span>(52)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="239" class="root-has-children">
          <a href="https://kurs-market.com/categories/marketing-239">Маркетинг
            <span>(386)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/marketing-239"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="275">
              <a href="https://kurs-market.com/categories/internet-marketing">Интернет-маркетинг
                <span>(63)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="276" class="has-children">
              <a href="https://kurs-market.com/categories/smm">SMM
                <span>(56)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/smm"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="277">
                  <a href="https://kurs-market.com/categories/tik-tok">Tik-Tok
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="280">
                  <a href="https://kurs-market.com/categories/youtube">Youtube
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="314">
                  <a href="https://kurs-market.com/categories/instagram">Instagram
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="315">
                  <a href="https://kurs-market.com/categories/yandeks_dzen">Яндекс Дзен
                    <span>(3)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="316">
                  <a href="https://kurs-market.com/categories/vkontakte">Вконтакте
                    <span>(2)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="284">
              <a href="https://kurs-market.com/categories/kontent-menedjment">Контент-менеджмент
                <span>(18)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="296">
              <a href="https://kurs-market.com/categories/prodvijenie_prilojeniy__igr">Продвижение приложений / игр
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="306">
              <a href="https://kurs-market.com/categories/marketing_dlya_nachinayushchih">Маркетинг для начинающих
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="307">
              <a href="https://kurs-market.com/categories/obshchiy_marketing">Общий маркетинг
                <span>(46)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="308">
              <a href="https://kurs-market.com/categories/kontekstnaya_reklama">Контекстная реклама
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="309">
              <a href="https://kurs-market.com/categories/kontent-marketing">Контент-маркетинг
                <span>(11)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="310">
              <a href="https://kurs-market.com/categories/influence-marketing">Influence-маркетинг
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="311">
              <a href="https://kurs-market.com/categories/targetirovannaya_reklama">Таргетированная реклама
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="312">
              <a href="https://kurs-market.com/categories/crm_email_marketing">CRM, Email маркетинг
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="313">
              <a href="https://kurs-market.com/categories/seo">SEO
                <span>(20)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="317">
              <a href="https://kurs-market.com/categories/product-marketing">Product-маркетинг
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="318">
              <a href="https://kurs-market.com/categories/sozdanie_saytov_i_lendingov">Создание сайтов и лендингов
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="319">
              <a href="https://kurs-market.com/categories/otraslevoy_marketing">Отраслевой маркетинг
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="320">
              <a href="https://kurs-market.com/categories/messendjer_marketing">Мессенджер маркетинг
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="321">
              <a href="https://kurs-market.com/categories/brending">Брендинг
                <span>(25)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="86">
              <a href="https://kurs-market.com/categories/prodvijenie">PR, Управление репутацией
                <span>(31)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="389">
              <a href="https://kurs-market.com/categories/rabota-s-marketpleysami">Работа с маркетплейсами
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="158">
              <a href="https://kurs-market.com/categories/kopirayting">Копирайтинг
                <span>(24)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="220">
              <a href="https://kurs-market.com/categories/storitelling">Сторителлинг
                <span>(3)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="13" class="root-has-children">
          <a href="https://kurs-market.com/categories/yazyki">Иностранные языки
            <span>(78)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/yazyki"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="19">
              <a href="https://kurs-market.com/categories/nemeckiy_yazyk">Немецкий язык
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="25">
              <a href="https://kurs-market.com/categories/angliyskiy_yazyk">Английский язык
                <span>(39)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="406">
              <a href="https://kurs-market.com/categories/portugalskiy-yazyk-1">Португальский язык
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="177">
              <a href="https://kurs-market.com/categories/yaponskiy_yazyk">Японский язык
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="178">
              <a href="https://kurs-market.com/categories/cheshskiy_yazyk">Чешский язык
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="179">
              <a href="https://kurs-market.com/categories/tureckiy_yazyk">Турецкий язык
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="180">
              <a href="https://kurs-market.com/categories/kitayskiy_yazyk">Китайский язык
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="181">
              <a href="https://kurs-market.com/categories/italyanskiy_yazyk">Итальянский язык
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="182">
              <a href="https://kurs-market.com/categories/ispanskiy_yazyk">Испанский язык
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="183">
              <a href="https://kurs-market.com/categories/arabskiy_yazyk">Арабский язык
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="184">
              <a href="https://kurs-market.com/categories/russkiy_yazyk">Русский язык
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="185">
              <a href="https://kurs-market.com/categories/polskiy_yazyk">Польский язык
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="186">
              <a href="https://kurs-market.com/categories/koreyskiy_yazyk">Корейский язык
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="200">
              <a href="https://kurs-market.com/categories/francuzskiy_yazyk">Французский язык
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="201">
              <a href="https://kurs-market.com/categories/finskiy_yazyk">Финский язык
                <span>(1)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="6" class="root-has-children">
          <a href="https://kurs-market.com/categories/krasota">Красота и здоровье
            <span>(377)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/krasota"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="7">
              <a href="https://kurs-market.com/categories/makiyaj">Визаж
                <span>(30)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="8">
              <a href="https://kurs-market.com/categories/manikyur">Маникюр
                <span>(123)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="48">
              <a href="https://kurs-market.com/categories/depilyaciya">Депиляция и шугаринг
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="71">
              <a href="https://kurs-market.com/categories/narashchivanie_resnic">Ресницы и брови
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="83">
              <a href="https://kurs-market.com/categories/dietologiya">Нутрициология и диетология
                <span>(32)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="85">
              <a href="https://kurs-market.com/categories/parikmaherskoe_iskusstvo">Парикмахерское искусство
                <span>(59)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="97">
              <a href="https://kurs-market.com/categories/stil">Мода и стиль
                <span>(54)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="198">
              <a href="https://kurs-market.com/categories/massaj">Массаж
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="199">
              <a href="https://kurs-market.com/categories/kosmetologiya">Косметология
                <span>(30)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="294" class="root-has-children">
          <a href="https://kurs-market.com/categories/kursy_dlya_detey">Курсы для детей и школьников
            <span>(174)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/kursy_dlya_detey"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="264">
              <a href="https://kurs-market.com/categories/programmirovanie_dlya_detey">Программирование для детей
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="279">
              <a href="https://kurs-market.com/categories/fotografiya_dlya_detey">Фотография для детей
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="167" class="has-children">
              <a href="https://kurs-market.com/categories/kursy-dopolnitelnogo-shkolnogo-obrazovaniya">Школьное образование
                <span>(100)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/kursy-dopolnitelnogo-shkolnogo-obrazovaniya"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="391">
                  <a href="https://kurs-market.com/categories/himiya">Химия
                    <span>(5)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="393">
                  <a href="https://kurs-market.com/categories/drugie-kursy-dopolnitelnogo-shkolnogo-obrazovaniya-393">Другое
                    <span>(6)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="394">
                  <a href="https://kurs-market.com/categories/biologiya">Биология
                    <span>(13)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="395">
                  <a href="https://kurs-market.com/categories/istoriya-1">История
                    <span>(3)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="396">
                  <a href="https://kurs-market.com/categories/literatura">Литература
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="397">
                  <a href="https://kurs-market.com/categories/medicina">Медицина
                    <span>(15)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="398">
                  <a href="https://kurs-market.com/categories/fizika">Физика
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="399">
                  <a href="https://kurs-market.com/categories/astronomiya">Астрономия
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="400">
                  <a href="https://kurs-market.com/categories/obshchestvoznanie">Обществознание
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="401">
                  <a href="https://kurs-market.com/categories/informatika">Информатика
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="402">
                  <a href="https://kurs-market.com/categories/angliyskiy-yazyk">Английский язык
                    <span>(3)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="403">
                  <a href="https://kurs-market.com/categories/nemeckiy-yazyk">Немецкий язык
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="404">
                  <a href="https://kurs-market.com/categories/portugalskiy-yazyk">Португальский язык
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="405">
                  <a href="https://kurs-market.com/categories/veterinariya">Ветеринария
                    <span>(5)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="168">
                  <a href="https://kurs-market.com/categories/matematika">Математика
                    <span>(2)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="204" class="has-children">
              <a href="https://kurs-market.com/categories/oge">ОГЭ
                <span>(15)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/oge"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="381">
                  <a href="https://kurs-market.com/categories/kursy-oge-po-russkomu-yazyku-online">Русский язык
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="382">
                  <a href="https://kurs-market.com/categories/kyrsy-oge-po-matematike-online">Математика
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="383">
                  <a href="https://kurs-market.com/categories/kursy-oge-po-fizike-online">Физика
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="384">
                  <a href="https://kurs-market.com/categories/kursy-oge-po-informatike-online">Информатика
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="385">
                  <a href="https://kurs-market.com/categories/kursy-oge-po-obshchestvoznanie-online">Обществознание
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="386">
                  <a href="https://kurs-market.com/categories/kursy-oge-po-biologii-online">Биология
                    <span>(1)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="205" class="has-children">
              <a href="https://kurs-market.com/categories/ege">ЕГЭ
                <span>(96)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/ege"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="371">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-biologie-online-1">Биология
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="372">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-obshchestvoznaniu-online">Обществознание
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="373">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-russkomu-yazyku-online">Русский язык
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="374">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-informatike-online">Информатика
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="375">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-fizike-online">Физика
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="376">
                  <a href="https://kurs-market.com/categories/kyrsi-ege-po-matematike-online">Математика
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="377">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-angliyskomu-yazyku-online">Английский язык
                    <span>(2)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="378">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-literature-online">Литература
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="379">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-himii-online">Химия
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="380" class="has-children">
                  <a href="https://kurs-market.com/categories/kursy-ege-po-istorii-online">История
                    <span>(1)</span>
                  </a>
                  <ul class="header__dropdown">
                    <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/kursy-ege-po-istorii-online"><b>Все курсы по теме</b></a></li>
                    <li data-depth="3" data-parent-category-link="http://test.com?depth=3" data-id="408">
                      <a href="https://kurs-market.com/categories/istoriya-religii">История религии
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="219">
              <a href="https://kurs-market.com/categories/dizayn_dlya_detey">Дизайн для детей
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="497">
              <a href="https://kurs-market.com/categories/doshkolnoe-obrazovanie">Дошкольное образование
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="87" class="root-has-children">
          <a href="https://kurs-market.com/categories/pozirovanie-87">Психология
            <span>(284)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/pozirovanie-87"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="366">
              <a href="https://kurs-market.com/categories/psihologiya_otnosheniy">Психология отношений
                <span>(46)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="187">
              <a href="https://kurs-market.com/categories/emocii">Эмоции
                <span>(12)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="190">
              <a href="https://kurs-market.com/categories/psihosomatika">Психосоматика
                <span>(15)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="191">
              <a href="https://kurs-market.com/categories/psihologiya">Общая психология
                <span>(75)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="484">
              <a href="https://kurs-market.com/categories/konsultirovanie">Консультирование
                <span>(28)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="485">
              <a href="https://kurs-market.com/categories/detskaya-psihologiya">Детская психология
                <span>(34)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="486">
              <a href="https://kurs-market.com/categories/klinicheskaya-psihologiya">Клиническая психология
                <span>(12)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="487">
              <a href="https://kurs-market.com/categories/seksologiya">Сексология
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="488">
              <a href="https://kurs-market.com/categories/art-terapiya">Арт-терапия
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="489">
              <a href="https://kurs-market.com/categories/neyropsihologiya">Нейропсихология
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="490">
              <a href="https://kurs-market.com/categories/kognitivno-povedencheskaya-terapiya">Когнитивно-поведенческая терапия
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="491">
              <a href="https://kurs-market.com/categories/geshtalt-terapiya">Гештальт-терапия
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="492">
              <a href="https://kurs-market.com/categories/vygoranie">Выгорание
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="493">
              <a href="https://kurs-market.com/categories/konfliktologiya">Конфликтология
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="494">
              <a href="https://kurs-market.com/categories/gipnoterapiya">Гипнотерапия
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="495">
              <a href="https://kurs-market.com/categories/psihodiagnostika">Психодиагностика
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="496">
              <a href="https://kurs-market.com/categories/psihoanaliz">Психоанализ
                <span>(8)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="44" class="root-has-children">
          <a href="https://kurs-market.com/categories/uhod_za_detmi">Развитие и уход за детьми
            <span>(91)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/uhod_za_detmi"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="45">
              <a href="https://kurs-market.com/categories/grudnoe_vskarmlivanie">Грудное вскармливание
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="65">
              <a href="https://kurs-market.com/categories/logopediya">Логопедия
                <span>(43)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="104">
              <a href="https://kurs-market.com/categories/uhod_za_novorojdennymi">Уход за новорожденными
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="105">
              <a href="https://kurs-market.com/categories/vospitanie_detey">Воспитание детей
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="132">
              <a href="https://kurs-market.com/categories/drugoe-132">Другое
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="224">
              <a href="https://kurs-market.com/categories/razvitie_navykov">Развитие навыков
                <span>(11)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="419" class="root-has-children">
          <a href="https://kurs-market.com/categories/gumanitarnye-nauki">Гуманитарные науки
            <span>(206)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/gumanitarnye-nauki"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="22" class="has-children">
              <a href="https://kurs-market.com/categories/iskusstvo">Искусство
                <span>(101)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/iskusstvo"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="24">
                  <a href="https://kurs-market.com/categories/akterskoe_masterstvo">Актерское мастерство
                    <span>(3)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="82">
                  <a href="https://kurs-market.com/categories/pisatelskoe_masterstvo">Писательское мастерство
                    <span>(4)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="413">
                  <a href="https://kurs-market.com/categories/kino-1">Кино
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="222">
                  <a href="https://kurs-market.com/categories/istoriya_iskusstva">История искусства
                    <span>(6)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="364">
              <a href="https://kurs-market.com/categories/iskusstvovedenie">Искусствоведение
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="420">
              <a href="https://kurs-market.com/categories/filosofiya">Философия
                <span>(18)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="421">
              <a href="https://kurs-market.com/categories/arhitektura-3">Архитектура
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="422">
              <a href="https://kurs-market.com/categories/literatura-2">Литература
                <span>(27)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="424">
              <a href="https://kurs-market.com/categories/history">История
                <span>(41)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="425">
              <a href="https://kurs-market.com/categories/religiovedenie">Религиоведение
                <span>(7)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="427" class="root-has-children">
          <a href="https://kurs-market.com/categories/socialnye-nauki">Право, политика и юриспруденция
            <span>(57)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/socialnye-nauki"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="117">
              <a href="https://kurs-market.com/categories/yurisprudenciya">Право
                <span>(26)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="428">
              <a href="https://kurs-market.com/categories/politika">Политика
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="429">
              <a href="https://kurs-market.com/categories/yurisprudenciya">Юриспруденция
                <span>(28)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="120" class="root-has-children">
          <a href="https://kurs-market.com/categories/media">Медиа
            <span>(257)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/media"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="281">
              <a href="https://kurs-market.com/categories/rabota_so_zvukom">Работа со звуком
                <span>(36)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="32">
              <a href="https://kurs-market.com/categories/bloggerstvo">Блогинг
                <span>(15)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="289" class="has-children">
              <a href="https://kurs-market.com/categories/video">Видео
                <span>(34)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/video"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="290">
                  <a href="https://kurs-market.com/categories/operatorskoe_masterstvo">Операторское мастерство
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="291">
                  <a href="https://kurs-market.com/categories/sozdanie_speceffektov">Создание спецэффектов
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="336">
                  <a href="https://kurs-market.com/categories/videomontaj">Видеомонтаж
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="337">
                  <a href="https://kurs-market.com/categories/after_effects">After Effects
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="148">
                  <a href="https://kurs-market.com/categories/videografiya">Видеооператор
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="292">
              <a href="https://kurs-market.com/categories/prodyusirovanie">Продюсирование
                <span>(23)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="53">
              <a href="https://kurs-market.com/categories/diktorskoe_iskusstvo">Комментаторы, дикторы
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="90">
              <a href="https://kurs-market.com/categories/rejissura">Режиссура
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="353">
              <a href="https://kurs-market.com/categories/organizaciya_meropriyatiy">Организация мероприятий
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="109" class="has-children">
              <a href="https://kurs-market.com/categories/fotosemka">Фотография
                <span>(64)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/fotosemka"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="343">
                  <a href="https://kurs-market.com/categories/fotosemka">Фотосъемка
                    <span>(12)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="143">
                  <a href="https://kurs-market.com/categories/obrabotka_foto">Обработка фото
                    <span>(2)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="390">
              <a href="https://kurs-market.com/categories/izdatelskoe-delo">Издательское дело
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="140">
              <a href="https://kurs-market.com/categories/drugoe-140">Другое
                <span>(34)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="157">
              <a href="https://kurs-market.com/categories/jurnalistika">Журналистика
                <span>(14)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="221">
              <a href="https://kurs-market.com/categories/scenarnoe_masterstvo">Сценарное мастерство
                <span>(20)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="228">
              <a href="https://kurs-market.com/categories/redaktor">Редактор
                <span>(9)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="55" class="root-has-children">
          <a href="https://kurs-market.com/categories/muzyka">Музыка
            <span>(79)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/muzyka"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="37">
              <a href="https://kurs-market.com/categories/vokal">Вокал
                <span>(13)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="52">
              <a href="https://kurs-market.com/categories/didjeing">Диджеинг
                <span>(24)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="56">
              <a href="https://kurs-market.com/categories/muzykalnye_instrumenty">Гитара
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="344">
              <a href="https://kurs-market.com/categories/elektronnaya_muzyka">Электронная музыка
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="345">
              <a href="https://kurs-market.com/categories/muzykalnaya_gramotnost">Музыкальная грамотность
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="136">
              <a href="https://kurs-market.com/categories/drugoe-136">Другое
                <span>(18)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="33" class="root-has-children">
          <a href="https://kurs-market.com/categories/sport">Спорт и фитнес
            <span>(55)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/sport"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="34">
              <a href="https://kurs-market.com/categories/bodibilding">Бодибилдинг
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="41">
              <a href="https://kurs-market.com/categories/gimnastika">Гимнастика
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="57">
              <a href="https://kurs-market.com/categories/yoga">Йога
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="63">
              <a href="https://kurs-market.com/categories/crossfit">Кроссфит
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="348">
              <a href="https://kurs-market.com/categories/kibersport">Киберспорт
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="102">
              <a href="https://kurs-market.com/categories/tancy">Танцы
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="107">
              <a href="https://kurs-market.com/categories/fitnes">Фитнес
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="363">
              <a href="https://kurs-market.com/categories/futbol">Футбол
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="119">
              <a href="https://kurs-market.com/categories/gornolyjnyy-sport">Горнолыжный спорт
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="162">
              <a href="https://kurs-market.com/categories/shahmaty">Шахматы
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="163">
              <a href="https://kurs-market.com/categories/plavanie">Плавание
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="430">
              <a href="https://kurs-market.com/categories/edinoborstva">Единоборства
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="195">
              <a href="https://kurs-market.com/categories/plastika">Пластика
                <span>(3)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="121" class="root-has-children">
          <a href="https://kurs-market.com/categories/effektivnost">Саморазвитие
            <span>(321)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/effektivnost"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="29" class="has-children">
              <a href="https://kurs-market.com/categories/astrologiya">Астрология и эзотерика
                <span>(9)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/astrologiya"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="74">
                  <a href="https://kurs-market.com/categories/numerologiya">Нумерология
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="417">
                  <a href="https://kurs-market.com/categories/fen-shuy">Фэн-шуй
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="193">
                  <a href="https://kurs-market.com/categories/astrologiya">Астрология
                    <span>(2)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="297">
              <a href="https://kurs-market.com/categories/razvitie_karery">Развитие карьеры
                <span>(42)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="72">
              <a href="https://kurs-market.com/categories/nlp">НЛП
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="76">
              <a href="https://kurs-market.com/categories/oratorskoe_iskusstvo">Публичные выступления
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="89">
              <a href="https://kurs-market.com/categories/razvitie_pamyati">Развитие памяти
                <span>(13)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="94">
              <a href="https://kurs-market.com/categories/skorochtenie">Скорочтение
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="354">
              <a href="https://kurs-market.com/categories/kommunikaciya_s_lyudmi">Коммуникация с людьми
                <span>(24)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="355">
              <a href="https://kurs-market.com/categories/sozdanie_prezentaciy">Создание презентаций
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="356">
              <a href="https://kurs-market.com/categories/finansovaya_gramotnost">Финансовая грамотность
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="101">
              <a href="https://kurs-market.com/categories/taym-menedjment">Тайм-менеджмент
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="365">
              <a href="https://kurs-market.com/categories/estestvennye_nauki">О науке
                <span>(15)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="141">
              <a href="https://kurs-market.com/categories/drugoe-141">Другое
                <span>(30)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="188">
              <a href="https://kurs-market.com/categories/kouching">Коучинг
                <span>(17)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="189">
              <a href="https://kurs-market.com/categories/proforientaciya">Личная эффективность
                <span>(54)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="192">
              <a href="https://kurs-market.com/categories/kommunikaciya">Риторика
                <span>(11)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="215">
              <a href="https://kurs-market.com/categories/kompyuternaya_gramotnost">Компьютерная грамотность
                <span>(56)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="229">
              <a href="https://kurs-market.com/categories/stenografiya">Стенография
                <span>(1)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="287" class="root-has-children">
          <a href="https://kurs-market.com/categories/stroitelstvo-287">Строительство и ремонт
            <span>(26)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/stroitelstvo-287"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="164" class="has-children">
              <a href="https://kurs-market.com/categories/bytovye_uslugi">Ремонт
                <span>(10)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/bytovye_uslugi"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="165">
                  <a href="https://kurs-market.com/categories/remont">Ремонт квартир
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="166">
                  <a href="https://kurs-market.com/categories/remont_bytovoy_tehniki">Ремонт бытовой техники
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="173" class="has-children">
                  <a href="https://kurs-market.com/categories/avtomobili">Автомобили
                  </a>
                  <ul class="header__dropdown">
                    <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/avtomobili"><b>Все курсы по теме</b></a></li>
                    <li data-depth="3" data-parent-category-link="http://test.com?depth=3" data-id="174">
                      <a href="https://kurs-market.com/categories/avtoelektrika">Автоэлектрика
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="426" class="has-children">
              <a href="https://kurs-market.com/categories/stroitelstvo">Строительство
                <span>(17)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/stroitelstvo"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="288">
                  <a href="https://kurs-market.com/categories/smetchiki">Сметчики
                    <span>(3)</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="30" class="root-has-children">
          <a href="https://kurs-market.com/categories/dosug">Хобби и увлечения
            <span>(606)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/dosug"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="4" class="has-children">
              <a href="https://kurs-market.com/categories/kulinariya">Кулинария
                <span>(161)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/kulinariya"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="21">
                  <a href="https://kurs-market.com/categories/vypechka">Выпечка
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="59">
                  <a href="https://kurs-market.com/categories/karving">Карвинг
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="123">
                  <a href="https://kurs-market.com/categories/drugie-kursy-po-kulinarii-123">Другое
                    <span>(1)</span>
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="170" class="has-children">
                  <a href="https://kurs-market.com/categories/konditerskoe_masterstvo">Кондитерское мастерство
                  </a>
                  <ul class="header__dropdown">
                    <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/konditerskoe_masterstvo"><b>Все курсы по теме</b></a></li>
                    <li data-depth="3" data-parent-category-link="http://test.com?depth=3" data-id="368">
                      <a href="https://kurs-market.com/categories/torty">Торты
                      </a>
                    </li>
                    <li data-depth="3" data-parent-category-link="http://test.com?depth=3" data-id="369">
                      <a href="https://kurs-market.com/categories/pirojnye">Пирожные
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="38">
              <a href="https://kurs-market.com/categories/sadovodstvo">Садоводство
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="51">
              <a href="https://kurs-market.com/categories/fashion-dizayn">Дизайн одежды
                <span>(68)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="70">
              <a href="https://kurs-market.com/categories/mylovarenie">Мыловарение
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="78">
              <a href="https://kurs-market.com/categories/origami">Оригами
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="80">
              <a href="https://kurs-market.com/categories/ohota">Охота
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="81">
              <a href="https://kurs-market.com/categories/rybalka">Рыбалка
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="88">
              <a href="https://kurs-market.com/categories/rezba-po-derevu">Резьба по дереву
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="346">
              <a href="https://kurs-market.com/categories/nastolnye_igry">Настольные игры
                <span>(8)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="91">
              <a href="https://kurs-market.com/categories/risovanie">Рисование
                <span>(199)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="96">
              <a href="https://kurs-market.com/categories/vinnoe_delo">Сомелье
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="359">
              <a href="https://kurs-market.com/categories/risunok">Рисунок
                <span>(69)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="110">
              <a href="https://kurs-market.com/categories/fokusy">Фокусы
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="418" class="has-children">
              <a href="https://kurs-market.com/categories/rukodelie-1">Рукоделие
                <span>(38)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/rukodelie-1"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="31">
                  <a href="https://kurs-market.com/categories/biseropletenie">Бисероплетение
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="95">
                  <a href="https://kurs-market.com/categories/skrab-buking">Скраб-букинг
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="208">
                  <a href="https://kurs-market.com/categories/vyazanie">Вязание
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="213">
                  <a href="https://kurs-market.com/categories/vyshivanie">Вышивание
                  </a>
                </li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="226">
                  <a href="https://kurs-market.com/categories/sozdanie_ukrasheniy">Создание украшений
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="172">
              <a href="https://kurs-market.com/categories/dressirovka_sobak">Дрессировка собак
                <span>(2)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="175">
              <a href="https://kurs-market.com/categories/barista">Бариста
                <span>(3)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="176">
              <a href="https://kurs-market.com/categories/barmen">Бармен
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="196" class="has-children">
              <a href="https://kurs-market.com/categories/18">18+
                <span>(1)</span>
              </a>
              <ul class="header__dropdown">
                <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/18"><b>Все курсы по теме</b></a></li>
                <li data-depth="2" data-parent-category-link="http://test.com?depth=2" data-id="197">
                  <a href="https://kurs-market.com/categories/eroticheskiy_massaj">Эротический массаж
                  </a>
                </li>
              </ul>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="206">
              <a href="https://kurs-market.com/categories/shite">Кройка и шитье
                <span>(33)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="217">
              <a href="https://kurs-market.com/categories/floristika-217">Флористика
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="225">
              <a href="https://kurs-market.com/categories/kalligrafiya-225">Каллиграфия
                <span>(1)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="449" class="root-has-children">
          <a href="https://kurs-market.com/categories/professionalnaya-perepodgotovka">Профессиональная переподготовка
            <span>(674)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/professionalnaya-perepodgotovka"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="450">
              <a href="https://kurs-market.com/categories/pedagogika-">Педагогика
                <span>(380)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="451">
              <a href="https://kurs-market.com/categories/fizicheskaya-kultura-i-sport">Физическая культура и спорт
                <span>(82)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="452">
              <a href="https://kurs-market.com/categories/psihologiya">Психология
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="453">
              <a href="https://kurs-market.com/categories/menedjment">Менеджмент
                <span>(28)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="454">
              <a href="https://kurs-market.com/categories/gosudarstvennoe-i-municipalnoe-upravlenie">Государственное и муниципальное управление
                <span>(25)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="455">
              <a href="https://kurs-market.com/categories/rabochie-professii-i-doljnosti-slujashchih">Рабочие профессии и должности служащих
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="456">
              <a href="https://kurs-market.com/categories/buhgalterskoe-delo">Бухгалтерское дело
                <span>(26)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="457">
              <a href="https://kurs-market.com/categories/ocenochnaya-deyatelnost">Оценочная деятельность
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="458">
              <a href="https://kurs-market.com/categories/deloproizvodstvo">Делопроизводство
                <span>(10)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="459">
              <a href="https://kurs-market.com/categories/kadastrovaya-deyatelnost">Кадастровая деятельность
                <span>(4)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="460">
              <a href="https://kurs-market.com/categories/informacionnye-tehnologii-i-bezopasnost">Информационные технологии и безопасность
                <span>(7)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="461">
              <a href="https://kurs-market.com/categories/neftehimicheskaya-i-himicheskaya-promyshlennost">Нефтехимическая и химическая промышленность
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="462">
              <a href="https://kurs-market.com/categories/medicina">Медицина
                <span>(66)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="463">
              <a href="https://kurs-market.com/categories/finansy">Финансы
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="464">
              <a href="https://kurs-market.com/categories/yurisprudenciya-">Юриспруденция
                <span>(5)</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-depth="0" data-id="465" class="root-has-children">
          <a href="https://kurs-market.com/categories/povyshenie-kvalifikacii">Повышение квалификации
            <span>(1812)</span>
          </a>
          <ul class="header__dropdown">
            <li class="parent-li-with-all-courses"><a href="https://kurs-market.com/categories/povyshenie-kvalifikacii"><b>Все курсы по теме</b></a></li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="466">
              <a href="https://kurs-market.com/categories/fizicheskaya-kultura-i-sport-">Физическая культура и спорт
                <span>(195)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="467">
              <a href="https://kurs-market.com/categories/pedagogika-">Педагогика
                <span>(696)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="468">
              <a href="https://kurs-market.com/categories/gosudarstvennoe-i-municipalnoe-upravlenie-">Государственное и муниципальное управление
                <span>(109)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="469">
              <a href="https://kurs-market.com/categories/psihologiya-">Психология
                <span>(33)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="470">
              <a href="https://kurs-market.com/categories/neftehimicheskaya-i-himicheskaya-promyshlennost-">Нефтехимическая и химическая промышленность
                <span>(37)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="471">
              <a href="https://kurs-market.com/categories/informacionnye-tehnologii-i-bezopasnost-">Информационные технологии и безопасность
                <span>(22)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="472">
              <a href="https://kurs-market.com/categories/rabochie-professii-i-doljnosti-slujashchih-">Рабочие профессии и должности служащих
                <span>(27)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="473">
              <a href="https://kurs-market.com/categories/veterinariya-">Ветеринария
                <span>(19)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="474">
              <a href="https://kurs-market.com/categories/medicina-">Медицина
                <span>(559)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="475">
              <a href="https://kurs-market.com/categories/yurisprudenciya-">Юриспруденция
                <span>(12)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="476">
              <a href="https://kurs-market.com/categories/menedjment-">Менеджмент
                <span>(75)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="477">
              <a href="https://kurs-market.com/categories/finansy-">Финансы
                <span>(6)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="478">
              <a href="https://kurs-market.com/categories/kadastrovaya-deyatelnost-478">Кадастровая деятельность
                <span>(5)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="479">
              <a href="https://kurs-market.com/categories/buhgalterskoe-delo-">Бухгалтерское дело
                <span>(9)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="480">
              <a href="https://kurs-market.com/categories/ekonomika-">Экономика
                <span>(1)</span>
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="481">
              <a href="https://kurs-market.com/categories/ocenochnaya-deyatelnost-">Оценочная деятельность
              </a>
            </li>
            <li data-depth="1" data-parent-category-link="http://test.com?depth=1" data-id="482">
              <a href="https://kurs-market.com/categories/deloproizvodstvo-">Делопроизводство
                <span>(7)</span>
              </a>
            </li>
          </ul>
        </li>
        <li id="dropdown__close-btn">свернуть</li>
      </ul>
      <div class="catalog-close-btn"><img src="/images/ratings-close.svg" alt="close catalog" @click.prevent="$emit('close-nav-menu')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogMenu",
  props: {
    catalogClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
