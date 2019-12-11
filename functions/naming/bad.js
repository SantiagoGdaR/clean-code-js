// anyone should be able to understand the intention of
// a function just by its name.
function tax(product) {
    const tax = fetchProductTax(product.id);
    return product.cost * tax;
}

function calculate() {
    const products = getCardProducts();
    let total = 0;
    products.forEach(product => {
        product.cost = tax(product);
        total += product.cost;
    });

    return total;
}