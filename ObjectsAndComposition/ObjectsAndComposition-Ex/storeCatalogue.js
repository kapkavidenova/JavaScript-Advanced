function solve(array){
    let catalogue = {};

    for (const iterator of array.sort()) {
        const [nameProduct,price] = iterator.split(' : ');
        //price = Number(price);
        //nameProduct = nameProduct.toLower();
        let firstLetter = nameProduct[0];

        if(!catalogue[firstLetter]){
        catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({nameProduct,price:Number(price)});
    }
    let result = [];

    Object.entries(catalogue).forEach(x=>{
        let values = x[1]
        .map(item=> `  ${item.nameProduct}: ${item.price}`)
        .join('\n');

        let string = `${x[0]}\n${values}`;
        result.push(string);
    })
    return result.join('\n');
}

console.log(solve(
 ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));