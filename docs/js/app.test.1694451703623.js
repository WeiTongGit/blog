(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1300:function(t,e,i){t.exports=i.p+"media/test.b1bc0720.mp3"},"1e9a":function(t,e,i){"use strict";i("f47d")},"39d9":function(t,e,i){t.exports=i.p+"img/background.13e2084a.webp"},"4c8f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(i("59b2"),i("2877")),o={},l=Object(r["a"])(o,a,n,!1,null,null,null),c=l.exports,d=i("8c4f"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("article",{ref:"sec",staticClass:"section",attrs:{id:"sec"},on:{wheel:function(e){return e.preventDefault(),t.handleScroll.apply(null,arguments)}}},[e("section",{staticClass:"a0"}),e("section",{staticClass:"a1"}),e("section",{staticClass:"a2"}),e("section",{staticClass:"a3"}),e("section",{staticClass:"a4"}),e("section",{staticClass:"a5"}),e("section",{staticClass:"a6"})]),e("div",{staticClass:"nav"},[e("ul",{ref:"nav",attrs:{id:"nav"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])},p=[function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("span")])])}],h={data(){return{index:0}},watch:{index:function(){let t=this.$refs.nav.childNodes,e=this.$refs.sec.childNodes;for(let i=0;i<t.length;i++)i==this.index?t[i].childNodes[0].childNodes[0].classList.add("n_native"):"item"!=i&&t[i].childNodes[0].childNodes[0].classList.remove("n_native");for(let i=0;i<e.length;i++)i==this.index?(e[i].classList.remove("leaving"),e[i].classList.add("s_native")):(e[i].classList.remove("s_native"),e[i].classList.add("leaving"))}},methods:{handleScroll(t){t.deltaY>0?6==this.index?this.index=0:this.index=this.index+1:0==this.index?this.index=6:this.index=this.index-1,console.log(this.index)}},mounted(){console.log(this.$refs.sec);let t=this.$refs.nav.childNodes,e=this.$refs.sec.childNodes;t[0].childNodes[0].childNodes[0].classList.add("n_native");for(let i=0;i<e.length;i++)0==i?e[i].classList.add("s_native"):e[i].classList.add("leaving")}},f=h,m=(i("1e9a"),Object(r["a"])(f,u,p,!1,null,"1950ed62",null)),v=(m.exports,function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[t._m(0),e("div",{staticClass:"nav-box"},t._l(t.navData,(function(i,s){return e("div",{key:i.path,staticClass:"nav-item-box",class:t.swiper_index===s?"item-active":"",on:{click:function(e){return t.goto(s)}}},[t._v(" "+t._s(i.name)+" ")])})),0),e("swiper",{ref:"swiper",staticClass:"swiper swiper-no-swiping",attrs:{options:t.swiperOption}},[e("swiper-slide",[e("div",{staticClass:"author-box"},[e("div",{staticClass:"author"},[t._v("lntongwei")]),e("div",{staticClass:"job"},[t._v("Jazz Musician, Trumpeter")])])]),e("swiper-slide",[e("div",{staticClass:"content-box"},[e("div",{staticClass:"left-box"},[e("div",{staticClass:"text"},[t._v(" Since 1998, Jeb Patton has toured throughout the United States and abroad as the pianist with the Heath Brothers and the Jimmy Heath Quartet. He has performed with Etta Jones, George Coleman, Charles McPherson, Winard Harper, Rodney Green, Antonio Hart, the Dizzy Gillespie All Stars, The Vanguard Jazz Orchestra, Roberta Gambarini, Peter and Will Anderson, as well as with other top artists. "),e("br"),e("br"),t._v("Jeb’s latest two CDs, Tenthish and Shades and Tones, were released in 2018 and 2016 respectively on the Cellar Live label. Jeb’s is also a published author, educator and professor at Queens College and City College. ")])]),e("div",{staticClass:"right-box"},[e("img",{staticClass:"image",attrs:{src:i("9ffb"),alt:""}})])])]),e("swiper-slide",[e("div",{staticClass:"flex"},[e("p",{staticClass:"info-box"},[e("a",{staticClass:"email",attrs:{href:"mailto:lntongwei@gmail.com"}},[t._v("lntongwei@gmail.com")])])])]),e("swiper-slide",[e("div",{staticClass:"audio-box",on:{click:function(e){return t.stop(e)},mousemove:function(e){return t.stop(e)}}},[e("div",{staticStyle:{width:"100%",margin:"0"},attrs:{id:"aplayer"}}),e("video",{staticClass:"video-box",attrs:{controls:""}},[e("source",{attrs:{src:i("f911")}}),t._v(" 您的浏览器不支持 video 元素。 ")])])])],1)],1)}),g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"background"},[e("img",{staticClass:"bg-image",attrs:{src:i("39d9"),width:"1920",height:"1920",fetchpriority:"high"}})])}],b=i("7212"),w=(i("a7a3"),i("9f61")),x=i.n(w);i("764d"),i("77ed");let _;var C={name:"swiper-example-mousewheel-control",title:"Mousewheel control",components:{Swiper:b["Swiper"],SwiperSlide:b["SwiperSlide"]},props:{isShowAudioPlayer:{default:!0},list:{default:function(){return[{id:1,name:"美人鱼",url:i("1300"),cover:"ChenYou",singer:"林俊杰"},{id:2,name:"起风了",url:i("1300"),cover:"ChenYou",singer:"林俊杰"}]}}},data(){return{swiper_index:0,swiperOption:{direction:"vertical",preventLinksPropagation:!1,slidesPerView:1,spaceBetween:0,mousewheel:!0,on:{slideChangeTransitionEnd:function(){_.swiper_index=this.activeIndex,console.log(this.activeIndex)}}},navData:[{name:"Home",path:"Home"},{name:"Bio",path:"Bio"},{name:"Contact",path:"Contact"},{name:"Media",path:"Media"}],audio:[{name:"Enter Hallownest",artist:"Christopher Larkin",url:i("1300"),cover:"http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg",lrc:"",theme:"rgb(127, 218, 180)"},{name:"Dirtmouth",artist:"Christopher Larkin",url:i("b9fc"),cover:"http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",lrc:"",theme:"rgb(61, 162, 230)"},{name:"Crossroads",artist:"Christopher Larkin",url:i("a73d"),cover:"http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",lrc:"",theme:"#baf"}],info:{fixed:!1,listFolded:!1,autoplay:!1,preload:"auto",loop:"all",order:"list"}}},methods:{setEchart(){let t=echarts.init(this.$refs.echart);t.setOption({tooltip:{trigger:"axis"},radar:[{indicator:[{text:"Vue",max:100},{text:"微信小程序",max:100},{text:"HTML",max:100},{text:"css",max:100},{text:"JavaScript",max:100}],center:["50%","50%"],radius:150}],series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:[{value:[80,60,70,70,70],name:"能力值"}]}],textStyle:{color:"rgba(255,255,255,1)",fontSize:22}})},initAudio(){new x.a({container:document.getElementById("aplayer"),audio:this.audio,...this.info})},goto(t){this.swiper_index=t,this.$refs.swiper.$swiper.slideTo(t,1e3,!1)},stop(t){t.stopPropagation()}},mounted(){_=this,this.initAudio()}},y=C,S=(i("c1c5"),Object(r["a"])(y,v,g,!1,null,"77e57a88",null)),O=S.exports;s["default"].use(d["a"]);const j=[{path:"/",name:"swiper",component:O}],k=new d["a"]({routes:j});var L=k,P=i("2f62");s["default"].use(P["a"]);var J=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:L,store:J,render:t=>t(c)}).$mount("#app")},"59b2":function(t,e,i){"use strict";i("4c8f")},"9ffb":function(t,e,i){t.exports=i.p+"img/person.4da6c47e.webp"},a73d:function(t,e,i){t.exports=i.p+"media/test3.91535ebd.mp3"},b9fc:function(t,e,i){t.exports=i.p+"media/test2.b2c8348e.mp3"},c1c5:function(t,e,i){"use strict";i("e73a")},e73a:function(t,e,i){},f47d:function(t,e,i){},f911:function(t,e,i){t.exports=i.p+"media/test2.78f4b79b.mp4"}});
//# sourceMappingURL=app.test.1694451703623.js.map