function applyTaxToProduct({id}) {
    const tax = fetchProductTax(id);
    return product.cost * tax;
}

function productsInCartTotalCost() {
    const products = getCartProducts();
    let total = 0;

    products.forEach(product => {
        product.cost = applyTaxToProduct(product);
        total += product.cost;
    });

    return total;
}