export default product => `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <img src="${product.imageUrl}" alt="" width="100%">
            </div>
            <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title mb-3">${product.name}</h5>
                    <p class="card-text mb-5">${product.description}</p>
                    <p class="card-text mb-5">${getLenses(product)}</p>
                    <p class="card-text mb-5">
                        <small class="text-muted">${[product.price.toString().slice(0, -2), ',', product.price.toString().slice(-2)].join('')} €</small>
                    </p>
                    <button id="basketButton" type="button" class="btn btn-outline-primary">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

function getLenses(product) {
    return `
        <label for="lenses">Lentilles :</label>
        <select class="form-select" name="lenses" id="lenses">
            ${product.lenses.map(lense => {
                return `<option value="${lense}">${lense}</option>`;
            }).join('')}
        </select>
    `
}