(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{4372:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[meal]",function(){return n(142)}])},142:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSG:function(){return j},default:function(){return v}});var t=n(5893),_=n(7294),l=n(46),i=n(4504),r=n(253),s=n(3157),c=n(9566),m=n.n(c),o=function(e){var a=e.children,n=(0,_.useState)("tab0"),l=n[0],i=n[1],r=function(e,a){e.preventDefault(),function(e){i(e)}(a)};return(0,t.jsxs)("div",{children:[(0,t.jsx)("ul",{className:m().tab__nav,role:"presentation",children:_.Children.map(a,(function(e,a){var n=e,_=l==="tab".concat(a),i="tab".concat(a);return(0,t.jsx)("li",{className:m().tab,role:"presentation",children:(0,t.jsx)("a",{className:"".concat(m().tab__link," ").concat(_?m()["tab__link--active"]:""),onClick:function(e){return r(e,i)},role:"tab",href:"#".concat(i),"aria-controls":i,"aria-selected":_,tabIndex:l===i?0:-1,children:n.props.title})})}))}),_.Children.map(a,(function(e,a){var n=l==="tab".concat(a),_="tab".concat(a);return(0,t.jsx)("div",{id:_,"aria-labelledby":_,"aria-hidden":!n,role:"tabpanel",className:"".concat(m().tab__content," ").concat(n?m()["tab__content--active"]:""),children:e})}))]})},d=function(e){var a=e.children;return(0,t.jsx)(t.Fragment,{children:a})},u=n(1664),h=n(2573),b=n.n(h),f=function(e){var a=e.name,n=e.url;return(0,t.jsx)("nav",{"aria-label":"Breadcrumb",className:b().breadcrumb,children:(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(u.default,{href:"/meal-picker",children:(0,t.jsx)("a",{children:"All Meals"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(u.default,{href:"/meal-picker".concat(n),children:(0,t.jsx)("a",{"aria-current":"page",children:a})})})]})})},x=n(8225),p=n.n(x),g=function(e){var a=e.meal,n=(0,_.useContext)(i.V),l=n.isInShoppingList,c=n.removeFromShoppingList,m=n.addToShoppingList;return(0,t.jsxs)(r.r,{children:[(0,t.jsx)(f,{name:a.name,url:a.url}),(0,t.jsxs)("div",{className:p().meal__grid,children:[(0,t.jsxs)("div",{className:p().meal__summary,children:[(0,t.jsxs)("div",{className:p().meal__text,children:[(0,t.jsx)("h2",{className:p().meal__title,children:a.name}),(0,t.jsxs)("ul",{className:p()["meal__info-list"],children:[(0,t.jsxs)("li",{className:p().meal__info,children:[a.time," minutes"]}),a.serves&&(0,t.jsxs)("li",{className:p().meal__info,children:["Serves ",a.serves]})]}),(0,t.jsx)("button",{"data-test-id":l(a.url)?"remove-from-shopping-list":"add-to-shopping-list",className:"".concat(p().meal__btn," ").concat(l(a.url)?p()["meal__btn--remove"]:""),onClick:function(){return l(a.url)?c(a):m(a)},children:l(a.url)?"- Remove from shopping list":"+ Add to shopping list"})]}),(0,t.jsxs)("div",{className:p()["meal__img-container"],children:[(0,t.jsx)("img",{className:p().meal__img,src:a.img?a.img:"meal-placeholder.webp",alt:a.name,width:"375",height:"250"}),(0,t.jsx)("span",{className:p().meal__type,children:a.type})]})]}),(0,t.jsx)("div",{className:p().meal__ingredients,children:(0,t.jsxs)(o,{children:[(0,t.jsx)(d,{title:"Ingredients",children:(0,t.jsx)("ul",{className:p()["meal__ingredients-list"],children:a.ingredients.map((function(e){return(0,t.jsx)(s.o,{ingredient:e},"ingredient-".concat(e.name))}))})}),(0,t.jsx)(d,{title:"Method",children:a.method?(0,t.jsx)("ol",{className:p()["meal__method-list"],children:a.method.map((function(e,a){return(0,t.jsx)("li",{className:p()["meal__method-item"],children:e},"step-".concat(a))}))}):(0,t.jsx)("p",{children:"No method availabe"})})]})})]})]})},v=function(e){var a={url:e.url,name:e.name,img:e.img,time:e.time,serves:e.serves,type:e.type,ingredients:e.ingredients,method:e.method};return(0,t.jsx)(l.A,{children:(0,t.jsx)(g,{meal:a})})},j=!0},2573:function(e){e.exports={breadcrumb:"Breadcrumb_breadcrumb__a2wU1"}},8225:function(e){e.exports={meal__title:"Meal_meal__title__C9mWC",meal__ingredients:"Meal_meal__ingredients__6VoX7","meal__ingredients-title":"Meal_meal__ingredients-title__Fcc1o",meal__grid:"Meal_meal__grid__fn_jA",meal__summary:"Meal_meal__summary__fVqgG",meal__text:"Meal_meal__text__aGV4K","meal__img-container":"Meal_meal__img-container__LezIY",meal__img:"Meal_meal__img__SZYqW",meal__info:"Meal_meal__info__FmXUQ","meal__info-list":"Meal_meal__info-list__V_TL6","meal__ingredients-list":"Meal_meal__ingredients-list__9fDuF","meal__method-item":"Meal_meal__method-item__d4wEQ",meal__btn:"Meal_meal__btn__dfPKX","meal__btn--remove":"Meal_meal__btn--remove__VRtWy",meal__type:"Meal_meal__type__K2Q0J"}},9566:function(e){e.exports={tab:"Tabs_tab___0OPZ",tab__nav:"Tabs_tab__nav__XM2FR",tab__link:"Tabs_tab__link__VfKaT","tab__link--active":"Tabs_tab__link--active__EsZgM",tab__content:"Tabs_tab__content__frSB9","tab__content--active":"Tabs_tab__content--active__oFWmX"}}},function(e){e.O(0,[46,774,888,179],(function(){return a=4372,e(e.s=a);var a}));var a=e.O();_N_E=a}]);