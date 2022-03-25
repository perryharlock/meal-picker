(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9213)}])},9213:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(5893),i=n(7294),s=n(9008),r=JSON.parse('[{"id":"1","name":"Chorizo Carbonara","img":"chorizo-carbonara.webp","rating":10,"time":15,"tags":[{"item":"Pasta"},{"item":"Chorizo"},{"item":"Carbonara"}],"ingredients":[{"name":"Spaghetti","quantity":"400","quantityType":"g"},{"name":"Chorizo","quantity":"100","quantityType":"g"},{"name":"Peppers","quantity":"2"},{"name":"Eggs","quantity":"4"},{"name":"Parmesan","quantity":"75","quantityType":"g"},{"name":"Smoked Paprika","quantity":"1/2","quantityType":"tsp"},{"name":"Extra Virign Olive Oil","quantity":"1","quantityType":"tbsp"}]},{"id":"2","name":"Chorizo & Mozzarella Gnocchi Bake","img":"chorizo-gnocchi.webp","rating":9,"time":30,"tags":[{"item":"Chorizo"},{"item":"Gnocchi"},{"item":"Mozzarella"}],"ingredients":[{"name":"Chicken","quantity":"300","quantityType":"g"},{"name":"Potato gnocchi","quantity":"500","quantityType":"g"},{"name":"Mozzarella","quantity":"100","quantityType":"g"},{"name":"Olive oil","quantity":"1","quantityType":"tbsp"},{"name":"Onion","quantity":"1"},{"name":"Garlic cloves","quantity":"3"},{"name":"Chorizo","quantity":"150","quantityType":"g"},{"name":"Plum tomatoes","quantity":"1","quantityType":"tin"},{"name":"Oregano","quantity":"1","quantityType":"tbsp"},{"name":"Chilli flakes","quantity":"1","quantityType":"tsp"},{"name":"Basil leaves","quantity":"2"}]},{"id":"3","name":"Spaghetti Bolgnese","img":"spaghetti-bolognese.webp","rating":9,"time":45,"tags":[{"item":"Spaghetti"},{"item":"Bolognese"}],"ingredients":[{"name":"Cooking spray","quantity":"1","quantityType":"tbsp"},{"name":"Beef mince","quantity":"500","quantityType":"g"},{"name":"Spaghetti","quantity":"300","quantityType":"g"},{"name":"Onion","quantity":"2"},{"name":"Carrots","quantity":"2"},{"name":"Celery sticks","quantity":"2","quantityType":"g"},{"name":"Garlic cloves","quantity":"2"},{"name":"Chopped tomatoes","quantity":"2","quantityType":"tins"},{"name":"Dried oregano","quantity":"2","quantityType":"tsp"},{"name":"Beef stock cube","quantity":"2"}]},{"id":"4","name":"Spaghetti Bolgnese","img":"spaghetti-bolognese.webp","rating":9,"time":45,"tags":[{"item":"Spaghetti"},{"item":"Bolognese"}],"ingredients":[{"name":"Cooking spray","quantity":"1","quantityType":"tbsp"},{"name":"Beef mince","quantity":"500","quantityType":"g"},{"name":"Spaghetti","quantity":"300","quantityType":"g"},{"name":"Onion","quantity":"2"},{"name":"Carrots","quantity":"2"},{"name":"Celery sticks","quantity":"2","quantityType":"g"},{"name":"Garlic cloves","quantity":"2"},{"name":"Chopped tomatoes","quantity":"2","quantityType":"tins"},{"name":"Dried oregano","quantity":"2","quantityType":"tsp"},{"name":"Beef stock cube","quantity":"2"}]}]'),l=n(2095),_=n.n(l),c=function(e){var t=e.children,n=e.className;return(0,a.jsx)("div",{className:"".concat(_().container," ").concat(n||""),children:t})},o=n(5897),m=n.n(o),u=function(e){var t=e.basketLength;return(0,a.jsx)("header",{className:m().header,children:(0,a.jsxs)(c,{className:m().header__content,children:[(0,a.jsxs)("h1",{children:["meal",(0,a.jsx)("span",{className:m().header__highlight,children:"pick"}),"er"]}),t?(0,a.jsx)("span",{className:m().header__badge,children:t>99?"9+":t}):""]})})},d=n(6986),g=n.n(d),h=function(e){var t=e.ingredient;return(0,a.jsxs)("li",{className:g().ingredient,children:[(0,a.jsx)("div",{children:t.name}),(0,a.jsxs)("div",{children:[t.quantity,"g"!==t.quantityType?" ":"",t.quantityType]})]},"tag-".concat(t.name))},y=n(625),p=n.n(y),q=function(e){var t=e.tag;return(0,a.jsx)("li",{className:p().tag,children:t})},x=n(7243),b=n.n(x),f=function(e){var t=e.children;return(0,a.jsx)("span",{className:b()["sr-only"],children:t})},k=n(8225),j=n.n(k),N=function(e){var t=e.meal,n=e.handleAdd,s=e.handleRemove,r=e.basketLength,l=(0,i.useState)(!1),_=l[0],c=l[1],o=(0,i.useState)(!0),m=o[0],u=o[1];return(0,i.useEffect)((function(){0===r&&(u(!0),c(!1))})),(0,a.jsxs)("li",{className:j().meal,children:[(0,a.jsx)("h3",{className:j().meal__title,children:t.name}),(0,a.jsxs)("div",{className:j().meal__upper,children:[(0,a.jsx)("ul",{className:j().meal__tags,children:t.tags.map((function(e){return(0,a.jsx)(q,{tag:e.item},"tag-".concat(e.item))}))}),(0,a.jsx)("img",{className:j().meal__img,src:t.img,alt:t.name,width:"375",height:"250"}),(0,a.jsxs)("div",{className:j().meal__actions,children:[!0===m&&(0,a.jsxs)("button",{className:j().meal__btn,onClick:function(){u(!1),c(!0),n(t)},children:["+",(0,a.jsx)(f,{children:"Add ingredients to basket"})]}),_&&(0,a.jsxs)("button",{className:j().meal__btn,onClick:function(){c(!1),u(!0),s(t)},children:["-",(0,a.jsx)(f,{children:"Add ingredients to basket"})]})]})]}),(0,a.jsxs)("details",{className:j().meal__ingredients,children:[(0,a.jsx)("summary",{className:j()["meal__ingredients-title"],children:"Ingredients"}),(0,a.jsx)("ul",{className:j()["meal__ingredients-list"],children:t.ingredients.map((function(e){return(0,a.jsx)(h,{ingredient:e},"ingredient-".concat(e.name))}))})]})]},"meal-".concat(t.id))},v=n(2836),T=n.n(v),C=function(){return(0,a.jsx)("footer",{className:T().footer,children:(0,a.jsx)(c,{children:(0,a.jsxs)("a",{href:"https://github.com/perryharlock",target:"_blank",rel:"noopener noreferrer",className:T().footer__highlight,children:["\xa9 ",(new Date).getFullYear()," Crayons by Perry Harlock"]})})})},B=n(8211),M=n.n(B),S=function(e){var t=e.ingredientListVisible,n=e.basket,i=e.toggleIngredientList,s=e.resetBasket;return(0,a.jsxs)("div",{className:"".concat(M().basket," ").concat(t?M()["basket--open"]:""),children:[(0,a.jsxs)("div",{className:M().basket__actions,children:[(0,a.jsxs)("button",{className:M().basket__btn,onClick:s,children:["Reset",(0,a.jsx)(f,{children:" Selected Meals"})]}),(0,a.jsxs)("button",{className:M().basket__btn,onClick:i,children:[t?"Close":"View",(0,a.jsx)(f,{children:" Selected Meals"})]})]}),t&&n.map((function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:e.name}),(0,a.jsx)("ul",{children:e.ingredients.map((function(t,n){return(0,a.jsxs)("li",{className:M().basket__ingredient,children:[(0,a.jsx)("div",{children:t.name}),(0,a.jsxs)("div",{children:[t.quantity,t.quantityType]})]},e+"-"+n)}))})]})}))]})},w=n(3117),z=n.n(w),O=function(){var e=(0,i.useState)([]),t=e[0],n=e[1],l=(0,i.useState)(0),_=l[0],o=l[1],m=(0,i.useState)(!1),d=m[0],g=m[1],h=function(e){t.push(e),n(t),o(t.length)},y=function(e){var a=t.indexOf(e);t.splice(a,1),n(t),o(t.length)};return(0,a.jsxs)("div",{className:z().meals,children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:"mealpicker"}),(0,a.jsx)("meta",{name:"description",content:"Meal picker app"}),(0,a.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,a.jsx)(u,{basketLength:_}),(0,a.jsxs)("main",{className:z().meals__main,children:[(0,a.jsxs)(c,{children:[(0,a.jsx)("h2",{className:z().meals__title,children:"Pick your meals and get an instant shopping list!"}),(0,a.jsx)("ul",{className:z().meals__list,children:r.map((function(e){return(0,a.jsx)(N,{basketLength:_,meal:e,handleRemove:y,handleAdd:h},e.id)}))})]}),_?(0,a.jsx)(S,{basket:t,ingredientListVisible:d,resetBasket:function(){n([]),o(0),g(!1)},toggleIngredientList:function(){g(!d)}}):""]}),(0,a.jsx)(C,{})]})}},8211:function(e){e.exports={basket:"Basket_basket___IiOF",basket__ingredient:"Basket_basket__ingredient__qWKey",basket__actions:"Basket_basket__actions__qToQJ",basket__btn:"Basket_basket__btn__KVH3v","basket--open":"Basket_basket--open__iRBik"}},2836:function(e){e.exports={footer:"Footer_footer__Dhw_9",footer__highlight:"Footer_footer__highlight__o_Lot"}},2095:function(e){e.exports={container:"Grid_container__u9mbX"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",header__content:"Header_header__content__iEV_n",header__highlight:"Header_header__highlight__Yc3h9",header__badge:"Header_header__badge__DYP7F"}},6986:function(e){e.exports={ingredient:"Ingredient_ingredient__5ufpw",ingredient__title:"Ingredient_ingredient__title__Hcod1"}},8225:function(e){e.exports={meal:"Meal_meal__wa4DR",meal__upper:"Meal_meal__upper__NX3uk",meal__title:"Meal_meal__title__C9mWC",meal__tags:"Meal_meal__tags__JFlib",meal__actions:"Meal_meal__actions___DWPi",meal__img:"Meal_meal__img__SZYqW",meal__btn:"Meal_meal__btn__dfPKX",meal__ingredients:"Meal_meal__ingredients__6VoX7","meal__ingredients-title":"Meal_meal__ingredients-title__Fcc1o","meal__ingredients-list":"Meal_meal__ingredients-list__9fDuF"}},7243:function(e){e.exports={"sr-only":"SrOnly_sr-only__ncnME"}},625:function(e){e.exports={tag:"Tag_tag__vq_rC"}},3117:function(e){e.exports={meals__main:"Meals_meals__main__mNj69",meals__list:"Meals_meals__list__lWBy1",meals__title:"Meals_meals__title__ovvBk"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);