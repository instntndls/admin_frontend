if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),d={module:{uri:c},exports:r,require:a};i[c]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ApiView-DATYnTI-.js",revision:null},{url:"assets/index-BhptfPsR.js",revision:null},{url:"assets/index-DfmVxJlO.css",revision:null},{url:"assets/ReportsView-Be9kYtLU.js",revision:null},{url:"assets/ReportsView-Shw0G2Yw.css",revision:null},{url:"index.html",revision:"80093a4b6d210de4b9229d435b18abb9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"7fa87ac96809293f3dc7a02a299e15a9"},{url:"img/icons/android-chrome-512x512.png",revision:"f17303fb91a51b441d908c692f9ac8d2"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"dcddc6507d7543326ab68954d772293c"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"69d9318f9c7a4de3ff6ed4c48020beea"},{url:"img/icons/apple-touch-icon.png",revision:"caa26cb41a5109aa9fd16650abf954a0"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"e2fffd97a731b6b5f315047845a6e9c3"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"43b409994627c4d384121df51604e1c0"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"bc46ebfba239c26de822daf4a175934c"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1eec71b39fe5028810eead37f714f20b"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"caa26cb41a5109aa9fd16650abf954a0"},{url:"img/icons/favicon-16x16.png",revision:"de477f0486465d23e184d00d8acb9aeb"},{url:"img/icons/favicon-32x32.png",revision:"ef314964d46b68d5fe0c3d0f6821c866"},{url:"img/icons/msapplication-icon-144x144.png",revision:"dcf3eba9a8729854a48ff80f0121fb69"},{url:"img/icons/mstile-150x150.png",revision:"99d71271f859d7d8ab6fd4846edad1ef"},{url:"img/icons/safari-pinned-tab.svg",revision:"fa0c8760a756ed552cd516107a651b2e"},{url:"manifest.webmanifest",revision:"d4ee90acdaebffb7f6736a347a24eb38"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));