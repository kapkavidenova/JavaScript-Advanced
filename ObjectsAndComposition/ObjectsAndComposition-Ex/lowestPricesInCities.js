function solve(input) {
    let result = {};
    for (const iterator of input) {
       let [town, product, price] = iterator.split(' | ');
        price = Number(price);

        if (result[product]) {
            result[product] = result[product].price <= price
                ? result[product]
                : { town, price: price };
        } else {
            result[product] = { town, price: price }
        }
    }
    for (const product in result) {
       console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    }
}

console.log(solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
));