(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"07fe":function(t,e,s){},"1e9a":function(t,e,s){"use strict";s("f47d9")},"2d8e":function(t,e,s){"use strict";s("f700")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(s("2d8e"),s("2877")),o={},l=Object(r["a"])(o,i,n,!1,null,null,null),c=l.exports,d=s("8c4f"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("article",{ref:"sec",staticClass:"section",attrs:{id:"sec"},on:{wheel:function(e){return e.preventDefault(),t.handleScroll.apply(null,arguments)}}},[e("section",{staticClass:"a0"}),e("section",{staticClass:"a1"}),e("section",{staticClass:"a2"}),e("section",{staticClass:"a3"}),e("section",{staticClass:"a4"}),e("section",{staticClass:"a5"}),e("section",{staticClass:"a6"})]),e("div",{staticClass:"nav"},[e("ul",{ref:"nav",attrs:{id:"nav"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])},f=[function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])}],h={data(){return{index:0}},watch:{index:function(){let t=this.$refs.nav.childNodes,e=this.$refs.sec.childNodes;for(let s=0;s<t.length;s++)s==this.index?t[s].childNodes[0].childNodes[0].classList.add("n_native"):"item"!=s&&t[s].childNodes[0].childNodes[0].classList.remove("n_native");for(let s=0;s<e.length;s++)s==this.index?(e[s].classList.remove("leaving"),e[s].classList.add("s_native")):(e[s].classList.remove("s_native"),e[s].classList.add("leaving"))}},methods:{handleScroll(t){t.deltaY>0?6==this.index?this.index=0:this.index=this.index+1:0==this.index?this.index=6:this.index=this.index-1,console.log(this.index)}},mounted(){console.log(this.$refs.sec);let t=this.$refs.nav.childNodes,e=this.$refs.sec.childNodes;t[0].childNodes[0].childNodes[0].classList.add("n_native");for(let s=0;s<e.length;s++)0==s?e[s].classList.add("s_native"):e[s].classList.add("leaving")}},p=h,v=(s("1e9a"),Object(r["a"])(p,u,f,!1,null,"1950ed62",null)),m=(v.exports,function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"nav-box"},t._l(t.navData,(function(s,a){return e("div",{key:s.path,staticClass:"nav-item-box",on:{click:function(e){return t.goto(a)}}},[t._v(" "+t._s(s.name)+" ")])})),0),e("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOption}},[e("swiper-slide",[e("div",{staticClass:"author"},[t._v("lntongwei")])]),e("swiper-slide",[e("div",{staticClass:"content-box"},[e("div",{staticClass:"left-box"},[e("div",{staticClass:"text"},[t._v(" Since 1998, Jeb Patton has toured throughout the United States and abroad as the pianist with the Heath Brothers and the Jimmy Heath Quartet. He has performed with Etta Jones, George Coleman, Charles McPherson, Winard Harper, Rodney Green, Antonio Hart, the Dizzy Gillespie All Stars, The Vanguard Jazz Orchestra, Roberta Gambarini, Peter and Will Anderson, as well as with other top artists. "),e("br"),e("br"),t._v("Jeb’s latest two CDs, Tenthish and Shades and Tones, were released in 2018 and 2016 respectively on the Cellar Live label. Jeb’s is also a published author, educator and professor at Queens College and City College. ")])]),e("div",{staticClass:"right-box"},[e("img",{staticClass:"image",attrs:{src:s("9ffb"),alt:""}})])])]),e("swiper-slide",{staticStyle:{"background-color":"#7fc322"}},[e("div",{staticClass:"flex"},[e("p",[e("a",{attrs:{href:"mailto:lntongwei@gmail.com"}},[t._v("lntongwei@gmail.com")])])])]),e("swiper-slide",{staticStyle:{"background-color":"#2fc322"}}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)}),w=[],g=s("7212"),_=(s("a7a3"),s("313e")),b=s.n(_),x=(s("77ed"),{name:"swiper-example-mousewheel-control",title:"Mousewheel control",components:{Swiper:g["Swiper"],SwiperSlide:g["SwiperSlide"]},data(){return{swiperOption:{direction:"vertical",slidesPerView:1,spaceBetween:0,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}},navData:[{name:"Home",path:"Home"},{name:"Bio",path:"Bio"},{name:"Contact",path:"Contact"},{name:"Media",path:"Media"}]}},methods:{setEchart(){let t=b.a.init(this.$refs.echart);t.setOption({tooltip:{trigger:"axis"},radar:[{indicator:[{text:"Vue",max:100},{text:"微信小程序",max:100},{text:"HTML",max:100},{text:"css",max:100},{text:"JavaScript",max:100}],center:["50%","50%"],radius:150}],series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:[{value:[80,60,70,70,70],name:"能力值"}]}],textStyle:{color:"rgba(255,255,255,1)",fontSize:22}})},goto(t){this.$refs.swiper.$swiper.slideTo(t,1e3,!1)}},mounted(){this.$nextTick((function(){this.setEchart()}))}}),C=x,y=(s("61f0"),Object(r["a"])(C,m,w,!1,null,"652b1892",null)),S=y.exports;a["default"].use(d["a"]);const O=[{path:"/",name:"swiper",component:S}],j=new d["a"]({routes:O});var L=j,P=s("2f62");a["default"].use(P["a"]);var N=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].config.productionTip=!1,a["default"].use(b.a),new a["default"]({router:L,store:N,render:t=>t(c)}).$mount("#app")},"61f0":function(t,e,s){"use strict";s("07fe")},"9ffb":function(t,e,s){t.exports=s.p+"img/person.4da6c47e.webp"},f47d9:function(t,e,s){},f700:function(t,e,s){}});
//# sourceMappingURL=app.test.1694075185027.js.map