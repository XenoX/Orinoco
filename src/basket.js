import ApiClient from './services/ApiClient';
import Basket from './services/Basket';
import productTableTemplate from './templates/product_table';

const basketContainer = document.getElementById('basket');

if (basketContainer) {
    basketContainer.innerHTML = productTableTemplate(Basket.get());

    const totalContainer = document.getElementById('total');
    let total = Basket.get().map(product => product.price * product.quantity).reduce((prev, curr) => prev + curr);
    total = [total.toString().slice(0, -2), ',', total.toString().slice(-2)].join('');
    totalContainer.innerHTML = `${total} €`;

    document.getElementById('orderButton').addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;

        if (!isAlpha(firstName) || !isAlpha(lastName) || !isAlpha(city) || !isEmail(email)) {
            return;
        }

        const body = {
            contact: {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                email: email
            },
            products: Basket.get().map(product => product._id)
        };

        ApiClient.post('cameras/order', body).then(response => {
            document.getElementById('numberOfProducts').innerHTML = Basket.set([]).length;
            return window.location.replace(`/order.html?total=${total}&orderId=${response.orderId}&firstName=${firstName}`);
        });
    });

    function isAlpha(value) {
        return /^[a-zA-Z]+$/.test(value);
    }

    function isEmail(value) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }
}