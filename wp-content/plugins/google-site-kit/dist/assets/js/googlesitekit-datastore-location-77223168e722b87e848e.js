(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[10],{1036:function(t,n,r){"use strict";r.r(n);var e=r(4),o=r.n(e),c=r(32),a=r(744),i=o.a.combineStores(o.a.commonStore,a.a);i.initialState,i.actions,i.controls,i.reducer,i.resolvers,i.selectors;o.a.registerStore(c.a,i)},32:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var e="core/location"},4:function(t,n){t.exports=googlesitekit.data},744:function(t,n,r){"use strict";(function(t){var e=r(6),o=r.n(e),c=r(5),a=r.n(c),i=r(11),u=r.n(i),s=r(80);function f(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function l(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){o()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var p={navigatingTo:void 0},v={navigateTo:Object(s.f)((function(t){var n=!1;try{n=new URL(t)}catch(t){}u()(!!n,"url must be a valid URI.")}),a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={url:n},t.next=3,{type:"SET_NAVIGATING_TO",payload:r};case 3:return t.next=5,{type:"DO_NAVIGATE_TO",payload:r};case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))},g=o()({},"DO_NAVIGATE_TO",(function(n){var r=n.payload;t.location.assign(r.url)}));var d={isNavigating:function(t){return!!t.navigatingTo},isNavigatingTo:function(t,n){var r=t.navigatingTo;return u()("string"==typeof n||n instanceof RegExp,"url must be either a string or a regular expression."),"string"==typeof n?r===n:n.test(r)},getNavigateURL:function(t){return t.navigatingTo||null}};n.a={initialState:p,actions:v,controls:g,reducer:function(t,n){var r=n.type,e=n.payload;switch(r){case"SET_NAVIGATING_TO":return l(l({},t),{},{navigatingTo:e.url});default:return t}},resolvers:{},selectors:d}}).call(this,r(26))},80:function(t,n,r){"use strict";r.d(n,"a",(function(){return P})),r.d(n,"b",(function(){return _})),r.d(n,"c",(function(){return E})),r.d(n,"d",(function(){return G})),r.d(n,"e",(function(){return I})),r.d(n,"g",(function(){return N})),r.d(n,"f",(function(){return R}));var e,o=r(5),c=r.n(o),a=r(28),i=r.n(a),u=r(6),s=r.n(u),f=r(11),l=r.n(f),p=r(78),v=r.n(p),g=r(13),d=r(129);function y(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function b(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){s()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var O=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.reduce((function(t,n){return b(b({},t),n)}),{}),o=n.reduce((function(t,n){return[].concat(i()(t),i()(Object.keys(n)))}),[]),c=k(o);return l()(0===c.length,"collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(c.join(", "),". Check your data stores for duplicates.")),e},w=O,h=O,j=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e,o=[].concat(n);return"function"!=typeof o[0]&&(e=o.shift()),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.reduce((function(t,r){return r(t,n)}),t)}},T=O,m=O,S=O,A=function(t){return t},P=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=S.apply(void 0,i()(n.map((function(t){return t.initialState||{}}))));return{initialState:e,controls:h.apply(void 0,i()(n.map((function(t){return t.controls||{}})))),actions:w.apply(void 0,i()(n.map((function(t){return t.actions||{}})))),reducer:j.apply(void 0,[e].concat(i()(n.map((function(t){return t.reducer||A}))))),resolvers:T.apply(void 0,i()(n.map((function(t){return t.resolvers||{}})))),selectors:m.apply(void 0,i()(n.map((function(t){return t.selectors||{}}))))}},_={getRegistry:function(){return{payload:{},type:"GET_REGISTRY"}},await:c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{payload:{value:n},type:"AWAIT"});case 1:case"end":return t.stop()}}),t)}))},E=(e={},s()(e,"GET_REGISTRY",Object(d.a)((function(t){return function(){return t}}))),s()(e,"AWAIT",(function(t){return t.payload.value})),e),k=function(t){for(var n=[],r={},e=0;e<t.length;e++){var o=t[e];r[o]=r[o]>=1?r[o]+1:1,r[o]>1&&n.push(o)}return n},G={actions:_,controls:E,reducer:A},I=function(t){return function(n){return D(t(n))}},D=v()((function(t){return Object(g.mapValues)(t,(function(t,n){return function(){var r=t.apply(void 0,arguments);return l()(void 0!==r,"".concat(n,"(...) is not resolved")),r}}))}));function N(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.negate,e=void 0!==r&&r,o=Object(d.b)((function(n){return function(r){var o=!e,c=!!e;try{for(var a=arguments.length,i=new Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=arguments[u];return t.apply(void 0,[n,r].concat(i)),o}catch(t){return c}}})),c=Object(d.b)((function(n){return function(r){for(var e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];t.apply(void 0,[n,r].concat(o))}}));return{safeSelector:o,dangerousSelector:c}}function R(t,n){return l()("function"==typeof t,"a validator function is required."),l()("function"==typeof n,"an action creator function is required."),l()("Generator"!==t[Symbol.toStringTag]&&"GeneratorFunction"!==t[Symbol.toStringTag],"an action’s validator function must not be a generator."),function(){return t.apply(void 0,arguments),n.apply(void 0,arguments)}}}},[[1036,1,0]]]);