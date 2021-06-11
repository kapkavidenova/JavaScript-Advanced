function solve(fruit,weight,price){
    let weightKg = weight / 1000;
    let sum = weightKg * price;
    return `I need $${sum.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange', 2500, 1.80));