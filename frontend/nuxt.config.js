export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Агрегатор-отзовик всех онлайн-курсов от лучших школ | Курс Маркет',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'kurs-market.com' },
      { property: 'og:url', content: 'kurs-market.com' },
      { name: 'pmail-verification', content: '92c5eef6d2b58ba87c47f34aba129d85' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap&subset=cyrillic'
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.js',
        type: 'text/javascript',
      },
      {
        src: '/js/bootstrap.bundle.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js',
        type: 'text/javascript',
      },
      {
        src: '/js/owl.carousel.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/web.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.maskedinput.js',
        type: 'text/javascript',
      },
      {
        src: '/js/scroll.js',
        type: 'text/javascript',
      },
      {
        src: '/js/clipboard.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/index.js',
        type: 'text/javascript',
      },
      {
        src: '/js/datetimepicker.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/add.custom.js',
        type: 'text/javascript',
      },
    //   {
    //     src: 'https://www.googletagmanager.com/gtag/js?id=UA-208584931-1',
    //     type: 'text/javascript',
    //     async: true
    //   },
    //   {
    //     hid: 'gtm-script',
    //     innerHTML: `
    //       window.dataLayer = window.dataLayer || [];
    //       function gtag() {
    //         dataLayer.push(arguments);
    //     }
    //
    //     gtag('js', new Date());
    //     gtag('config', 'UA-208584931-1');
    //     setTimeout(function () {
    //         gtag('event', location.pathname, {'event_category': 'Новый посетитель'});
    //     }, 15000);
    //     `
    //   },
    //   {
    //     hid: 'gtm-script2',
    //     innerHTML: `
    //       !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1376138-5J7Ou"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
    //     `
    //   },
    //   {
    //     hid: 'mail-ru-counter',
    //     innerHTML: `
    //         var _tmr = window._tmr || (window._tmr = []);
    //     _tmr.push({id: "3248616", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
    //     (function (d, w, id) {
    //         if (d.getElementById(id)) return;
    //         var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
    //         ts.src = "https://top-fwz1.mail.ru/js/code.js";
    //         var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
    //         if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    //     })(document, window, "topmailru-code");
    //       `
    //   },
    //   {
    //     hid: 'yandex-metrica',
    //     innerHTML: `
    //         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    //     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    // (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    //
    // ym(54273628, "init", {
    //     clickmap:true,
    //     trackLinks:true,
    //     accurateTrackBounce:true,
    //     webvisor:true
    // });
    //       `
    //   },
      // {
      //   src: 'https://mc.yandex.ru/metrika/tag.js',
      //   type: 'text/javascript'
      // },
    ]
  },

  loading: {
      color: "#E66366"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/datetimepicker.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/scroll.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/index.css',
    '@/assets/css/web.css',
    '@/assets/css/main.css',
    '@/assets/css/buy_popup.css',
    '@/assets/css/ratings.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router',
  ],
  routerModule: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
  ],

  axios: {
    baseURL: process.env.API_URL,
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'api/login', method: 'post', propertyName: 'meta.token'},
          logout: {url: 'api/logout', method: 'post'},
          user: {url: 'api/user', method: 'get'},
        }
      }
    }
  },

  proxy: {
    // '/api': { target: process.env.API_URL, pathRewrite: {'^/api': '/'}, changeOrigin: true }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  },
  server: {
    port: 4500,
  }
}
