/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe0045912f1934602130b5ac37df9c61"
  },
  {
    "url": "a.png",
    "revision": "f42f392850b521b12d3df34b2fe036f4"
  },
  {
    "url": "assets/css/0.styles.82e12f40.css",
    "revision": "962ecaffefdee63d4207f89a0848c7f2"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.674f50d2.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/img/404.63c280e2.png",
    "revision": "63c280e2da2ff2c4d854f29c5517826c"
  },
  {
    "url": "assets/img/fontawesome-webfont.912ec66d.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3574343.js",
    "revision": "9d5e9b5f34c945879e900f132a8bc76a"
  },
  {
    "url": "assets/js/11.b9d86777.js",
    "revision": "c2862bb34cabbefeff753960dfa85f5c"
  },
  {
    "url": "assets/js/12.fd44c280.js",
    "revision": "fde8011f4b351a4a10b20278f8b7d608"
  },
  {
    "url": "assets/js/13.caee8ef1.js",
    "revision": "f7452c0c6ef59a91a941cc17d634b376"
  },
  {
    "url": "assets/js/14.88279781.js",
    "revision": "d1d74527d4dcbbe9669707ceff03e2ff"
  },
  {
    "url": "assets/js/15.8e8c362d.js",
    "revision": "dd92d201717daff0afd04e6d1dab9827"
  },
  {
    "url": "assets/js/16.0e8f29bc.js",
    "revision": "d9408e9d65947591d9630aa8274e3c75"
  },
  {
    "url": "assets/js/17.6198db95.js",
    "revision": "ec5442730f15d3cbba0f4795af7e8b77"
  },
  {
    "url": "assets/js/18.a5a557a5.js",
    "revision": "7482fd3a33fb74c1dbd71df899660b11"
  },
  {
    "url": "assets/js/2.6b2843cc.js",
    "revision": "da6d9c028f70bff3522d8af0367dd864"
  },
  {
    "url": "assets/js/3.5068bd76.js",
    "revision": "c652f903a042f648f30690d4a6365e17"
  },
  {
    "url": "assets/js/4.222058c9.js",
    "revision": "0b589a20a7ff6562c057b2a456307bad"
  },
  {
    "url": "assets/js/5.719e341e.js",
    "revision": "7f1862e68e913cad6990364137d803a0"
  },
  {
    "url": "assets/js/6.d571d5f3.js",
    "revision": "1d1b8bb8ddc0abd88c0caf826f0730fb"
  },
  {
    "url": "assets/js/7.b477ec37.js",
    "revision": "64e1e1215aaeb563f6235874a31463f2"
  },
  {
    "url": "assets/js/8.88951831.js",
    "revision": "bd4f81832bf7218da63575bf0dec5343"
  },
  {
    "url": "assets/js/9.70711a8e.js",
    "revision": "cba9352e8a814287f9c6cb5ecfc309bc"
  },
  {
    "url": "assets/js/app.5ae52406.js",
    "revision": "ab50f20b04d26a26af79010613a6e959"
  },
  {
    "url": "b.png",
    "revision": "5d74cca9d279a315b5ebba0f6f818fb3"
  },
  {
    "url": "baidu_verify_wsb5zItjDp.html",
    "revision": "9e8fde33e02865a9e43a9c19c971b787"
  },
  {
    "url": "bd.jpg",
    "revision": "cdb888f2685a2b636a5fe7075cd64083"
  },
  {
    "url": "bgcz.png",
    "revision": "1250a4366c7606162a11a51634de3063"
  },
  {
    "url": "home/2018/1011.html",
    "revision": "4bc1a83d594c91e2e9ff5fdc5a8b4859"
  },
  {
    "url": "home/2018/1015.html",
    "revision": "7a4d3107e08ce253c99061b4e57d3b14"
  },
  {
    "url": "home/2018/1025.html",
    "revision": "dcc7457dc13bfbe647de12ff9719941b"
  },
  {
    "url": "home/2018/1027.html",
    "revision": "be34e31826e89c9d2805c0d25ec51ce2"
  },
  {
    "url": "home/2018/1031.html",
    "revision": "578a22fd22c6dee2abf00cff2c274b82"
  },
  {
    "url": "home/2018/1101.html",
    "revision": "673148f5cb7c535b84615dabfef34a56"
  },
  {
    "url": "home/2019/0813.html",
    "revision": "10ecdb399e58d2f3c4a3fa34a66955a8"
  },
  {
    "url": "home/2020/0509.html",
    "revision": "ff7e986349e373e02e17d6847f7c4945"
  },
  {
    "url": "home/index.html",
    "revision": "1d06bf0984e688bb78ea5d810f1c6439"
  },
  {
    "url": "index.html",
    "revision": "d55b6e97c6551a25ecff924e0848c0ab"
  },
  {
    "url": "logo.png",
    "revision": "bcc153447506ce4f9f515f580aea1a66"
  },
  {
    "url": "qr.png",
    "revision": "d916b691be1778ee2c12b20884c3eba4"
  },
  {
    "url": "swiper/swiper.css",
    "revision": "b44faa9cd998f9f1219fd467de79ec4f"
  },
  {
    "url": "swiper/swiper.js",
    "revision": "a8277c769db873f044f44a9ab97fc416"
  },
  {
    "url": "xyqs.jpg",
    "revision": "cb669184cba5b7b644fabd908ea954da"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
