function solve(array, str) {
    const result = {
        asc: (a, b) => (a - b),
        desc: (a, b) => (b - a),
    };
    return array.sort(result[str]);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));