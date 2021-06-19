function solve(arr) {
    return arr.sort((x, y) => x.length - y.length || x.localeCompare(y)).join('\n');
}

console.log(solve(['alpha',
    'beta',
    'gamma']
));
console.log(solve(['test',
    'Deny',
    'omen',
    'Default']

));
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']


));