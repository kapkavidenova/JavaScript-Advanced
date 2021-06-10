function solve(x=5){
    let result = new Array(x);

    for (let index = 0; index < x; index++) {
        result[index] ='* '.repeat(x).trim();
    }
    return result.join("\n");

}
console.log(solve(5));