export default class Basket {
    static get() {
        return JSON.parse(window.localStorage.getItem('basket')) ?? [];
    }

    static set(data) {
        window.localStorage.setItem('basket', JSON.stringify(data));
        return this.get();
    }

    static add(object) {
        const basket = this.get();
        const productIndexAlreadyExist = basket.findIndex(product => product._id === object._id);

        if (productIndexAlreadyExist !== -1) {
            basket[productIndexAlreadyExist].quantity = basket[productIndexAlreadyExist].quantity + 1;
        } else {
            object.quantity = 1;
            basket.push(object);

            document.getElementById('numberOfProducts').innerHTML = basket.length;
        }

        return this.set(basket);
    }
}