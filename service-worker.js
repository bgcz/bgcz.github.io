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
    "revision": "97495e7c9bb25caea039efd381785b74"
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
    "url": "assets/js/10.57623b4f.js",
    "revision": "f2057a315c0ddd5996a57481f7ea38fc"
  },
  {
    "url": "assets/js/11.bbc37fd9.js",
    "revision": "5e18201792ae43a96c722693b66221c2"
  },
  {
    "url": "assets/js/12.67009e39.js",
    "revision": "cf10db4f5e02d32f2fa99a85c69955a0"
  },
  {
    "url": "assets/js/13.0a757e3a.js",
    "revision": "d8a194f3ac697c7290e2887c2d0989e1"
  },
  {
    "url": "assets/js/14.b8d3ed9f.js",
    "revision": "69d965126994bffe9e88c106932b89db"
  },
  {
    "url": "assets/js/15.4267cfcd.js",
    "revision": "b9ec65e6557c8d566f65eacc99546bce"
  },
  {
    "url": "assets/js/16.7f08c927.js",
    "revision": "878685c40e3e879897ac51001397a3e6"
  },
  {
    "url": "assets/js/17.0d092f0a.js",
    "revision": "3f1f09b4541349d15e48db4371b67408"
  },
  {
    "url": "assets/js/2.cd44d71a.js",
    "revision": "c2612e60d22862eca4e882202701b56b"
  },
  {
    "url": "assets/js/3.7cd0dc71.js",
    "revision": "83e7525e50ee80a53e51982ffbda0dd4"
  },
  {
    "url": "assets/js/4.70661e2b.js",
    "revision": "0cc6583fa42313f46e184046d677f97d"
  },
  {
    "url": "assets/js/5.c1585b30.js",
    "revision": "191fc63405e11dd51d51e2a6340f6303"
  },
  {
    "url": "assets/js/6.b4a740cd.js",
    "revision": "2ad2341944ce839327791c97c193274d"
  },
  {
    "url": "assets/js/7.d91708e4.js",
    "revision": "67ad7ab4c2eae26f46c07980be5f9831"
  },
  {
    "url": "assets/js/8.5039df05.js",
    "revision": "5601c7b1a19bb541dc688b7931cfd488"
  },
  {
    "url": "assets/js/9.8659375c.js",
    "revision": "e09249b7c7fabfed563c83fb7e73508d"
  },
  {
    "url": "assets/js/app.c3ca5c16.js",
    "revision": "2afa07d5f20f0cffcd8cba3a90858549"
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
    "revision": "0ffec0459bfbf21607df1dbf532e0a5f"
  },
  {
    "url": "home/2018/1015.html",
    "revision": "f208c01fbb7f2e4636be71401b71e7f9"
  },
  {
    "url": "home/2018/1025.html",
    "revision": "5cfdb9ca2ff91c53bae1c601756bc2e6"
  },
  {
    "url": "home/2018/1027.html",
    "revision": "8a507616a5b25c5866549dbc13ad05e0"
  },
  {
    "url": "home/2018/1031.html",
    "revision": "a87bc796d7b6dbb7166c3a1964c8eda8"
  },
  {
    "url": "home/2018/1101.html",
    "revision": "08dc0ac15c48faf991e1f116a5b4ac3d"
  },
  {
    "url": "home/2019/0813.html",
    "revision": "a9ae53feb102b10832e096c13d5e7986"
  },
  {
    "url": "home/index.html",
    "revision": "a182fb42e0e9740aaa0c7636f1b8d51e"
  },
  {
    "url": "index.html",
    "revision": "e633196d5d4c6abdd6a44e24396571c4"
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
