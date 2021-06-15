
//const array = [1, 2 , 3, 4];
//   const reducer = (acc,curr)=>acc + curr;
//   console.log(array.reduce(reducer));
//   console.log(array.reduce(reducer, 5));
/////////////////////////////////////////////////

// let array = [20, 10, 5, 30, 8];
// function sumNumbers(acc, curr) {
//     return acc + curr;
// }
// let sum = array.reduce(sumNumbers,0);
// console.log(sum);
////////////////////////////////////////////////////////

// let array = [20, 10, 5, 30, 8];
// let sum = array.reduce(function(acc,curr){
//     return acc + curr;
// },0);

// console.log(sum);

////////////////////////////////////////////////////////////
//arrow F
// let array = [20, 10, 5, 30, 8];
// let sum = array.reduce((acc,x)=> acc + x,0);
// console.log(sum);

//find average
let array = [20, 10, 5, 30, 8];
let average = array.reduce((acc,x,i,arr)=>{
    return acc + x/arr.length;
},0);
console.log(average);
