if (!self.define) {
    let e, s = {};
    const i = (i,l)=>(i = new URL(i + ".js",l).href,
    s[i] || new Promise((s=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = i,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = i,
            importScripts(i),
            s()
    }
    )).then((()=>{
        let e = s[i];
        if (!e)
            throw new Error(`Module ${i} didn’t register its module`);
        return e
    }
    )));
    self.define = (l,n)=>{
        const r = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[r])
            return;
        let c = {};
        const u = e=>i(e, r)
          , o = {
            module: {
                uri: r
            },
            exports: c,
            require: u
        };
        s[r] = Promise.all(l.map((e=>o[e] || u(e)))).then((e=>(n(...e),
        c)))
    }
}
define(["./workbox-5361f2d4"], (function(e) {
    "use strict";
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "css/aes-aa22589c.css",
        revision: null
    }, {
        url: "css/el-button-01ce30a9.css",
        revision: null
    }, {
        url: "css/el-input-f8de3737.css",
        revision: null
    }, {
        url: "css/el-message-192a9c59.css",
        revision: null
    }, {
        url: "css/el-progress-fc13a5bd.css",
        revision: null
    }, {
        url: "css/el-table-column-be1751ac.css",
        revision: null
    }, {
        url: "css/el-tag-856368e3.css",
        revision: null
    }, {
        url: "css/index-49061b3d.css",
        revision: null
    }, {
        url: "css/index-6708fc0e.css",
        revision: null
    }, {
        url: "css/index-74cea639.css",
        revision: null
    }, {
        url: "css/ua-5e4fec17.css",
        revision: null
    }, {
        url: "iframe/index.html",
        revision: "1895fd8113bbfa7249bd50c996c3df98"
    }, {
        url: "iframe/static/editor.js",
        revision: "cccd105a931139492900e64d9344fa7d"
    }, {
        url: "index.html",
        revision: "882cb4269f5402195bede6ede29647fc"
    }, {
        url: "js/_commonjsHelpers-26303f2a.js",
        revision: null
    }, {
        url: "js/aes-46f16b05.js",
        revision: null
    }, {
        url: "js/api-d836c0d5.js",
        revision: null
    }, {
        url: "js/el-button-e3b4a1de.js",
        revision: null
    }, {
        url: "js/el-input-22ab3590.js",
        revision: null
    }, {
        url: "js/el-message-87050c21.js",
        revision: null
    }, {
        url: "js/el-progress-534612ad.js",
        revision: null
    }, {
        url: "js/el-table-column-636650b7.js",
        revision: null
    }, {
        url: "js/el-tag-24e49e2d.js",
        revision: null
    }, {
        url: "js/el-tooltip-4ed993c7.js",
        revision: null
    }, {
        url: "js/index-3e54982d.js",
        revision: null
    }, {
        url: "js/index-b0db0929.js",
        revision: null
    }, {
        url: "js/index-f4b1b3ff.js",
        revision: null
    }, {
        url: "js/tvbox-93cfa79f.js",
        revision: null
    }, {
        url: "js/ua-a4fcbaf2.js",
        revision: null
    }, {
        url: "loading/loading.css",
        revision: "97fefeccd8990346f6e8ae49101507fa"
    }, {
        url: "loading/loading.min.css",
        revision: "545e4423de4c59bc4303fc592da53790"
    }, {
        url: "registerSW.js",
        revision: "1872c500de691dce40960bb85481de07"
    }, {
        url: "images/icon/48.png",
        revision: "bdeb2b915105f31570a75f04717d4ec3"
    }, {
        url: "images/icon/72.png",
        revision: "92b2f2a7e6502b7f741829fb8f5d9c3a"
    }, {
        url: "images/icon/96.png",
        revision: "b9f82b92026c095b1beefe14b5db782a"
    }, {
        url: "images/icon/128.png",
        revision: "db59290018756c0b56353921e36b2700"
    }, {
        url: "images/icon/144.png",
        revision: "25a39aeb3e2dc916c168aacf4a128bed"
    }, {
        url: "images/icon/192.png",
        revision: "083848b8070ddaa1484564bb6f8876f3"
    }, {
        url: "images/icon/512.png",
        revision: "61317460c2ca3ddcce7067f766f2daa3"
    }, {
        url: "manifest.webmanifest",
        revision: "025ba53dd0d30a8f6f28eb95a6719392"
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),
    e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/, new e.CacheFirst({
        cacheName: "js-css-cache",
        plugins: []
    }), "GET"),
    e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, new e.CacheFirst({
        cacheName: "image-cache",
        plugins: []
    }), "GET")
}
));
