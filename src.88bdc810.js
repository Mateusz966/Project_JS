parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/Project_JS/Project_JS/src/images/location.svg":[["location.2419ae68.svg","sQ69"],"sQ69"],"./../images/main-bg.png":[["main-bg.8b9f2e4b.png","lT2y"],"lT2y"],"./../images/bg.jpg":[["bg.16fd142e.jpg","fRER"],"fRER"]}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEY=void 0,require("./sass/main.scss");const n=document.querySelector(".gallery"),l="9hIF6NBjrDSVNrQQJmrbBXzEzwkr0S4m";exports.KEY=l;const i=document.querySelector(".pagination");let a=1,e="pl";async function o(l,i){let a=await t(l,i);console.log(a);let e=a.page,o=a._embedded.events;e.totalPages,a._links;o.forEach(l=>{n.insertAdjacentHTML("beforeend",`<div class="gallery__event">\n    <img class="event__image" src=${l.images[0].url} alt =""/>\n    <div class="event__info">\n    <p class="event__tittle">${l.name}</p>\n    <p class="event__date">${l.dates.start.localDate}</p>\n    <p class="event__place"> ${l._embedded.venues[0].name}</p></div>\n  </div>`)}),s()}async function t(n,i){return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${n}&sort=date,asc&page=${i}&apikey=${l}`).then(n=>{return n.json()}).catch(n=>{console.log(n)})}async function s(){let l=await t(e,a),s=l.page,c=s.totalPages,r=(l._links,[]);c>29&&(c=30);for(let n=1;n<c;n++)r.push(n);console.log(r.length);let _,g=r[r.length-1],p=r[0];if(1==a&&r.length<6){i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li>`;const l=document.querySelectorAll(".pagination__link");console.log(l),console.log(a),console.log(_),a=_,l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",t=>{t.preventDefault(),i.innerHTML="",a=l.textContent,_=a,n.innerHTML="",console.log(l),console.log(a),console.log(_),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(2==a&&r.length<6){i.innerHTML=`<li class="pagination__link"><a href=${t}>${t}</a></li><li class="pagination__link"><a href=${t+1}>${t+1}</a></li>`;const l=document.querySelectorAll(".pagination__link");let t;console.log(l),console.log(a),console.log(t),t=Number(a),l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=l.textContent,t=a,n.innerHTML="",console.log(l),console.log(a),console.log(t),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(3==a&&r.length<6){i.innerHTML=`<li class="pagination__link"><a href=${t}>${t}</a></li><li class="pagination__link"><a href=${t+1}>${t+1}</a></li><li class="pagination__link"><a href=${t+2}>${t+2}</a></li>`;const l=document.querySelectorAll(".pagination__link");let t;console.log(l),console.log(a),console.log(t),t=Number(a),l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=l.textContent,t=a,n.innerHTML="",console.log(l),console.log(a),console.log(t),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(4==a&&r.length<6){i.innerHTML=`<li class="pagination__link"><a href=${t}>${t}</a></li><li class="pagination__link"><a href=${t+1}>${t+1}</a></li><li class="pagination__link"><a href=${t+2}>${t+2}</a></li><li class="pagination__link"><a href=${t+3}>${t+3}</a></li>`;const l=document.querySelectorAll(".pagination__link");let t;console.log(l),console.log(a),console.log(t),t=Number(a),l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=l.textContent,t=a,n.innerHTML="",console.log(l),console.log(a),console.log(t),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(5==a&&r.length<6){i.innerHTML=`<li class="pagination__link"><a href=${t}>${t}</a></li><li class="pagination__link"><a href=${t+1}>${t+1}</a></li><li class="pagination__link"><a href=${t+2}>${t+2}</a></li><li class="pagination__link"><a href=${t+3}>${t+3}</a></li><li class="pagination__link"><a href=${t+4}>${t+4}</a></li>`;const l=document.querySelectorAll(".pagination__link");let t;console.log(l),console.log(a),console.log(t),t=Number(a),l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=l.textContent,t=a,n.innerHTML="",console.log(l),console.log(a),console.log(t),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(1==a&&r.length>=6){i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><li class="pagination__link"><a href=${r[1]}>${r[1]}</a></li><li class="pagination__link"><a href=${r[2]}>${r[2]}</a></li><li class="pagination__link"><a href=${r[3]}>${r[3]}</a></li><li class="pagination__link"><a href=${r[4]}>${r[4]}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${g}>${g}</a></li>`;const l=document.querySelectorAll(".pagination__link");console.log(l),console.log(a),console.log(_),a=_,l.forEach(l=>{l.textContent==s.number&&l.classList.add("pagination__link--active"),l.addEventListener("click",t=>{t.preventDefault(),i.innerHTML="",a=l.textContent,_=a,n.innerHTML="",console.log(l),console.log(a),console.log(_),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(2==a&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=currentPage1>${l+1}</a></li><li class="pagination__link"><a href=${l+2}>${l+2}</a></li><li class="pagination__link"><a href=${l+3}>${l+3}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,console.log(t),l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(3==a&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${l-2}>${l-2}</a></li><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=${l+1}>${l+1}</a></li><li class="pagination__link"><a href=${l+2}>${l+2}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(4==a&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${l-3}>${l-3}</a></li><li class="pagination__link"><a href=${l-2}>${l-2}</a></li><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=${l+1}>${l+1}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(a>=5&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=${l+1}>${l+1}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(a==r.length-3&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=${l+1}>${l+1}</a></li><li class="pagination__link"><a href=${l+2}>${l+2}</a></li><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(a==r.length-2&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li><li class="pagination__link"><a href=${l+1}>${l+1}</a></li></li><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(a==r.length-1&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${l-2}>${l-2}</a></li><li class="pagination__link"><a href=${l-1}>${l-1}</a></li><li class="pagination__link"><a href=${l}>${l}</a></li></li><li class="pagination__link"><a href=${g}>${g}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),window.scrollTo({top:0,behavior:"smooth"}),o(e,a)})})}if(a==r.length&&r.length>=6){let l;l=Number(a),i.innerHTML=`<li class="pagination__link"><a href=${p}>${p}</a></li><span class="pagination__link">...</span><li class="pagination__link"><a href=${l-3}>${l-3}</a></li><li class="pagination__link"><a href=${l-2}>${l-2}</a></li><li class="pagination__link"><a href=${l-1}>${l-1}</a></li></li><li class="pagination__link"><a href=${l}>${l}</a></li>`;const t=document.querySelectorAll(".pagination__link");console.log(t),t.forEach(t=>{t.textContent==s.number&&t.classList.add("pagination__link--active"),t.addEventListener("click",s=>{s.preventDefault(),i.innerHTML="",a=t.textContent,l=a,n.innerHTML="",console.log(a),console.log(l),o(e,a),window.scrollTo({top:0,behavior:"smooth"})})})}}o(e,a);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/Project_JS/src.88bdc810.js.map