(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1692904"],{"94aa":function(t,e,a){},"99ad":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-parallax",{attrs:{width:"300",src:"https://github.com/yud0uhu/vue-blog/blob/master/frontend/src/assets/bg.png?raw=true"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[t._v(" "+t._s(t.article.title)+" ")]),a("h4",{staticClass:"subheading"},[t._v(" "+t._s(t.article.summary)+" ")])])],1)],1),a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"text--primary"},[a("div",{staticClass:"text-h6 font-weight-regular grey--text"},[t._v(" "+t._s(t.article.updata)+" ")]),a("div",[t._v(" "+t._s(t.article.contents)+" ")])])],1)],1)},s=[],n=a("1da1"),r=(a("96cf"),a("bc3a")),l=a.n(r),o={name:"ArticleDetail",metaInfo:{title:"記事詳細",titleTemplate:"記事詳細ページです"},data:function(){return{article:[]}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://flyingcat.microcms.io/api/v1/articles/"+t.$route.params["id"],{headers:{"X-API-KEY":"3fcabaf9-e211-4f84-aa89-c627cac3d947"}});case 2:a=e.sent,t.article=a.data;case 4:case"end":return e.stop()}}),e)})))()}},c=o,h=a("2877"),d=a("6544"),u=a.n(d),p=a("b0af"),f=a("99d9"),g=a("62ad"),m=(a("a9e3"),a("94aa"),a("2b0e")),w=m["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),v=a("58df"),x=Object(v["a"])(w),b=x.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[a,i])}}),_=a("0fd9"),y=Object(h["a"])(c,i,s,!1,null,null,null);e["default"]=y.exports;u()(y,{VCard:p["a"],VCardText:f["b"],VCol:g["a"],VParallax:b,VRow:_["a"]})}}]);
//# sourceMappingURL=chunk-c1692904.132fd6f7.js.map