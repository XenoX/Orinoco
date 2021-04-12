import ApiClient from './services/ApiClient';
import productCardTemplate from './templates/product_card';

const productsContainer = document.getElementById('products');

if (productsContainer) {
    ApiClient.get('cameras').then(products => {
        products.map(product => {
            productsContainer.innerHTML += productCardTemplate(product);
        });
    });
}