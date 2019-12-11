// flags are usually an indication that the function
// is doing more than one thing.
function getProducts(onlyActiveProducts) {
    const products = fetchProducts();
    return products.filter((product) => product.isActive === onlyActiveProducts);
}