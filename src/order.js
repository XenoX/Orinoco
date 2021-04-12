const orderIdContainer = document.getElementById('orderId');
const firstNameContainer = document.getElementById('firstName');
const priceContainer = document.getElementById('price');


if (orderIdContainer && firstNameContainer && priceContainer) {
    const UrlSearchParams = new URLSearchParams(window.location.search);
    const orderId = UrlSearchParams.get('orderId');
    const firstName = UrlSearchParams.get('firstName');
    const price = UrlSearchParams.get('total');

    orderIdContainer.innerHTML = orderId;
    firstNameContainer.innerHTML = firstName;
    priceContainer.innerHTML = price;
}