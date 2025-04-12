// Функції для роботи з бекендом
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/products';
export async function getCategories() {
  const { data } = await axios.get('/category-list');
  return data;
}

export async function getProductsByCategory(category, page = 1) {
  const { data } = await axios.get(
    `/category/${category}?limit=12&skip=${(page - 1) * 12}`
  );
  return data;
}

export async function getProducts(page = 1) {
  const { data } = await axios.get(`?limit=12&skip=${(page - 1) * 12}`);
  return data;
}

export async function getProductById(id) {
  const { data } = await axios.get(`/${id}`);
  return data;
}

export async function getProductsByQuery(query, page = 1) {
  const { data } = await axios.get(
    `/search?q=${query}&limit=12&skip=${(page - 1) * 12}`
  );
  return data;
}
