function solve(array) {
    return array = array.filter((_, i) => i % 2 == 0).join(" ");
}
console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));