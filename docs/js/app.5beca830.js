(function(t){function e(e){for(var i,o,a=e[0],l=e[1],c=e[2],p=0,f=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuestagram/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b1":function(t,e,n){"use strict";var i=n("7f46"),s=n.n(i);s.a},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[t.step>0?i("ul",{staticClass:"header-button-left"},[i("li",{on:{click:function(e){t.step--}}},[t._v("Cancel")])]):t._e(),i("img",{staticClass:"logo",attrs:{src:n("cf05")}}),1==t.step?i("ul",{staticClass:"header-button-right"},[i("li",{on:{click:function(e){t.step++}}},[t._v("Next")])]):t._e(),2==t.step?i("ul",{staticClass:"header-button-right"},[i("li",{on:{click:t.publish}},[t._v("Publish")])]):t._e()]),i("Body",{attrs:{newFilter:t.newFilter,Postings:t.Postings,step:t.step,imgsrc:t.imgsrc},on:{textwrite:function(e){t.textWrite=e}}}),0==t.step?i("button",{on:{click:t.showMore}},[t._v("더보기")]):t._e(),0==t.step?i("div",{staticClass:"footer"},[i("ul",{staticClass:"footer-button-plus"},[i("input",{staticClass:"inputfile",attrs:{type:"file",id:"file"},on:{change:t.upload}}),i("label",{staticClass:"input-plus",attrs:{for:"file"}},[t._v("+")])])]):t._e()],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[0==t.step?n("div",t._l(t.Postings,(function(e,i){return n("Post",{key:i,attrs:{Postings:t.Postings[i],newFilter:t.newFilter,num:i}})})),1):t._e(),1==t.step?n("div",[n("div",{class:"upload-image "+t.newFilter,style:"background-image:url( "+t.imgsrc+" )"}),n("div",{staticClass:"filters"},t._l(t.filterName,(function(e,i){return n("FilterBox",{key:i,attrs:{filterName:t.filterName[i],imgsrc:t.imgsrc}},[n("p",{staticClass:"filterTitle"},[t._v(t._s(t.filterName[i]))])])})),1)]):t._e(),2==t.step?n("div",[n("div",{class:"upload-image "+t.newFilter,style:"background-image:url( "+t.imgsrc+" )"}),n("div",{staticClass:"write"},[n("textarea",{staticClass:"write-box",on:{input:function(e){return t.$emit("textwrite",e.target.value)}}},[t._v("write!")])])]):t._e()])},a=[],l=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("div",{staticClass:"post-header"},[n("div",{staticClass:"profile",style:"background-image:url("+t.Postings.userImage+")"}),n("span",{staticClass:"profile-name"},[t._v(t._s(t.Postings.name))])]),n("div",{class:"post-body "+t.Postings.filter,style:"background-image:url("+t.Postings.postImage+")"}),n("div",{staticClass:"post-content"},[n("button",{on:{click:t.likeCounter}},[t._v(t._s(t.Postings.likes)+" Likes")]),n("p",[n("strong",[t._v(t._s(t.Postings.name))]),t._v(" "+t._s(t.Postings.caption)+" ")]),n("p",{staticClass:"date"},[t._v("May 14")])])])}),c=[],u=new i["a"],p={props:{Postings:Object,newFilter:String,num:Number},data:function(){return{}},methods:{likeCounter:function(){u.$emit("cont",1,this.num)}}},f=p,g=(n("02b1"),n("2877")),d=Object(g["a"])(f,l,c,!1,null,null,null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:"filter-item "+t.filterName,style:"background-image:url("+t.imgsrc+")",on:{click:t.filterClick}},[t._t("default")],2)])},v=[],b={props:{imgsrc:String,filterName:String},methods:{filterClick:function(){u.$emit("sa",this.filterName)}}},w=b,_=(n("dd09"),Object(g["a"])(w,h,v,!1,null,null,null)),y=_.exports,k={props:{Postings:Array,step:Number,imgsrc:String,newFilter:String},components:{Post:m,FilterBox:y},data:function(){return{filterName:["normal","clarendon","gingham","moon","lark","reyes","juno","slumber","aden","perpetua","mayfair","rise","hudson","valencia","xpro2","willow","lofi","inkwell","nashville"]}},methods:{translate:function(t){u.$emit("tran",t.target.value)}}},P=k,C=(n("ed04"),Object(g["a"])(P,o,a,!1,null,null,null)),x=C.exports,j=[{name:"Kimhyukmin",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,caption:"오늘 무엇을 했냐면요 😫 아무것도 안했어요.",filter:"perpetua"},{name:"Dangun",userImage:"https://placeimg.com/200/200/arch",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,caption:"Do you even lift, bro?",filter:"clarendon"},{name:"Mungmung",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,caption:"고양이 멍뭉이",filter:"lofi"}],O=n("bc3a"),F=n.n(O),N={name:"App",data:function(){return{step:0,imgsrc:"",Postings:j,textData:"",textWrite:"",newFilter:"",trans:""}},components:{Body:x},methods:{showMore:function(){var t=this;F.a.get("https://yogoho210.github.io/postdata2.json").then((function(e){t.Postings.push(e.data)})).catch((function(){console.log("에러났어요")}))},upload:function(t){var e=this;this.step=this.step+1;var n=t.target.files,i=new FileReader;i.readAsDataURL(n[0]),i.onload=function(t){e.imgsrc=t.target.result}},publish:function(){this.step=0;var t={name:"myName",userImage:"https://placeimg.com/100/100/arch",postImage:this.imgsrc,likes:0,date:"May 15",liked:!1,caption:this.textWrite,filter:this.newFilter};this.Postings.unshift(t),this.textWrite=""}},mounted:function(){var t=this;u.$on("sa",(function(e){t.newFilter=e})),u.$on("tran",(function(e){t.trans=e})),u.$on("cont",(function(e,n){t.Postings[n].likes=t.Postings[n].likes+e}))}},S=N,$=(n("034f"),Object(g["a"])(S,s,r,!1,null,null,null)),I=$.exports,M=(n("b0c0"),n("2f62"));i["a"].use(M["a"]);var A=new M["a"].Store({state:{name:"John",age:30},getters:{getAge:function(t){return t.age}},mutations:{changeName:function(t,e){t.name=e},agePlus:function(t){t.age++}},actions:{}}),B=n("9483");Object(B["a"])("".concat("/vuestagram/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["a"].config.productionTip=!1,new i["a"]({store:A,render:function(t){return t(I)}}).$mount("#app")},"7f46":function(t,e,n){},"85ec":function(t,e,n){},c56e:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},db6a:function(t,e,n){},dd09:function(t,e,n){"use strict";var i=n("c56e"),s=n.n(i);s.a},ed04:function(t,e,n){"use strict";var i=n("db6a"),s=n.n(i);s.a}});
//# sourceMappingURL=app.5beca830.js.map