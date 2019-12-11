function getProducts() {
    return fetchProducts();
}

function getActiveProducts() {
    const products = fetchProducts();
    return products.filter((product) => product.isActive === onlyActiveProducts);
}