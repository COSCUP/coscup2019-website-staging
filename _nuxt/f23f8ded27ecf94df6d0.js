(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{324:function(t,e,r){var n=r(11),o=r(44),l=r(22),c=r(325),m="["+c+"]",d=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),h=function(t,e,r){var o={},m=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=m?e(y):c[t];r&&(o[r]=d),n(n.P+n.F*m,"String",o)},y=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},325:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},326:function(t,e,r){"use strict";var n=r(10),o=r(36),l=r(45),c=r(168),m=r(89),d=r(22),f=r(90).f,h=r(114).f,y=r(24).f,v=r(324).trim,x=n.Number,_=x,w=x.prototype,k="Number"==l(r(113)(w)),S="trim"in String.prototype,T=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=S?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(k?d(function(){w.valueOf.call(r)}):"Number"!=l(r))?c(new _(T(e)),r,x):T(e)};for(var I,N=r(17)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;N.length>O;O++)o(_,I=N[O])&&!o(x,I)&&y(x,I,h(_,I));x.prototype=w,w.constructor=x,r(25)(n,"Number",x)}},337:function(t,e,r){var content=r(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6aaa367a",content,!1,{sourceMap:!1})},348:function(t,e,r){var n=r(11),o=r(349);n(n.S+n.F*(Number.parseInt!=o),"Number",{parseInt:o})},349:function(t,e,r){var n=r(10).parseInt,o=r(324).trim,l=r(325),c=/^[-+]?0[xX]/;t.exports=8!==n(l+"08")||22!==n(l+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(c.test(r)?16:10))}:n},350:function(t,e,r){"use strict";var n=r(337);r.n(n).a},351:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,'#schedule{width:auto}.days a{display:inline-block;text-decoration:none;border:none;line-height:auto;color:inherit}.days .active{color:#009a79;border-bottom:5px solid}@media only screen and (max-width:1200px){.days{position:fixed;bottom:0;width:100%;background:#fff;display:flex;z-index:11}.days a{height:64px;flex:1 0 auto;text-align:center;line-height:64px;color:#b8d2cf}}@media only screen and (min-width:1200px){.days{text-align:right;font-size:3em;position:static}.days a{color:#b8d2cf;padding:.5em;margin:1em 0 .5em}}#rooms{display:none;list-style:none;text-align:center;position:sticky;position:-webkit-sticky;top:65px;contain:layout;background-color:hsla(0,0%,100%,.8);width:100%;z-index:9;margin:0}#rooms li{flex:1 0 calc((100% - 3.5em)/8);font-size:smaller;color:rgba(0,0,0,.4)}#rooms li:not(:first-child){margin-left:.5em}#rooms strong{display:block;font-size:2em;margin:-.3em 0 .5em;color:rgba(0,0,0,.7)}@media only screen and (min-width:1200px){#rooms{display:flex}}.time{font-size:20px;color:#009a79;background-color:#ecf5f4;padding:.5em}@supports (position:-webkit-sticky){.time{position:-webkit-sticky;top:69px;z-index:9}}@media only screen and (min-width:720px){.time{position:-webkit-sticky;position:sticky;margin:0;padding:.5em 64px;border-top:1px solid #b8d2cf;grid-column:1/span 2;top:64px}}@media only screen and (min-width:1200px){.time{display:none}}#programs{list-style:none;display:grid;grid-template-rows:var(--list)}#programs li a{display:block;height:100%;contain:layout;color:inherit}@media only screen and (min-width:1200px){#programs li{position:relative}#programs li article{position:sticky;position:-webkit-sticky;top:130px}}@media only screen and (max-width:719px){#programs{grid-template-columns:none}}@media only screen and (min-width:720px){#programs{grid-template-columns:120px auto;grid-column:2}}@media only screen and (min-width:1200px){#programs{grid-template-rows:var(--table);grid-template-areas:var(--areas);grid-column:var(--room);grid-gap:0 .5em;grid-template-columns:repeat(var(--length),calc((100% - 3.5em)/8));margin:0}}.program{padding:.5em;line-height:1.5rem}.program h4{font-weight:400;margin:0;word-break:break-word;font-size:16px}.program .track{color:#009a79}.program footer{position:relative}.program .period{opacity:.8;display:none}.program article footer span:not(.period):not(.track):not(:last-child):after{content:" - "}@media only screen and (max-width:719px){.program{border-bottom:1px solid #e9e9e9;padding:1em}}@media only screen and (min-width:720px){.program{grid-column:2;margin-bottom:1em}.program h4{font-size:24px}}@media only screen and (min-width:1200px){.program{grid-column:var(--room);grid-row-start:var(--start);grid-row-end:var(--end);border:1px dashed rgba(0,0,0,.4);border-radius:5px;margin-bottom:0}.program h4{font-size:large}.program .period{display:block}.program .track{font-size:smaller}.program .language,.program .length,.program .room{display:none}}',""])},371:function(t,e,r){"use strict";r.r(e);r(169),r(170),r(172),r(51),r(326),r(348),r(63),r(13),r(14),r(9);var n,o=r(23),l=(r(112),r(43)),c=r(61),m=r(115),d=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},h=function(t,e,r,n){return new(r||(r=Promise))(function(o,l){function c(t){try{d(n.next(t))}catch(t){l(t)}}function m(t){try{d(n.throw(t))}catch(t){l(t)}}function d(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(c,m)}d((n=n.apply(t,e||[])).next())})},y=function(t,body){var e,r,n,g,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=body.call(t,o)}catch(t){l=[6,t],r=0}finally{e=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},v=Object(c.namespace)(m.name).State,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getTimeSlug=function(t){return e.padStartWithZero(t.hour)+":"+e.padStartWithZero(t.minute)},e.getTimeSlugWithoutColon=function(t){return""+e.padStartWithZero(t.hour)+e.padStartWithZero(t.minute)},e}return d(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},e.prototype.fetch=function(t){var e=t.store.dispatch;return h(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,e(m.name+"/fetchData")];case 1:return t.sent(),[2]}})})},Object.defineProperty(e.prototype,"currentDayIndex",{get:function(){var t=this.$route.params.id;if(t){var e=t.match(/^day([12])$/);if(e&&e[1])return Number.parseInt(e[1],10)-1;var r=this.programs.find(function(e){return e.id==t});if(r){var n=this.eventDay.findIndex(function(t){return t.date==r.start.date});if(n)return n}}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentDay",{get:function(){return this.eventDay[this.currentDayIndex]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShowProgramDetail",{get:function(){var t=this.$route.params.id;return Boolean(t)&&!/^day[12]$/.test(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"todayPrograms",{get:function(){var t=this;return this.programs.filter(function(e){return!!(e.start&&e.end&&e.room)&&e.start.date===t.currentDay.date}).sort(function(a,b){return a.start.timestamp-b.start.timestamp})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"programTimeSlot",{get:function(){return this.todayPrograms.reduce(function(t,e,r){return t.push(e.start,e.end),t},[])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"programStartTime",{get:function(){return this.programTimeSlot.filter(function(t,e,r){return e%2==0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"programStartTimeUnique",{get:function(){return this.programStartTime.filter(function(t,e,r){return r.findIndex(function(e){return e.timestamp===t.timestamp})===e})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cssGridTemplateRows",{get:function(){var t=this;return this.programTimeSlot.filter(function(t,i,a){return a.findIndex(function(e){return e.timestamp===t.timestamp})===i}).sort(function(a,b){return a.timestamp-b.timestamp}).map(function(time){return"[t"+t.getTimeSlugWithoutColon(time)+"] minmax(1em, auto)"}).join(" ")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cssGridAreas",{get:function(){return this.rooms.map(function(t){return t.id}).join(" ")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cssListTemplateRow",{get:function(){var t=this;return this.programStartTime.sort(function(a,b){return a.timestamp-b.timestamp}).map(function(e,r,n){return r>0&&e.timestamp===n[r-1].timestamp?"auto":"[t"+t.getTimeSlugWithoutColon(e)+"] auto auto"}).join(" ")},enumerable:!0,configurable:!0}),e.prototype.padStartWithZero=function(t){return t<10?"0"+t:t.toString()},f([v],e.prototype,"programs",void 0),f([v],e.prototype,"rooms",void 0),f([v],e.prototype,"tags",void 0),f([v],e.prototype,"types",void 0),f([v],e.prototype,"eventDay",void 0),e=f([Object(l.Component)({name:"Programs"})],e)}(l.Vue),_=(r(350),r(7)),component=Object(_.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"schedule"}},[r("nav",{staticClass:"days"},[t._l(t.eventDay,function(e,n){return[r("nuxt-link",{key:n,class:{active:e===t.currentDay},attrs:{to:("zh-TW"!==t.$i18n.locale?"/"+t.$i18n.locale:"")+"/programs/day"+(n+1)}},[t._v("\n\t\t\t\t"+t._s("Day "+(n+1)+" ("+e.month+"/"+e.date+")")+"\n\t\t\t\t")])]})],2),t._v(" "),r("div",{style:"--table: "+t.cssGridTemplateRows+"; --list: "+t.cssListTemplateRow+"; --length: "+t.rooms.length+"; --areas: '"+t.cssGridAreas+"'",attrs:{id:"timetable"}},[r("ul",{attrs:{id:"rooms"}},[t._l(t.rooms,function(e,n){return[r("li",{key:n},[t._v("\n\t\t\t\t\t\tRoom\n\t\t\t\t\t\t"),r("strong",[t._v(t._s(e.name))])])]})],2),t._v(" "),r("ul",{attrs:{id:"programs"}},[t._l(t.programStartTimeUnique,function(e,n){return[r("li",{key:"time-"+n,staticClass:"time",style:"grid-row-start: t"+t.getTimeSlugWithoutColon(e)},[t._v(t._s(t.getTimeSlug(e)))])]}),t._v(" "),t._l(t.todayPrograms,function(e,n){return[r("li",{key:"program-"+n,staticClass:"program",style:{"--room":""+e.room.id,"--start":"t"+t.getTimeSlugWithoutColon(e.start),"--end":"t"+t.getTimeSlugWithoutColon(e.end)}},[r("nuxt-link",{attrs:{to:("zh-TW"!==t.$i18n.locale?"/"+t.$i18n.locale:"")+"/programs/"+e.id}},[r("article",[r("footer",[r("span",{staticClass:"period"},[t._v(t._s(t.getTimeSlug(e.start)+" ~ "+t.getTimeSlug(e.end)))]),t._v(" "),e.tags.length&&e.tags[1]?r("span",{staticClass:"track"},[t._v(t._s(""+e.tags[1].name))]):t._e(),t._v(" "),r("header",[r("h4",[t._v(t._s(e.title))])]),t._v(" "),r("span",{staticClass:"room"},[t._v(t._s(e.room.name))]),t._v(" "),r("span",{staticClass:"length"},[t._v(t._s(e.period+" mins"))]),t._v(" "),e.tags.length&&e.tags[0].name.trim().length?r("span",{staticClass:"language"},[t._v(t._s(""+e.tags[0].name))]):t._e(),t._v(" "),e.tags.length&&e.tags[2]&&e.tags[2].name.trim().length?r("span",{staticClass:"difficult"},[t._v(t._s(""+e.tags[2].name))]):t._e()])])])],1)]})],2)]),t._v(" "),t.shouldShowProgramDetail?r("nuxt-child",{key:t.$route.params.id,attrs:{"program-day":t.currentDayIndex+1}}):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);