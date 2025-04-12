// Функції для роботи з бекендом
import axios from 'axios';
export async function getCategories() {
    const categories = await axios.get('https://dummyjson.com/products/categories')
    return categories.data;
}

export async function getProductsFromCategory(category) {
    const products = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return products.data.products;
 };