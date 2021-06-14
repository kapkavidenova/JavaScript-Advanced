function solve(array){

    return array.filter((x,i)=>i % 2 !==0)
    .map(a=>a*2)
    .reverse()
    .join(' ');
}
console.log(solve([10, 15, 20, 25]));
