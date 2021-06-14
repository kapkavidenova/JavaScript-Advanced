
function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        array[i]<0 ? result.unshift(array[i]) : result.push(array[i]);    
    }
    return result.join('\n');

}
console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));