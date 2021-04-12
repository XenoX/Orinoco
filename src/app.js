import Basket from './services/Basket';

const numberOfProducts = document.getElementById('numberOfProducts');

if (numberOfProducts) {
    numberOfProducts.innerHTML = Basket.get().length;
}