import ApiClient from './services/ApiClient';
import Basket from './services/Basket';
import productTemplate from './templates/product';

const productContainer = document.getElementById('product');

if (productContainer) {
    const UrlSearchParams = new URLSearchParams(window.location.search);
    ApiClient.get(`cameras/${UrlSearchParams.get('id')}`).then(product => {
        productContainer.innerHTML = productTemplate(product);

        document.getElementById('basketButton').addEventListener('click', () => {
            Basket.add(product);
        });
    });
}
