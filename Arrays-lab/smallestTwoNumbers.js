// function solve(array){
//     array = array.sort((a,b)=> a - b);
//     let result = [];
//     result[0] = array.shift();
//     result[1] = array.shift();
//     return result.join(' ');
    
// }
//other solution
function solve(arr){
    let result = arr
    .slice()
    .sort((a,b)=>a - b)
    .slice(0, 2);
    console.log(result.join(" "));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);