webpackJsonp([4],{"0GOn":function(t,a){},"9V1R":function(t,a){},OBVH:function(t,a,s){"use strict";var e=s("1pQF"),i=s("viA7"),r={name:"Share",data:function(){return{queryParams:{pageNum:1,pageSize:10,categoryId:0},articleList:[],hasMore:!0}},methods:{showInitDate:function(t,a){return Object(e.a)(t,a)},getList:function(){var t=this;Object(i.a)(this.queryParams).then(function(a){a.rows.forEach(function(a){a.thumbnail&&(a.thumbnail=t.replaceThumbnailUrl(a.thumbnail))}),t.articleList=t.articleList.concat(a.rows),a.total<=t.articleList.length?t.hasMore=!1:(t.hasMore=!0,t.queryParams.pageNum++)})},showSearchShowList:function(t){t&&(this.articleList=[]),this.getList()},addMoreFun:function(){this.showSearchShowList(!1)},routeChange:function(){this.queryParams.categoryId=void 0==this.$route.query.classId?0:parseInt(this.$route.query.classId),this.showSearchShowList(!0)},replaceThumbnailUrl:function(t){return t.startsWith("http://sg91jaw0w.hn-bkt.clouddn.com")?t.replace("http://sg91jaw0w.hn-bkt.clouddn.com","https://front.lovewx.cc/images"):t}},components:{},watch:{$route:"routeChange","$store.state.keywords":"routeChange"},created:function(){this.routeChange()}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-row",{staticClass:"sharelistBox"},[t._l(t.articleList,function(a,e){return s("el-col",{key:"article"+e,staticClass:"s-item tcommonBox",attrs:{span:24}},[s("span",{staticClass:"s-round-date"},[s("span",{staticClass:"month",domProps:{innerHTML:t._s(t.showInitDate(a.createTime,"month")+"月")}}),t._v(" "),s("span",{staticClass:"day",domProps:{innerHTML:t._s(t.showInitDate(a.createTime,"date"))}})]),t._v(" "),s("header",[s("h1",[s("a",{attrs:{href:"#/DetailArticle?aid="+a.id,target:"_blank"}},[t._v("\n          "+t._s(a.title)+"\n        ")])]),t._v(" "),s("h2",[s("i",{staticClass:"fa fa-fw fa-user"}),t._v("发表于\n        "),s("i",{staticClass:"fa fa-fw fa-clock-o"}),s("span",{domProps:{innerHTML:t._s(t.showInitDate(a.createTime,"all"))}},[t._v(t._s(t.showInitDate(a.createTime,"all")))]),t._v(" •\n        "),s("i",{staticClass:"fa fa-fw fa-eye"}),t._v(t._s(a.viewCount)+" 次围观 •\n\n      ")]),t._v(" "),s("div",{staticClass:"ui label"},[s("a",{attrs:{href:"#/Share?classId="+a.class_id}},[t._v(t._s(a.categoryName))])])]),t._v(" "),s("div",{staticClass:"article-content"},[s("p",{staticStyle:{"text-indent":"2em"}},[t._v("\n        "+t._s(a.summary)+"\n      ")]),t._v(" "),s("p",{staticStyle:{"max-height":"300px",overflow:"hidden","text-align":"center"}},[s("img",{staticClass:"maxW",attrs:{src:a.thumbnail,alt:""}})])]),t._v(" "),s("div",{staticClass:"viewdetail"},[s("a",{staticClass:"tcolors-bg",attrs:{href:"#/DetailArticle?aid="+a.id}},[t._v("\n        阅读全文>>\n      ")])])])}),t._v(" "),s("el-col",{staticClass:"viewmore"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}],staticClass:"tcolors-bg",attrs:{href:"javascript:void(0);"},on:{click:t.addMoreFun}},[t._v("点击加载更多")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore,expression:"!hasMore"}],staticClass:"tcolors-bg",attrs:{href:"javascript:void(0);"}},[t._v("暂无更多数据")])])],2)},staticRenderFns:[]};var o=s("VU/8")(r,n,!1,function(t){s("0GOn")},null,null);a.a=o.exports},zJHd:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Cz8s"),i=s("OBVH"),r=s("MQwy"),n={name:"Share",data:function(){return{}},methods:{},components:{"sg-nav":e.a,"sg-articlelist":i.a,"sg-rightlist":r.a},created:function(){}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("sg-nav"),this._v(" "),a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{staticStyle:{transition:"all .5s ease-out","margin-bottom":"30px"},attrs:{sm:24,md:16}},[a("sg-articlelist")],1),this._v(" "),a("el-col",{attrs:{sm:24,md:8}},[a("sg-rightlist")],1)],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(n,o,!1,function(t){s("9V1R")},null,null);a.default=c.exports}});