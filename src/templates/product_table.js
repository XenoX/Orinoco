export default products => `
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nom</th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix</th>
            </tr>
        </thead>
        <tbody>
            ${getProductLines(products)}
        </tbody>
    </table>
`;

function getProductLines(products) {
    return `
        ${products.map(product => {
            return `<tr>
                <td><img src="${product.imageUrl}" alt="" height="100px"></td>
                <td><a href="product.html?id=${product._id}">${product.name}</a></td>
                <td>${product.quantity}</td>
                <td>${[(product.price * product.quantity).toString().slice(0, -2), ',', (product.price * product.quantity).toString().slice(-2)].join('')} €</td>
            </tr>`;
        }).join('')}
    `
}