// function solve(array){

//     return Math.max(...array.flat(1))
// };
//other desicion
function solve(array){
    return Math.max(...array.reduce((a,b)=>[...a,...b],[]));
}

console.log(solve([[20, 50, 10],
                  [8, 33, 145]]
                  ));