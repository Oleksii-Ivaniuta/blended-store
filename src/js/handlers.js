import { openModal } from './modal';
import { getCategories, getProductById, getProducts } from './products-api';
import {
  renderCategories,
  renderProductInModal,
  renderProducts,
} from './render-function';

let productId = null;

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

export async function onProductsItemClick(e) {
  if (e.target === e.currentTarget) return;

  productId = e.target.closest('.products__item').dataset.id;

  const product = await getProductById(productId);

  renderProductInModal(product);

  openModal();
}
