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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fad69528507a34d9db6f83063698732b"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.79a44560.js",
    "revision": "68e21a8b800caa000b89214f35b6becf"
  },
  {
    "url": "assets/js/18.54f12e55.js",
    "revision": "0d28aa7b2977ece511f2b2193ad79b44"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.6f8d80c2.js",
    "revision": "733ae6ee0851888e590ab3b1a9d10bf2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c95af3263513a7f786bd27792754b70f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f3068b800d147ae5af7a63be3c88d0b3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7042d48c0dbe8e63f684834069b35c6f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "819be2c36fe17e9b85ed7ab2027a2de0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "068c5ec4f2e584bc1651897d049820c0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cede3a6a6b451b3706d7a650068dafa0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "47b9db821c501ec9a67d034446ca7e63"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "738f55061fd487c050fb5f9afa203131"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2b5152fdde08b754cae823bb7b9a1017"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ff894bd83472ce83a387e0fa21624d51"
  },
  {
    "url": "tags/js/index.html",
    "revision": "54d94f2e343ece28c7ac8a444f40aa76"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "43a05003bd8a8ef4e2bae82753f7b5b6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1ea6c4bd5f9a42130b393208dedf9fa7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "44ced1c327bc6484d6618275df2dc825"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "92ae0f10a80afe4da9031b1ddeb61ed9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a398d41f5b31b2a7672f602102fb8ed1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e6a2026e15110db171a337c1d000a383"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a2342d61bdc3737624a325cff8bd023b"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb93adb1323cbfd033a882e12b18dd72"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "543e35694b04fa24d689e07783c4b500"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "73b9952576d9ad8769c96e2ddc839133"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b3651b054235fb20427cd1dbccd6cf21"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2d964329f0c703058752e3911f4fa05d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1d50de7e731145f8096a47f3e6baa083"
  }
].concat(self.__precacheManifest || []);
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
