function solve(array){
    let result = array;

    return result.sort((x,y)=>x-y)
    .slice(result.length/2,result.length);
}
console.log(solve([4, 7, 2, 5]));