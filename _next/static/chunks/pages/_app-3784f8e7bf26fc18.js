(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(5656)}])},7902:function(t,n,e){"use strict";e.d(n,{s:function(){return o},F:function(){return u}});var i=e(5893),s=e(7294),r=(0,s.createContext)({}),o=function(t){var n=t.children,e=(0,s.useState)([]),o=e[0],u=e[1],p=(0,s.useState)(0),g=p[0],c=p[1],f=(0,s.useState)(!1),a=f[0],h=f[1],l=(0,s.useState)(!1),S=l[0],L=l[1],m=function(t){u(t),c(t.length),L(!S),sessionStorage.setItem("shoppingList",JSON.stringify({shoppingListItems:t})),sessionStorage.setItem("shoppingListLength",JSON.stringify(t.length))};return(0,s.useEffect)((function(){var t=JSON.parse(sessionStorage.getItem("shoppingList")||"{}"),n=JSON.parse(sessionStorage.getItem("shoppingListLength")||"0");void 0!==t.shoppingListItems&&u(t.shoppingListItems),null!==n&&c(n)}),[]),(0,i.jsx)(r.Provider,{value:{removeFromShoppingList:function(t){var n=o.filter((function(n){return n.url!==t.url}));m(n)},resetShoppingList:function(){u([]),c(0),h(!1),sessionStorage.setItem("shoppingList",JSON.stringify({})),sessionStorage.setItem("shoppingListLength",JSON.stringify("0"))},toggleShoppingList:function(){h(!a)},addToShoppingList:function(t){o.push(t),m(o)},isInShoppingList:function(t){return o.filter((function(n){return n.url===t})).length>0},shoppingListLength:g,shoppingList:o,shoppingListVisible:a,animate:S,setSessionState:m,setShoppingList:u,setShoppingListLength:c},children:n})},u=function(){return(0,s.useContext)(r)}},5656:function(t,n,e){"use strict";e.r(n);var i=e(5893),s=(e(4831),e(7902));function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),i.forEach((function(n){r(t,n,e[n])}))}return t}n.default=function(t){var n=t.Component,e=t.pageProps;return(0,i.jsx)(s.s,{children:(0,i.jsx)(n,o({},e))})}},4831:function(){}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,179],(function(){return n(6363),n(387)}));var e=t.O();_N_E=e}]);