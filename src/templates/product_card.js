export default product => `
    <div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="${product.imageUrl}" width="100%" height="225">
            <div class="card-body">
                <h4>${product.name}</h4>
                <p class="card-text">${product.description}</p>
                <div class="mt-4 d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a href="product.html?id=${product._id}" type="button" class="btn btn-sm btn-outline-primary">Voir</a>
                    </div>
                    <small class="text-muted">${[product.price.toString().slice(0, -2), ',', product.price.toString().slice(-2)].join('')} €</small>
                </div>
            </div>
        </div>
    </div>
`;