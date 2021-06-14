function solve(array){
    let a = Number(array.pop());
    let b = Number(array.shift());
    return a+b;  
}
console.log(solve(['20', '30', '40']));