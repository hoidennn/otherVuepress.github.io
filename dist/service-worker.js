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
    "revision": "b2bf51ae506b284547f602474ca1d978"
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
    "url": "assets/js/13.d3059b5b.js",
    "revision": "e6f24b5c2efd47346c6c52e9a6d160a6"
  },
  {
    "url": "assets/js/14.aab3276d.js",
    "revision": "58e4964a4e22e7429578d8dcdcf8746f"
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
    "url": "assets/js/app.2e29b80f.js",
    "revision": "47c456b685a56e868e8550b43000d809"
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
    "revision": "8604e38756e01344707ca429251f3758"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2e389adce5dee4874dc3db3044e9a61e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "83d090dd75bb20d0741ac1fd7af19d72"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c334dfd4f90c5c91a8b6a5b0fc727b91"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5489cf1b2fa830631807005d61bbd13d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "204917f5511c67a1c013d3b3819914fa"
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
    "revision": "9125a30a4e9a29d4630244ef62195ccc"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0c540caf804376f24be03269e7127b9d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fb6746a28971cdba02665e0db4f9d6ad"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b3cc8da5326b6556c8095f326318a6f0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "abde5dcf2aa5545d292949810c94f665"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "282163e661eeeb2462b52ee7f6a8ee6a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0b7c37b799482782f477b26c94305c4f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8b5d0f06394073558faeda888559687a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0526261bdeff837000ba2029c77b977d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3d34e47c8cdd63459c364613e407ff50"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "86f43b288ca86ce71b83b578e59f8f47"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e18c39c4d5332e602a5f500152d96ebd"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc990c433d60769366f88ca65a201deb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c654c14486197c5e74a5c494a44cfda0"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ca427424b6fb7ceee2351d47ad633cc0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f516f6c6ac4f98b3cb1ffe2b3c4ad2e4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "92be993ab375e59994fae6c6d1ece94b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d04e408266cf8a421f93f4156df6ffc9"
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
