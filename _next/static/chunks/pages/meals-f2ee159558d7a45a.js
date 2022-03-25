(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{1038:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meals",function(){return a(3375)}])},3375:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n=a(5893),i=a(7294),s=a(9008),l=JSON.parse('[{"id":"1","name":"Chorizo Carbonara","img":"chorizo-carbonara.webp","rating":10,"time":15,"tags":[{"item":"Pasta"},{"item":"Chorizo"},{"item":"Carbonara"}],"ingredients":[{"name":"Spaghetti","quantity":"400","quantityType":"g"},{"name":"Chorizo","quantity":"100","quantityType":"g"},{"name":"Peppers","quantity":"2"},{"name":"Eggs","quantity":"4"},{"name":"Parmesan","quantity":"75","quantityType":"g"},{"name":"Smoked Paprika","quantity":"1/2","quantityType":"tsp"},{"name":"Extra Virign Olive Oil","quantity":"1","quantityType":"tbsp"}]},{"id":"2","name":"Chorizo & Mozzarella Gnocchi Bake","img":"chorizo-gnocchi.webp","rating":9,"time":30,"tags":[{"item":"Chorizo"},{"item":"Gnocchi"},{"item":"Mozzarella"}],"ingredients":[{"name":"Chicken","quantity":"300","quantityType":"g"},{"name":"Potato gnocchi","quantity":"500","quantityType":"g"},{"name":"Mozzarella","quantity":"100","quantityType":"g"},{"name":"Olive oil","quantity":"1","quantityType":"tbsp"},{"name":"Onion","quantity":"1"},{"name":"Garlic cloves","quantity":"3"},{"name":"Chorizo","quantity":"150","quantityType":"g"},{"name":"Plum tomatoes","quantity":"1","quantityType":"tin"},{"name":"Oregano","quantity":"1","quantityType":"tbsp"},{"name":"Chilli flakes","quantity":"1","quantityType":"tsp"},{"name":"Basil leaves","quantity":"2"}]},{"id":"3","name":"Spaghetti Bolgnese","img":"spaghetti-bolognese.webp","rating":9,"time":45,"tags":[{"item":"Chorizo"},{"item":"Gnocchi"},{"item":"Mozzarella"}],"ingredients":[{"name":"Cooking spray","quantity":"1","quantityType":"tbsp"},{"name":"Beef mince","quantity":"500","quantityType":"g"},{"name":"Spaghetti","quantity":"300","quantityType":"g"},{"name":"Onion","quantity":"2"},{"name":"Carrots","quantity":"2"},{"name":"Celery sticks","quantity":"2","quantityType":"g"},{"name":"Garlic cloves","quantity":"2"},{"name":"Chopped tomatoes","quantity":"2","quantityType":"tins"},{"name":"Dried oregano","quantity":"2","quantityType":"tsp"},{"name":"Beef stock cube","quantity":"2"}]}]'),r=a(2095),_=a.n(r),m=function(e){var t=e.children,a=e.className;return(0,n.jsx)("div",{className:"".concat(_().container," ").concat(a||""),children:t})},c=a(5897),o=a.n(c),u=function(){return(0,n.jsx)("header",{className:o().header,children:(0,n.jsx)(m,{children:(0,n.jsxs)("h1",{children:["Meal",(0,n.jsx)("span",{className:o().header__highlight,children:"pick"}),"er"]})})})},d=a(6986),h=a.n(d),g=function(e){var t=e.ingredient;return(0,n.jsxs)("li",{className:h().ingredient,children:[(0,n.jsx)("div",{children:t.name}),(0,n.jsxs)("div",{children:[t.quantity,"g"!==t.quantityType?" ":"",t.quantityType]})]},"tag-".concat(t.name))},y=a(625),p=a.n(y),f=function(e){var t=e.tag;return(0,n.jsx)("li",{className:p().tag,children:t})},q=a(8225),x=a.n(q),j=function(e){var t=e.meal,a=e.handleAdd,s=e.handleRemove,l=e.basketLength,r=(0,i.useState)(!1),_=r[0],m=r[1],c=(0,i.useState)(!0),o=c[0],u=c[1];return(0,i.useEffect)((function(){0===l&&(u(!0),m(!1))})),(0,n.jsxs)("li",{className:x().meal,children:[(0,n.jsx)("h3",{className:x().meal__title,children:t.name}),(0,n.jsxs)("div",{className:x().meal__upper,children:[(0,n.jsx)("ul",{className:x().meal__tags,children:t.tags.map((function(e){return(0,n.jsx)(f,{tag:e.item},"tag-".concat(e.item))}))}),(0,n.jsx)("img",{className:x().meal__img,src:t.img,alt:t.name,width:"375",height:"250"}),(0,n.jsxs)("div",{className:x().meal__actions,children:[!0===o&&(0,n.jsx)("button",{className:x().meal__btn,onClick:function(){u(!1),m(!0),a(t.id)},children:"+"}),_&&(0,n.jsx)("button",{className:x().meal__btn,onClick:function(){m(!1),u(!0),s(t.id)},children:"-"})]})]}),(0,n.jsxs)("details",{className:x().meal__ingredients,children:[(0,n.jsx)("summary",{className:x()["meal__ingredients-title"],children:"Ingredients"}),(0,n.jsx)("ul",{className:x()["meal__ingredients-list"],children:t.ingredients.map((function(e){return(0,n.jsx)(g,{ingredient:e},"ingredient-".concat(e.name))}))})]})]},"meal-".concat(t.id))},b=a(2836),k=a.n(b),N=function(){return(0,n.jsx)("footer",{className:k().footer,children:(0,n.jsx)(m,{children:(0,n.jsxs)("a",{href:"https://github.com/perryharlock",target:"_blank",rel:"noopener noreferrer",className:k().footer__highlight,children:["\xa9 ",(new Date).getFullYear()," Crayons by Perry Harlock"]})})})},v=a(3117),T=a.n(v),C=function(){var e=(0,i.useState)([]),t=e[0],a=e[1],r=(0,i.useState)(0),_=r[0],c=r[1],o=(0,i.useState)([]),d=o[0],h=o[1],g=function(e){t.push(e),a(t),c(t.length);var n=l.find((function(t){return t.id===e}));void 0!==n&&h(n.ingredients)},y=function(e){var n=t.indexOf(e);t.splice(n,1),a(t),c(t.length)};return(0,n.jsxs)("div",{className:T().meals,children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Meal Picker"}),(0,n.jsx)("meta",{name:"description",content:"Meal picker app"}),(0,n.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,n.jsx)(u,{}),(0,n.jsx)("main",{className:T().meals__main,children:(0,n.jsxs)(m,{children:[(0,n.jsx)("h2",{className:T().meals__title,children:"Pick your meals and get an instant shopping list!"}),(0,n.jsx)("ul",{className:T().meals__list,children:l.map((function(e){return(0,n.jsx)(j,{basketLength:_,meal:e,handleRemove:y,handleAdd:g},e.id)}))})]})}),_?(0,n.jsxs)("div",{className:T().meals__basket,children:[_," meal",1!==_&&"s"," added",(0,n.jsx)("ul",{className:T()["meals__basket-list"],children:d.map((function(e,t){return(0,n.jsxs)("li",{children:[e.name," - ",e.quantity," ","number"!==e.quantityType&&e.quantityType]},e.name+"-"+t)}))}),(0,n.jsx)("button",{onClick:function(){a([]),c(0),h([])},children:"Reset basket"})]}):"",(0,n.jsx)(N,{})]})}},2836:function(e){e.exports={footer:"Footer_footer__Dhw_9",footer__highlight:"Footer_footer__highlight__o_Lot"}},2095:function(e){e.exports={container:"Grid_container__u9mbX"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",header__highlight:"Header_header__highlight__Yc3h9"}},6986:function(e){e.exports={ingredient:"Ingredient_ingredient__5ufpw",ingredient__title:"Ingredient_ingredient__title__Hcod1"}},8225:function(e){e.exports={meal:"Meal_meal__wa4DR",meal__upper:"Meal_meal__upper__NX3uk",meal__title:"Meal_meal__title__C9mWC",meal__tags:"Meal_meal__tags__JFlib",meal__actions:"Meal_meal__actions___DWPi",meal__img:"Meal_meal__img__SZYqW",meal__btn:"Meal_meal__btn__dfPKX",meal__ingredients:"Meal_meal__ingredients__6VoX7","meal__ingredients-title":"Meal_meal__ingredients-title__Fcc1o","meal__ingredients-list":"Meal_meal__ingredients-list__9fDuF"}},625:function(e){e.exports={tag:"Tag_tag__vq_rC"}},3117:function(e){e.exports={meals__list:"Meals_meals__list__lWBy1",meals__title:"Meals_meals__title__ovvBk",meals__basket:"Meals_meals__basket__ERPUr","meals__basket-list":"Meals_meals__basket-list__Pz3Jc"}},9008:function(e,t,a){e.exports=a(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=1038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);