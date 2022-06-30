(()=>{"use strict";var n,e,t,r,o,a,i,s,c,l,f,p,u,d,m={426:(n,e,t)=>{t.d(e,{Z:()=>T});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(167),t.b),f=new URL(t(951),t.b),p=new URL(t(336),t.b),u=new URL(t(884),t.b),d=new URL(t(370),t.b),m=new URL(t(684),t.b),h=new URL(t(395),t.b),g=i()(o());g.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap);"]);var b=c()(l),v=c()(f),y=c()(p),w=c()(u),x=c()(d),k=c()(m),S=c()(h);g.push([n.id,"@font-face {\n    font-family: 'Blackwood Castle';\n    src: url("+b+") format('woff2'),\n        url("+v+") format('woff');\n    font-style: normal;\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: 'Blackwood Shadow';\n    src: url("+y+") format('woff2'),\n        url("+w+") format('woff');\n    font-style: normal;\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: 'Smallburg';\n    src: url("+x+") format('woff'),\n        url("+k+") format('truetype');\n    font-style: normal;\n    font-weight: 600;\n}\n\n:root {\n    /* colours */\n    --parchment: #d7c9aa;\n    --parchment-darker: #C4AF82;\n    --bistre: #2A1507;\n    --upsdell-red: #a71125;\n    --bright-yellow-crayola: #FFAB25;\n    --slimy-green: #478E02;\n\n    /* defaults */\n    color: white;\n    font-family: 'Crimson Text', serif;\n    font-size: 20px;\n}\n\nbody {\n    margin: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    width: 100%;\n    height: 100vh;\n\n    background-image: url("+S+");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nheader, main {\n    padding: 0 2rem;\n}\n\nheader {\n    padding-top: 1.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\nh1 {\n    font-family: 'Blackwood Castle', serif;\n    font-size: 3rem;\n    letter-spacing: 3px;\n    text-shadow: 5px 5px black;\n\n    margin: 0;\n}\n\nh2 {\n    font-family: 'Smallburg', sans-serif;\n    font-size: 1.5rem;\n}\n\n.links-container {\n    display: flex;\n    justify-content: space-around;\n    gap: 3rem;\n\n    padding-left: 0;\n    padding-right: 2rem;\n    margin: 0;\n\n    list-style: none;\n}\n\n.links-container li {\n    font-size: 1.25rem;\n\n    text-align: center;\n    color: var(--bistre);\n\n    padding: 16px;\n\n    width: fit-content;\n\n    background-color: var(--parchment-darker);\n    \n    /*border: 3px inset var(--bistre);*/\n    /*border-bottom: none;*/\n    border-radius: 10px 10px 0 0;\n}\n\n.links-container li.selected {\n    background-color: var(--parchment);\n}\n\n.main-container {\n    background-color: var(--parchment);\n    border-radius: 20px;\n    width: 100%;\n    height: 90vh;\n}\n\n#content {\n    \n}",""]);const T=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var f=[].concat(n[l]);r&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],f=a[l]||0,p="".concat(l," ").concat(f);a[l]=f+1;var u=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(d);else{var m=o(d,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var f=t(a[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},951:(n,e,t)=>{n.exports=t.p+"ec3c4b60a7466603d809.woff"},167:(n,e,t)=>{n.exports=t.p+"b53023bb2e8ca050651b.woff2"},884:(n,e,t)=>{n.exports=t.p+"60f5cf43ae25b956f365.woff"},336:(n,e,t)=>{n.exports=t.p+"2a4e8196e1ca40f26298.woff2"},684:(n,e,t)=>{n.exports=t.p+"73bb601ad53a2dc9691f.ttf"},370:(n,e,t)=>{n.exports=t.p+"4002825027942b71d953.woff"},395:(n,e,t)=>{n.exports=t.p+"df1a4fd74000f6e6fb92.jpg"}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.m=m,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),s=g.n(i),c=g(216),l=g.n(c),f=g(589),p=g.n(f),u=g(426),(d={}).styleTagTransform=p(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=l(),e()(u.Z,d),u.Z&&u.Z.locals&&u.Z.locals})();