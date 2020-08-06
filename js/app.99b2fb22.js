(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/job-listings-with-filtering/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("section",{directives:[{name:"show",rawName:"v-show",value:t.filters.length>0,expression:"filters.length > 0"}],staticClass:"filters"},[n("ul",{staticClass:"filters-list"},t._l(t.filters,(function(e){return n("li",{key:e.id,staticClass:"filter"},[t._v(" "+t._s(e)+" "),n("img",{staticClass:"filter-close",attrs:{src:"images/icon-remove.svg",alt:"Remove filter icon"},on:{click:function(n){return t.removeFilter(e)}}})])})),0),n("a",{staticClass:"filters-button",on:{click:t.clearFilters}},[t._v("Clear")])])]),n("main",{staticClass:"jobs"},t._l(t.filteredJobs,(function(e){return n("div",{key:e.id,staticClass:"job"},[n("section",{staticClass:"job-content"},[n("img",{staticClass:"job-logo",attrs:{src:e.logo,alt:e.company+" logo"}}),n("div",{staticClass:"job-info"},[n("div",{staticClass:"info"},[n("p",{staticClass:"job-company"},[t._v(t._s(e.company))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.new,expression:"jobData.new"}],staticClass:"badge badge-new"},[n("p",{staticClass:"badge-title"},[t._v(" New! ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.featured,expression:"jobData.featured"}],staticClass:"badge"},[n("p",{staticClass:"badge-title"},[t._v(" Featured ")])])]),n("h1",{staticClass:"job-position"},[t._v(t._s(e.position))]),n("ul",{staticClass:"job-listing"},[n("li",{staticClass:"job-posted"},[t._v(t._s(e.postedAt))]),n("li",{staticClass:"job-contract"},[t._v(t._s(e.contract))]),n("li",{staticClass:"job-location"},[t._v(t._s(e.location))])])])]),n("section",{staticClass:"job-requirements"},[n("p",{staticClass:"requirement",on:{click:function(n){return t.addFilter(e.role)}}},[t._v(t._s(e.role))]),n("p",{staticClass:"requirement",on:{click:function(n){return t.addFilter(e.level)}}},[t._v(t._s(e.level))]),t._l(e.languages,(function(e){return n("p",{key:e.id,staticClass:"requirement",on:{click:function(n){return t.addFilter(e)}}},[t._v(" "+t._s(e)+" ")])})),t._l(e.tools,(function(e){return n("p",{key:e.id,staticClass:"requirement",on:{click:function(n){return t.addFilter(e)}}},[t._v(" "+t._s(e)+" ")])}))],2)])})),0)])},r=[],a=(n("99af"),n("a623"),n("4de4"),n("c740"),n("caad"),n("a434"),n("d3b7"),n("2532"),n("2909")),o={name:"App",data:function(){return{dataList:[],filters:[]}},computed:{filteredJobs:function(){var t=this;return 0==this.filters.length?this.dataList:this.dataList.filter((function(e){var n=[e.role,e.level].concat(Object(a["a"])(e.tools),Object(a["a"])(e.languages));return t.filters.every((function(t){return n.includes(t)}))}))}},beforeMount:function(){this.getData()},methods:{getData:function(){var t=this;fetch("data.json").then((function(t){return t.json()})).then((function(e){return t.dataList=e}))},addFilter:function(t){this.filters.includes(t)||this.filters.push(t)},removeFilter:function(t){var e=this.filters.findIndex((function(e){return e===t}));e<=-1||this.filters.splice(e,1)},clearFilters:function(){this.filters=[]}}},l=o,c=n("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null),f=u.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.99b2fb22.js.map