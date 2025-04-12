import { getCategories, getProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';

// Функції, які передаються колбеками в addEventListners
export async function onDOMContentLoaded() {
  try {
    const categories = await getCategories();
    renderCategories(categories);

    const { products } = await getProducts();
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}
