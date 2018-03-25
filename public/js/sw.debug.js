var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,h,g){if(g.get||g.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[h]=g.value)},y="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function z(){z=function(){};y.Symbol||(y.Symbol=G)}var H=0;function G(a){return"jscomp_symbol_"+(a||"")+H++}
function I(){z();var a=y.Symbol.iterator;a||(a=y.Symbol.iterator=y.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&r(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return J(this)}});I=function(){}}function J(a){var h=0;return V(function(){return h<a.length?{done:!1,value:a[h++]}:{done:!0}})}function V(a){I();a={next:a};a[y.Symbol.iterator]=function(){return this};return a}function W(a){I();var h=a[Symbol.iterator];return h?h.call(a):J(a)}
function X(a,h){if(h){for(var g=y,k=a.split("."),m=0;m<k.length-1;m++){var b=k[m];b in g||(g[b]={});g=g[b]}k=k[k.length-1];m=g[k];b=h(m);b!=m&&null!=b&&r(g,k,{configurable:!0,writable:!0,value:b})}}
X("Promise",function(a){function h(b){this.c=0;this.s=void 0;this.b=[];var e=this.m();try{b(e.resolve,e.reject)}catch(c){e.reject(c)}}function g(){this.a=null}if(a)return a;g.prototype.v=function(b){null==this.a&&(this.a=[],this.C());this.a.push(b)};g.prototype.C=function(){var b=this;this.w(function(){b.G()})};var k=y.setTimeout;g.prototype.w=function(b){k(b,0)};g.prototype.G=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=[];for(var e=0;e<b.length;++e){var a=b[e];delete b[e];try{a()}catch(n){this.D(n)}}}this.a=
null};g.prototype.D=function(b){this.w(function(){throw b;})};h.prototype.m=function(){function b(b){return function(c){a||(a=!0,b.call(e,c))}}var e=this,a=!1;return{resolve:b(this.K),reject:b(this.o)}};h.prototype.K=function(b){if(b===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof h)this.L(b);else{var a;a:switch(typeof b){case "object":a=null!=b;break a;case "function":a=!0;break a;default:a=!1}a?this.J(b):this.A(b)}};h.prototype.J=function(a){var b=void 0;
try{b=a.then}catch(c){this.o(c);return}"function"==typeof b?this.M(b,a):this.A(a)};h.prototype.o=function(a){this.B(2,a)};h.prototype.A=function(a){this.B(1,a)};h.prototype.B=function(a,e){if(0!=this.c)throw Error("Cannot settle("+a+", "+e|"): Promise already settled in state"+this.c);this.c=a;this.s=e;this.H()};h.prototype.H=function(){if(null!=this.b){for(var a=this.b,e=0;e<a.length;++e)a[e].call(),a[e]=null;this.b=null}};var m=new g;h.prototype.L=function(a){var e=this.m();a.h(e.resolve,e.reject)};
h.prototype.M=function(a,e){var c=this.m();try{a.call(e,c.resolve,c.reject)}catch(n){c.reject(n)}};h.prototype.then=function(a,e){function c(a,e){return"function"==typeof a?function(e){try{b(a(e))}catch(A){g(A)}}:e}var b,g,k=new h(function(a,e){b=a;g=e});this.h(c(a,b),c(e,g));return k};h.prototype["catch"]=function(a){return this.then(void 0,a)};h.prototype.h=function(a,e){function c(){switch(b.c){case 1:a(b.s);break;case 2:e(b.s);break;default:throw Error("Unexpected state: "+b.c);}}var b=this;null==
this.b?m.v(c):this.b.push(function(){m.v(c)})};h.resolve=function(a){return a instanceof h?a:new h(function(e){e(a)})};h.reject=function(a){return new h(function(e,c){c(a)})};h.race=function(a){return new h(function(e,c){for(var b=W(a),g=b.next();!g.done;g=b.next())h.resolve(g.value).h(e,c)})};h.all=function(a){var e=W(a),c=e.next();return c.done?h.resolve([]):new h(function(a,b){function g(e){return function(c){k[e]=c;n--;0==n&&a(k)}}var k=[],n=0;do k.push(void 0),n++,h.resolve(c.value).h(g(k.length-
1),b),c=e.next();while(!c.done)})};h.$jscomp$new$AsyncExecutor=function(){return new g};return h});function aa(a,h){I();a instanceof String&&(a+="");var g=0,k={next:function(){if(g<a.length){var m=g++;return{value:h(m,a[m]),done:!1}}k.next=function(){return{done:!0,value:void 0}};return k.next()}};k[Symbol.iterator]=function(){return k};return k}X("Array.prototype.keys",function(a){return a?a:function(){return aa(this,function(a){return a})}});
X("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});X("String.prototype.includes",function(a){return a?a:function(a,g){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,g||0)}});(function(a,h,g,k,m){function b(){t("error",arguments,"#ea4335")}function e(){t("warn",arguments,"#fbbc05")}function c(){t("info",arguments,"#4285f4")}function n(){t("log",arguments,"#fbbc05")}function t(a,f,d){var l;d||(d="white");f=Array.prototype.slice.call(f);if(B){var e=f.shift();f=f.filter(function(a){return"\u00f8"!==a});f.unshift("font-size:12px;font-weight:bold;color:"+d+";margin-right:1px;");f.unshift("font-size:10px;");f.unshift("font-size:10px;font-weight:bold;");l="";switch(a){case "ok":a=
"log";break;case "warn":f.unshift("font-size:14px;font-weight:bold;color:orange;margin-right:2px;");l="%c\u26a0";a="log";break;default:l=""}f.unshift("font-size:12px;font-weight:bold;color:"+d+";margin-right:1px;");f.unshift("%c\u2772"+l+"%co10n%c.sw"+(e?"."+e:"")+"%c\u2773");B[a]||(a="log");try{B[a].apply(this,f)}catch(ia){if("error"===a||"warn"===a)throw Error(f.join(" - "));}}else if("error"===a)throw Error(f.join(" - "));}function u(){return Math.round(Date.now()/1E3)}function Y(l,f){(f?a.clients.get(f):
a.clients.matchAll({includeUncontrolled:!0,type:"window"})).then(function(a){if(f)var d=a;else{var e;a.forEach(function(a){a.focused?d=a:d||"visible"!==a.visibilityState||(d=a);e=a})}d||(d=e);l(d)})}function w(l){return a.g().then(function(a){return a.match(l)}).then(function(a){if(a){var d=a.headers.get("x-o10n-exp");if(d)var f=a.headers.get("x-o10n-sw");if(d&&f<u()-d)a=!1,c("cache","expired by policy",l.url,{F:new Date(1E3*f),"max-age":d});else{if(d=a.headers.get("expire"))d?isNaN(parseInt(d))&&
(d=Date.parse(d),d=isNaN(d)?void 0:Math.round(d/1E3)):d=void 0;d&&d<u()&&(a=!1,c("cache","expired by HTTP expire",l.url,{F:new Date(1E3*f),P:new Date(1E3*d)}))}}return a})}function Z(l,f,d){a.g().then(function(a){var e={};f.headers.forEach(function(a,d){e[d]=a});e["x-o10n-sw"]=u();if(d&&d[14])e["x-o10n-sw-exp"]=d[14];else{var c=f.headers.get("cache-control");c&&(c=ba.exec(c))&&c[1]&&(e["x-o10n-sw-exp"]=parseInt(c[1]))}return f.blob().then(function(d){d=new Response(d,{status:f.status,statusText:f.statusText,
headers:e});return a.put(l,d)})})}function A(){if(!C||C<u()-60)C=u(),x([3,3])}function K(a,f,d,e){f instanceof Array||(f=[f]);for(var l,c,b,p,h=0,g=f.length;h<g;h++){c=f[h];if("object"===typeof c){if(c[16]&&(b=parseFloat(a),p=parseFloat(c[17]),!isNaN(b)&&!isNaN(p)))switch(c[16]){case "<":l=b<p;break;case ">":l=b>p;break;case "=":l=b===p}}else if(d){if(c=c.match(ca)){try{var k=new RegExp(c[1],c[2])}catch(ja){}c=k||!1}else c=void 0;c&&(l=c.test(a))}else l=-1!==a.indexOf(c);if("boolean"===typeof l)return e?
!l:l}return l}function D(a,f,d,e){var l=!1,c=[],b,p,h=(33).toString(),g=(32).toString();d instanceof Array||(d=[]);for(var k=0,n=d.length;k<n;k++)if(b=d[k],!c.length||b[20]){p=null;switch(b[21].toString()){case h:p=K(f,b[22],b[25],b[20]);break;case g:switch(b[18].toLowerCase()){case "referer":case "referrer":if(!e){value=a.referrer;break}default:value=a.headers.get(b[18].toLowerCase())}if(value)p=K(value,b[22],b[25],b[20]);else if(b[23])return!1}if("boolean"===typeof p)if(p)c.push(b),l=!0;else return!1}return l?
c:l}function L(l,f,d){return new Promise(function(c){var e,b=new Promise(function(a){e=a});a.u.forEach(function(a){b=b.then(a[l])});b.then(function(){c([f,d])});e([f,d])})}function E(a,f,d,e){a=new Request(a);var c=a.url;return L(0,a,f).then(function(a){var f=a[0],l=a[1];if(!e&&M&&(a=M(c)))return n("","hook into preload request",c),a;f.headers.set("x-o10n-sw",1);return h(f).then(function(a){return L(1,a).then(function(a){a=a[0];a.ok&&400>a.status&&l&&(!l[15]||D(a,c,l[15],!0)?(Z(f,a.clone(),l),l[15]?
n("","cached by cache policy",c,l[15]):n("","cached by empty cache policy",c)):l[15]&&n("","not cached by cache policy",c,l[15]));return a})})["catch"](function(a){return d?d(f,null,a):null})})}function N(a){if(!a)return Promise.reject();"string"===typeof a&&(a=new Request(a));return w(a).then(function(f){if(!f){var d=a.url;n("preload",d);f=E(a,{O:null},!1,!0).then(function(a){F(d);return a})["catch"](function(a){F(d);throw a;});q[d]=[u(),f,setTimeout(function(){F(d)},O)]}return f})}function M(a){if(a in
q&&q[a]&&q[a][0]>u()-O)return q[a][1]}function P(a){var f=[],d=[];k[9]&&"/"!=k[9]&&f.push(k[9]);v&&v.forEach(function(a){a[31]&&(k[12]?f.push(a[31]):d.push(a[31]))});k[11]&&k[11].forEach(function(a){var c=k[12];"string"!==typeof a&&("boolean"==typeof a[12]&&(c=a[12]),a=a.url);a&&(c?f.push(a):d.push(a))});return a?f.concat(d):[f,d]}function F(a){a in q&&(q[a]&&q[a][2]&&clearTimeout(q[a][2]),q[a]=!1,delete q[a])}function Q(a,c){return w(a).then(function(d){return d?(e("offline",a,c.url),d.blob().then(function(a){return new Response(a,
{status:503,statusText:"Offline",headers:d.headers})})):h(c)["catch"](function(a){setTimeout(function(){throw a;})})})}function da(a){var c={headers:[]};a.headers.forEach(function(a,f){c.headers.push([f,a])});["credentials","mode","cache","referrer","integrity"].forEach(function(d){d in a&&(c[d]=a[d])});return c}function ea(a,f){if(v){var d=!1;if(-1!==f.indexOf("o10n-sw-worker"))d={26:35,35:{}},d[35][28]=1,d[35][29]=1;else for(var b,l=0,h=v.length;l<h;l++)if(b=D(a,f,v[l][24])){d=v[l];break}if(d){var g;
switch(d[26].toString()){case R:g="never";break;case S:g="cache";break;case T:g="event";break;case fa:g="network"}b={};for(var k in d)d.hasOwnProperty(k)&&(b[k]=d[k]);c("policy",g,f,b);switch(d[26].toString()){case R:break;case S:case T:return w(a).then(function(b){if(b){var l=!0,g=d[35][28]?isNaN(parseInt(d[35][28]))?!1:parseInt(d[35][28]):!1;if(g){var h=b.headers.get("x-o10n-sw");h&&parseInt(h)>u()-g&&(l=!1)}l&&setTimeout(function(){x([3,2,f,da(a),[b.headers.get("etag"),b.headers.get("last-modified")],
d[35]])},1E3);c("fetch","from cache",f);return b}l=E(a,"event"==d[26]?null:d[35],function(a,c,b){e("fetch","network failed",f,b,a);return Q(d[31],a.clone())});l.then(function(a){c("fetch","no cache, fallback to network",f);return a});return l});default:return g=E(a,d[35],function(a,b,l){e("fetch","network failed",f,l);return w(a).then(function(b){return b?(c("fetch","fallback from cache",f),b):Q(d[31],a.clone())})}),g.then(function(a){c("fetch","from network",f);return a}),g}}else n("policy","no match",
f)}}function x(a,c){a.unshift("o10n");Y(function(d){d?d.postMessage(a):(a.shift(),setTimeout(x,1E3,a,c))},c)}var v=k[13];a.u=[];var ca=/^\/(.*)\/([gimuy]+)?$/;CacheStorage.prototype.match||(CacheStorage.prototype.match=function(a,c){var d=this;return this.keys().then(function(b){var e;return b.reduce(function(b,f){return b.then(function(){return e||d.open(f).then(function(d){return d.match(a,c)}).then(function(a){return e=a})})},Promise.resolve())})});var B=a.console;e("","debug mode enabled");var ga=
"o10n"+(k[7]?":"+k[7]:""),ba=RegExp("max-ages*=s*([0-9]+)","gi");a.g=function(a){return caches.open(ga+(a?a:""))};var C,q={},O=5E3;a.addEventListener("install",function(b){b.waitUntil((new Promise(function(a,d){var b=P(),e=[];b[0].length&&(b[0].forEach(function(a){e.push(N(a))}),c("preload before install",preload_before_install_urls));Promise.all(e).then(a)["catch"](d)})).then(function(){a.skipWaiting()})["catch"](function(){a.skipWaiting()}))});a.addEventListener("activate",function(){a.clients.claim();
var b=P(!0);if(b.length){var e=[];b.forEach(function(a){e.push(w(a))});Promise.all(e).then(function(a){var d=[];a.forEach(function(a,c){a||d.push(b[c])});d.length&&(x([3,1,d]),c("","preload in background worker",d))})}A()});var R=(34).toString(),S=(35).toString(),T=(37).toString(),fa=(36).toString();a.addEventListener("fetch",function(a){var c=a.request,d=a.request.url;if("GET"===c.method&&!c.headers.has("x-o10n-sw-worker"))if(v){var e=D(c,d,k[38]||[]);if(e)n("","bypass",d,e);else if(A(),c=ea(c,d))return a.respondWith(c)}else b("",
"no policy config",k[13])});var U={1:function(a){a(!1,m)},2:function(a,c){if(a){var d;"string"===typeof a||a instanceof Request?d=[a]:a instanceof Array&&(d=a);if(d){var e=[];d.forEach(function(a){e.push(N(a))});Promise.all(e).then(function(a){var b=[];a.forEach(function(a){var c={url:a.url,status:a.status,statusText:a.statusText};a=a.headers.get("content-length");c.size=isNaN(parseInt(a))?-1:parseInt(a);b.push(c)});c(!1,b)})["catch"](function(a){b("preload",d,a)})}else c("data")}else c("urls")},
3:function(){B.log(11111)},4:function(c,b,d){a.registration.showNotification(event.data[1],event.data[2]);d(!1,"sent")}};a.addEventListener("message",function(a){var c=a?a.data:!1;if(c instanceof Array&&"o10n"==c[0]){var b=c[1],e=c[2].toString(),c=c.slice(3)||[];c.push(function(c,e){x([1,b,c,e],a.N)});e in U&&U[e].apply(this,c)}})})(self,self.fetch,self.Cache,O10N_CONFIG,O10N_SW_FILE_HASH);
