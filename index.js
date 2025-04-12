import"./assets/styles-BK7AYJoX.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";c.defaults.baseURL="https://dummyjson.com/products";async function u(){const{data:t}=await c.get("/category-list");return t}async function p(t=1){const{data:e}=await c.get(`?limit=12&skip=${(t-1)*12}`);return e}const a={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),modal:document.querySelector(".modal")};function l(t){const o=["All",...t].map(s=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${s}</button>
        </li>
        `).join("");a.categoriesList.insertAdjacentHTML("beforeend",o)}function m(t){const e=t.map(({id:o,title:s,thumbnail:r,brand:n,category:i,price:d})=>`
         <li class="products__item" data-id="${o}">
    <img class="products__image" src="${r}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: ${d}$</p>
 </li>
          `).join("");a.productsList.insertAdjacentHTML("beforeend",e)}async function g(){try{const t=await u();l(t);const{products:e}=await p();m(e)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",g);
//# sourceMappingURL=index.js.map
