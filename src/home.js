import { onDOMContentLoaded, onProductsItemClick } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

refs.productsList.addEventListener('click', onProductsItemClick);
